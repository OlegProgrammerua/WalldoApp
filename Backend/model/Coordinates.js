const mongoose = require('mongoose')

const CoordinateSchema =  new mongoose.Schema({
    x:{
        type:Number,
        required:true,
    },
    y:{
        type:Number,
        required:true
    },
    found:{
        type:Boolean,
        
    },
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Coordinates', CoordinateSchema);

