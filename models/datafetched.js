const mongoose = require('mongoose');

const datafetched = new mongoose.Schema({

    collectionname:{
        type: String,
    },
    floorprice: {
        type: Number, 
    },
    time: {
        type: String,
    },
    marketplace: {
        type: String,
    },
   
    
})

module.exports = mongoose.models.datafetched || mongoose.model('datafetched', datafetched)