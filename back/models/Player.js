const mongoose = require('mongoose');

const Player = mongoose.Schema({
    pid:{
        type:String
    }, 
    password:{
        type:String
    }, 
    name:{
        type:String
    }, 
    mid:{
        type:String
    },
    score:{
        type:Number
    }
});

module.exports = mongoose.model("Player", Player);