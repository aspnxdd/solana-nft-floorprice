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

const collectionsAddress = [
  {
    name: "solanadogesnfts",
    address: "HwMBMB6QpPJNyFnbVtt2UKVmJQPGnKKsMfaxNUyWahmc",
    address2: "----"
  },
  {
    name: "thugbirdz",
    address: "CzrE3LhijwcmvsXZa8YavqgR9EzW3UGqoSWZKwGpZVqM",
    address2: "AvkbtawpmMSy571f71WsWEn41ATHg5iHw27LoYJdk8QA"
  },
  {
    name: "degenapes",
    address: "9BKWqDHfHZh9j39xakYVMdr6hXmCLHH5VfCpeq2idU9L",
    address2: "----"
  },
  {
    name: "abstratica",
    address: "absF5t1MP7dXFhbgUgaTi7ffJM2WhBg1cmrY5s7h3By",
    address2: "----"
  },
  {
    name: "frakt",
    address:"6wPYbuGRXZjVw2tCeTxwRiQU7AzFDTeFEKuUFpJZpcix",
    address2: "----"
  },
  {
    name: "pixelpenguin",
    address:"HrmSkref9wZ5UMRH8AxaQtAQbEA1SyhVpBLKe7Vz2zcP",
    address2: "----"
  },
  {
    name: "solanimals",
    address:"5Fc7Zy7HgRatL8XhX5uqsUFEjGPop1uJXKrp3Ws7m1Tn",
    address2: "----"
  },
  {
    name: "soldalas",
    address:"8KUU21MBhtJBXnPMEpq7HZ3egoymHopizCydw12uNKfC",
    address2: "----"
  },
  {
    name: "soliens",
    address:"Ak2TGuzxce5HMV6Z6KJR5nKKRUvAt5go8172JQYHgPbb",
    address2: "----"
  },
  {
    name: "solpops",
    address:"Fe6JTzvUk8pu3oYoH7UgRKvUnQw3DPbhSdxZCRh9YRxi",
    address2: "----"
  },
  {
    name: "solchihuahua",
    address:"5q9UPUMoJ2zGrgHk4xjpzf5TF8hcuowbmYkVCX2f3Bnt",
    address2: "----"
  },
  {
    name: "smb",
    address:"9uBX3ASjxWvNBAD1xjbVaKA74mWGZys3RGSF7DdeDD3F",
    address2: "----"
  },
  
  
  
  
];

async function save() {
  try {
    const { data: solarianData } = await axios(
      "https://offers.solarians.click/api/offers"
    );
    collectionsAddress.forEach(async function (coll) {
      let prices = solarianData.map(function (e) {
        //for DogesNFT
        if (e.Creators[0]?.Address == coll.address || e.Creators[0]?.Address == coll.address2) {
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
    save();
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
