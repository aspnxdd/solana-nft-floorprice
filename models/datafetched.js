const mongoose = require('mongoose');

const datafetched = new mongoose.Schema({
    floorprice: {
        type: Number, 
    },
    time: {
        type: String,
    },
   
    
})

module.exports = mongoose.models.datafetched || mongoose.model('datafetched', datafetched)