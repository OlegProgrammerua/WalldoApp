const mongoose = require('mongoose')



const LeaderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Leader', LeaderSchema);