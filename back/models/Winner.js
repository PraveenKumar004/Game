const mongoose = require('mongoose');

const Winner = mongoose.Schema({
    pid:{
        type:String
    }, 
    score:{
        type:Number
    }, 
    mid:{
        type:String
    },
    name:{
        type:String
    }
});

module.exports = mongoose.model("Winner", Winner);