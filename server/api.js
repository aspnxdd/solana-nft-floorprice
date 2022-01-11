const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const datafetched = require("../models/datafetched");
const server = express();
const axios = require("axios");
const cron = require("node-cron");
const Redis = require("redis");

const isDev = process.argv[2] === "--development";

const redisClient = Redis.createClient({
  url: process.env.REDIS_URL,
});
redisClient.on("error", (err) => console.log("Redis Client Error", err));
redisClient.connect();
console.log(redisClient);

if (isDev) {
  require("dotenv").config({
    path: ".env.development",
  });
} else {
  require("dotenv").config();
}

const connection = {};

const collectionsAddressSolanart = require("./collectionsSolanart");
const collectionsAddressDigitalEyes = require("./collectionsDigitalEyes");
const collectionsAddressMagicEden = require("./collectionsMagicEden.json");
const SOLANART_URL =
  "https://qzlsklfacc.medianetwork.cloud/nft_for_sale?collection=";
let DIGITALEYES_URL =
  "https://us-central1-digitaleyes-prod.cloudfunctions.net/offers-retriever?collection=";

dbConnect();

// Custom options for Cors
const corsOptions = {
  optionsSuccessStatus: 200,
};

server.use(cors(corsOptions));

server.get("/load", async (req, res) => {
  const { id } = req.headers;

  const data = await redisClient.get(`load-${id}`);

  if (data != null) {
    return res.status(200).json({
      success: true,
      data: JSON.parse(data),
    });
  } else {
    try {
      const data = await datafetched
        .find({
          collectionname: id,
        })
        .sort({
          time: 1,
        });
      await redisClient.setEx(`load-${id}`, 1800, JSON.stringify(data));
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log("error get", error);
      res.status(400).json({
        success: false,
      });
    }
  }
});

server.get("/loadall", async (req, res) => {
  const data = await redisClient.get("loadall");

  if (data != null) {
    return res.status(200).json({
      success: true,
      data: JSON.parse(data),
    });
  } else {
    try {
      let data = [];

      await Promise.all(
        collectionsAddressSolanart.map(async (e) => {
          data.push(
            await datafetched
              .findOne({
                collectionname: e.name,
                marketplace: "solanart",
              })
              .sort({
                time: -1,
              })
          );
        })
      );

      await Promise.all(
        collectionsAddressDigitalEyes.map(async (e) => {
          data.push(
            await datafetched
              .findOne({
                collectionname: e.name,
                marketplace: "digitaleyes",
              })
              .sort({
                time: -1,
              })
          );
        })
      );

      await Promise.all(
        collectionsAddressMagicEden.map(async (e) => {
          data.push(
            await datafetched
              .findOne({
                collectionname: e.name,
                marketplace: "magiceden",
              })
              .sort({
                time: -1,
              })
          );
        })
      );

      await redisClient.setEx("loadall", 1800, JSON.stringify(data));

      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log("error get", error);
      res.status(400).json({
        success: false,
      });
    }
  }
});

async function saveSolanart() {
  try {
    // save the data in solarianData
    collectionsAddressSolanart.forEach(async function (coll) {
      const { data: solanartData } = await axios(
        `${SOLANART_URL}${coll.collectionName}`
      );

      let floorprice = 999999;
      let priceSum = 0;
      let numberOfOwners = new Set();

      // Save all valid prices
      solanartData
        .filter(
          (e) =>
            Boolean(e.price) &&
            e.id !== 473037 &&
            e.id !== 472737 &&
            e.id !== 576575 &&
            e.id !== 576821 &&
            e.id !== 576368 &&
            e.id !== 576352 &&
            e.id !== 593521 &&
            e.id !== 593494 &&
            e.id !== 655958 &&
            e.id !== 663018
        )
        .forEach((e) => {
          const price = e.price;
          floorprice = price < floorprice ? price : floorprice;
          priceSum += price;
          numberOfOwners.add(e.seller_address);
        });

      // Obtain avrg price
      let dataNfts = {};
      solanartData.forEach(({ seller_address }) => {
        if (!dataNfts[seller_address]) dataNfts[seller_address] = 0;
        dataNfts[seller_address]++;
      });

      let filteredData = {};
      Object.keys(dataNfts).forEach((address) => {
        let seller_address = dataNfts[address];
        if (!filteredData[seller_address]) filteredData[seller_address] = 0;
        filteredData[seller_address]++;
      });

      // Save in DB
      await datafetched.create({
        floorprice: floorprice,
        collectionname: coll.name,
        marketplace: "solanart",
        numberofowners: numberOfOwners.size,
        numberoftokenslisted: solanartData.length,
        numberofnftperowner: filteredData,
        avrgPrice: Math.round((priceSum / solanartData.length) * 100) / 100,
      });
    });

    return;
  } catch (error) {
    console.log("error so", error);
    return error;
  }
}

