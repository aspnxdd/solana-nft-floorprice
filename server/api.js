const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const datafetched = require("../models/datafetched");
const server = express();
const axios = require("axios");

const isDev = process.argv[2] === "--development";

if( isDev ) {
  require("dotenv").config({ path: ".env.development"});
} else {
  require("dotenv").config();
}

const connection = {};

const collectionsAddressSolanart = require("./collectionsSolanart");
const collectionsAddressDigitalEyes = require("./collectionsDigitalEyes");
const SOLANART_URL = "https://ksfclzmasu.medianet.work/nft_for_sale?collection=";

// Connect to MongoDB
dbConnect();

// Custom options for Cors
const corsOptions = {
  optionsSuccessStatus: 200, 
};

server.use(cors(corsOptions));

server.get("/load", async (req, res) => {
  const { id } = req.headers;
  try {
    const data = await datafetched.find({ collectionname: id }).sort({ time: 1 })
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log("error get", error)
    res.status(400).json({
      success: false,
    });
  }
});

server.get("/loadall", async (req, res) => {
  try {
    let data = [];

    await Promise.all(collectionsAddressSolanart.map(async (e) => {
      data.push(await datafetched.findOne({ collectionname: e.name }).sort({ time: 1 }))
    }))

    await Promise.all(collectionsAddressDigitalEyes.map(async (e) => {
      data.push(await datafetched.findOne({ collectionname: e.name }).sort({ time: 1 }))
    }))

    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log("error get", error)
    res.status(400).json({
      success: false,
    });
  }
});

async function saveSolanart() {
  try {
    // save the data in solarianData
    collectionsAddressSolanart.forEach(async function (coll) {
      const { data: solanartData } = await axios(
        `${SOLANART_URL}${coll.collectionName}`
      );

      // Save all valid prices
      const prices = solanartData.map((e) => e.price).filter(Boolean);

      // Obtain floor price
      const floorPrice = Math.min.apply(Math, prices);

      // Save in DB
      await datafetched.create({
        floorprice: floorPrice,
        collectionname: coll.name,
        marketplace: "solanart",
      });
    });

    return;
  } catch (error) {
    console.log("error so", error)
    return error;
  }
}
async function saveDigitalEyes() {
  try {
    // save the data in solarianData
    const { data: solarianData } = await axios(
      "https://offers.solarians.click/api/offers"
    );

    //for each collection, query and return price
    collectionsAddressDigitalEyes.forEach(async function (coll) {
      //for each item in solarianData
      const prices = solarianData.map(function (e) {
        if (
          (e.Creators[0]?.Address == coll.address && e.Creators[0]?.Verified) ||
          (e.Creators[4]?.Address == coll.address && e.Creators[4]?.Verified) ||
          (e.Creators[0]?.Address == coll.address2 &&
            e.Creators[0]?.Verified) ||
          e?.URI.includes(coll.uri) //for SolBears specially and solarians
        ) {
          return e.Price / 1000000000;
        }
      }).filter(Boolean);

      // Obtain floor price
      const floorPrice = Math.min.apply(Math, prices);

      // Save in DB
      await datafetched.create({
        floorprice: floorPrice,
        collectionname: coll.name,
        marketplace: "digitaleyes",
      });
    });

    return;
  } catch (error) {
    console.log("error de", error)
    return error;
  }
}

server.listen(process.env.PORT || 8080, (err) => {
  if (err) throw err;
  console.log("> Ready on http://localhost:8080");

  // cada 2h guarda en la DB
  setInterval(() => {
    saveDigitalEyes();
    saveSolanart();
  }, 3600000); //1h
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
