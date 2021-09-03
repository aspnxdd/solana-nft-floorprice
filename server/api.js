const express = require("express");
const mongoose = require("mongoose");
let cors = require("cors");
const connection = {};
const dev = process.env.NODE_ENV !== "production";
const datafetched = require("../models/datafetched");
const server = express();
var axios = require("axios");
require("dotenv").config();
let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, //
};
// declare const
const collectionsAddressSolanart = require("./collectionsSolanart");
const collectionsAddressDigitalEyes = require("./collectionsDigitalEyes");
const SOLANART_URL =
  "https://ksfclzmasu.medianet.work/nft_for_sale?collection=";

dbConnect();

server.use(cors(corsOptions));

server.get("/load", async (req, res) => {
  const { id } = req.headers;
  


  try {
    const data = await datafetched.find({ collectionname: id });
   
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
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
      let prices = solanartData.map(function (e) {
        return e.price;
      });
      // wipe the undefined values
      prices = prices.filter(function (el) {
        return el != undefined;
      });
      // obtain floor price
      const floorPrice = Math.min.apply(Math, prices);

      const date = new Date();
      let today = date.toLocaleString();
      // save in DB
      await datafetched.create({
        floorprice: floorPrice,
        time: today,
        collectionname: coll.name,
        marketplace: "solanart",
      });
    });

    return;
  } catch (error) {
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
      let prices = solarianData.map(function (e) {
        if (
          (e.Creators[0]?.Address == coll.address && e.Creators[0]?.Verified) ||
          (e.Creators[4]?.Address == coll.address && e.Creators[4]?.Verified) ||
          (e.Creators[0]?.Address == coll.address2 &&
            e.Creators[0]?.Verified) ||
          e?.URI.includes(coll.uri) //for SolBears specially and solarians
        ) {
          return e.Price / 1000000000;
        }
      });
      // wipe the undefined values
      prices = prices.filter(function (el) {
        return el != undefined;
      });
      // obtain floor price
      const floorPrice = Math.min.apply(Math, prices);

      const date = new Date();
      let today = date.toLocaleString();
      
      // save in DB
      await datafetched.create({
        floorprice: floorPrice,
        time: today,
        collectionname: coll.name,
        marketplace: "digitaleyes",
      });
    });

    return;
  } catch (error) {
    return error;
  }
}

server.listen(process.env.PORT || 8080, (err) => {
  if (err) throw err;
  console.log("> Ready on http://localhost:3000");

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
  connection.isConnected = db.connections[0].readyState;
  console.log("Connected to db", connection.isConnected);
}