async function fetchDe(fullData, collUrl, next_cursor) {
  const { data: solarianData } = await axios(
    `${DIGITALEYES_URL}${collUrl}${next_cursor}`
  );
  let _fp = solarianData.price_floor;

  let floor_price = 0;
  if (_fp != null || _fp != 0) floor_price = _fp;
  console.log("floor_price", floor_price);
  console.log("fp", _fp);

  fullData = [...fullData, ...solarianData.offers];

  if (solarianData.next_cursor) {
    return await fetchDe(
      fullData,
      collUrl,
      `&cursor=${solarianData.next_cursor}`
    );
  } else {
    return {
      fullData,
      floor_price,
    };
  }
}

async function saveDigitalEyes() {
  try {
    // save the data in solarianData
    collectionsAddressDigitalEyes.forEach(async function (coll) {
      const { fullData, floor_price } = await fetchDe([], coll.url, "");

      let priceSum = 0;
      let numberOfOwners = new Set();
      let fp = 999999;

      fullData.forEach((e) => {
        const price = e.price / 1000000000;
        fp = price < fp ? price : fp;
        priceSum += price;
        numberOfOwners.add(e.owner);
      });
      // for numberofnftperowner-----------------------------
      let dataNfts = {};
      fullData.forEach(({ owner }) => {
        if (!dataNfts[owner]) dataNfts[owner] = 0;
        dataNfts[owner]++;
      });

      let filteredData = {};
      Object.keys(dataNfts).forEach((address) => {
        let owner = dataNfts[address];
        if (!filteredData[owner]) filteredData[owner] = 0;
        filteredData[owner]++;
      });
      //------------------------------------------------

      // Save in DB
      await datafetched.create({
        floorprice: Number(fp),
        collectionname: coll.name,
        marketplace: "digitaleyes",
        numberofowners: numberOfOwners.size,
        numberoftokenslisted: fullData.length,
        numberofnftperowner: filteredData,
        avrgPrice: Math.round((priceSum / fullData.length) * 100) / 100,
      });
      console.log("saved");
    });

    return;
  } catch (error) {
    console.log("error de", error);
    return error;
  }
}

async function fetchMe(fullData, collUrl, next_cursor) {
  const { data: magicEdenData } = await axios(
    `https://api-mainnet.magiceden.io/rpc/getListedNFTsByQuery?q=%7B%22%24match%22%3A%7B%22collectionSymbol%22%3A%22${collUrl}%22%7D%2C%22%24sort%22%3A%7B%22takerAmount%22%3A1%2C%22createdAt%22%3A-1%7D%2C%22%24skip%22%3A${next_cursor}%2C%22%24limit%22%3A20%7D`
  );

  fullData = [...fullData, ...magicEdenData.results];
  console.log("x", collUrl);
  if (magicEdenData.results.length > 0) {
    return await fetchMe(fullData, collUrl, String(Number(next_cursor) + 20));
  } else {
    return {
      fullData,
    };
  }
}

async function saveMagicEden() {
  try {
    // loop through all the API fetch data
    collectionsAddressMagicEden.forEach((coll, index) => {
      setTimeout(async function(){
        
         
     
      
   
      let { fullData } = await fetchMe([], coll.url, "0");


        console.log("fullData", fullData);
      

      if (fullData.length == 0) return;
      fullData = fullData.filter((e) => e.price > 0);

      // console.log("asdf", magicEdenData.results)
      let priceSum = 0;
      let numberOfOwners = new Set();
      let fp = 999999;

      fullData.forEach((e) => {
        const price = e.price;
        fp = price < fp ? price : fp;
        priceSum += price;
        numberOfOwners.add(e.owner);
      });
      // for numberofnftperowner-----------------------------
      let dataNfts = {};
      fullData.forEach(({ owner }) => {
        if (!dataNfts[owner]) dataNfts[owner] = 0;
        dataNfts[owner]++;
      });

      let filteredData = {};
      Object.keys(dataNfts).forEach((address) => {
        let owner = dataNfts[address];
        if (!filteredData[owner]) filteredData[owner] = 0;
        filteredData[owner]++;
      });

      // Save in DB
      await datafetched.create({
        floorprice: Number(fp),
        collectionname: coll.name,
        marketplace: "magiceden",
        numberofowners: numberOfOwners.size,
        numberoftokenslisted: fullData.length,
        numberofnftperowner: filteredData,
        avrgPrice: Math.round((priceSum / fullData.length) * 100) / 100,
      });
      console.log("saved");
    },5000 *index)
    });
    return;
  } catch (error) {
    console.log("error de", error);
    return error;
  }
}

server.listen(process.env.PORT || 8080, (err) => {
  if (err) throw err;
  console.log("port", process.env.PORT);
  // to start
  cron.schedule("0 */1 * * *", () => {
  console.log("running a task every hour");
  saveDigitalEyes();
  saveSolanart();
  saveMagicEden();
  });
});

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
  connection.isConnected = db.connections[0].readyState === 1;
  console.log("Connected to db", connection.isConnected);
}
