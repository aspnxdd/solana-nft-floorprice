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
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

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
const SOLANART_URL = "https://ksfclzmasu.medianet.work/nft_for_sale?collection=";
const collectionsAddressSolanart = [
  {
    name:"degenapes",
    collectionName:"degenape"
  },
  {
    name:"solpunks",
    collectionName:"solpunks"
  },
  {
    name:"boldbadgers",
    collectionName:"boldbadgers"
  },
  {
    name:"sollamas-gen2",
    collectionName:"sollamas-gen2"
  },
  {
    name:"solanimals",
    collectionName:"solanimals"
  },

];

const collectionsAddressDigitalEyes = [
  {
    name: "solanadogesnfts",
    address: "HwMBMB6QpPJNyFnbVtt2UKVmJQPGnKKsMfaxNUyWahmc",
    address2: "@@@@@@@",
    uri: "@@@@@@@@",
  },
  {
    name: "thugbirdz",
    address: "CzrE3LhijwcmvsXZa8YavqgR9EzW3UGqoSWZKwGpZVqM",
    address2: "AvkbtawpmMSy571f71WsWEn41ATHg5iHw27LoYJdk8QA",
    uri: "@@@@@@@@",
  },
  {
    name: "degenapes",
    address: "DC2mkgwhy56w3viNtHDjJQmc7SGu2QX785bS4aexojwX",
    address2: "@@@@@@@",
    uri: "@@@@@@@@",
  },
  {
    name: "abstratica",
    address: "absF5t1MP7dXFhbgUgaTi7ffJM2WhBg1cmrY5s7h3By",
    address2: "@@@@@@@",
    uri: "@@@@@@@@",
  },
  {
    name: "frakt",
    address: "6wPYbuGRXZjVw2tCeTxwRiQU7AzFDTeFEKuUFpJZpcix",
    address2: "@@@@@@@",
    uri: "@@@@@@@@",
  },
  {
    name: "pixelpenguin",
    address: "HrmSkref9wZ5UMRH8AxaQtAQbEA1SyhVpBLKe7Vz2zcP",
    address2: "@@@@@@@",
    uri: "@@@@@@@@",
  },
  {
    name: "solanimals",
    address: "5Fc7Zy7HgRatL8XhX5uqsUFEjGPop1uJXKrp3Ws7m1Tn",
    address2: "@@@@@@@",
    uri: "@@@@@@@@",
  },
  {
    name: "soldalas",
    address: "8KUU21MBhtJBXnPMEpq7HZ3egoymHopizCydw12uNKfC",
    address2: "@@@@@@@",
    uri: "@@@@@@@@",
  },
  {
    name: "soliens",
    address: "Ak2TGuzxce5HMV6Z6KJR5nKKRUvAt5go8172JQYHgPbb",
    address2: "@@@@@@@",
    uri: "@@@@@@@@",
  },
  {
    name: "solpops",
    address: "Fe6JTzvUk8pu3oYoH7UgRKvUnQw3DPbhSdxZCRh9YRxi",
    address2: "@@@@@@@",
    uri: "@@@@@@@@",
  },
  {
    name: "solchihuahua",
    address: "5q9UPUMoJ2zGrgHk4xjpzf5TF8hcuowbmYkVCX2f3Bnt",
    address2: "@@@@@@@",
    uri: "@@@@@@@@",
  },
  {
    name: "smb",
    address: "9uBX3ASjxWvNBAD1xjbVaKA74mWGZys3RGSF7DdeDD3F",
    address2: "@@@@@@@",
    uri: "@@@@@@@@",
  },
  {
    name: "solbear",
    address: "@@@@@@@",
    address2: "@@@@@@@",
    uri: "QmS2BZecgTM5jy1PWzFbxcP6jDsLoq5EbGNmmwCPbi7YNH",
  },
  {
    name: "solarians",
    address: "@@@@@@@",
    address2: "@@@@@@@",
    uri: "https://solarians.click/api/metaplex-mints",
  },
  {
    name: "tophatchicks",
    address: "8PiT6FmWusujEEBaNhXHapddGBPyB1QK3iukK5cvYZQV",
    address2: "@@@@@@@",
    uri: "@@@@@@@@@@@@",
  },

  
];
async function saveSolanart() {
  try {
    // save the data in solarianData
    collectionsAddressSolanart.forEach(async function(coll){
      const { data: solanartData } = await axios(
      `${SOLANART_URL}${coll.collectionName}`
      );
      let prices = solanartData.map(function (e) {
        
          return e.price 
        
      });
      // wipe the undefined values
      prices = prices.filter(function (el) {
        return el != undefined;
      });
      // obtain floor price
      const floorPrice = Math.min.apply(Math, prices);

      const date = new Date();
      let today = date.toUTCString();
      // save in DB
      await datafetched.create({
        floorprice: floorPrice,
        time: today,
        collectionname: coll.name,
        marketplace: "solanart"
      });
    })
  
    

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
          (e.Creators[0]?.Address == coll.address && e.Creators[0]?.Verified ) ||
          (e.Creators[4]?.Address == coll.address && e.Creators[4]?.Verified ) ||
          (e.Creators[0]?.Address == coll.address2 && e.Creators[0]?.Verified) ||
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
      let today = date.toUTCString();
      // save in DB
      await datafetched.create({
        floorprice: floorPrice,
        time: today,
        collectionname: coll.name,
        marketplace: "digitaleyes"
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
