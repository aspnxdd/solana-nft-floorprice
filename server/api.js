const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
const connection = {};
const dev = process.env.NODE_ENV !== 'production'
const datafetched =require("../models/datafetched");
const server = express()
require('dotenv').config()

dbConnect();

server.get('/load', cors(), async(req, res) => {
  
    try {
        const data = await datafetched.find({});
        return res.status(200).json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
        });
    }
})

server.post('/save', cors(), async(req, res) => {
    
    try {
        const solarianRes = await fetch(
            "https://offers.solarians.click/api/offers"
        );
        const solarianData = await solarianRes.json();
        console.log("id", id)
        let prices = solarianData.map(function (e) {
            //for DogesNFT
            if (
                e.Creators[0]?.Address == "HwMBMB6QpPJNyFnbVtt2UKVmJQPGnKKsMfaxNUyWahmc"
                
            ) {
                return e.Price / 1000000000;
            }
        });
        // wipe the undefined values
        prices = prices.filter(function (el) {
            return el != undefined;
        });

        const floorPrice = Math.min.apply(Math, prices);
        let today = "";

        const date = new Date();
        today = date.toUTCString();

        console.log("today", today);
        const data = await datafetched.create({
            floorprice: floorPrice,
            time: today,
        });

        console.log("data", data);
        return res.status(201).json({
            success: true,
            data: data,
        });
    } catch (error) {
        console.log("error,", error);
        res.status(400).json({
            success: false,
        });
    }

})

server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
})


async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL || "", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to db', connection.isConnected);
}