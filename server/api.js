const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
const connection = {};
const dev = process.env.NODE_ENV !== 'production'
const datafetched =require("../models/datafetched");
const server = express()
var axios = require('axios');
require('dotenv').config();

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

const directions = {
    doges: "HwMBMB6QpPJNyFnbVtt2UKVmJQPGnKKsMfaxNUyWahmc"
}

async function save(){
    
    try {
        const { data: solarianData } = await axios(
            "https://offers.solarians.click/api/offers"
        );
        
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
            collectionname: "doge"
        });

        console.log("data", data);
        return;
    } catch (error) {
        console.log("error,", error);
        return error;
    }
}


server.listen(process.env.PORT || 8080, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')


    setInterval(() => {
        save()
    }, 120000)

})


async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to db', connection.isConnected);
}