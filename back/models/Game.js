const mongoose = require('mongoose');

const Game = mongoose.Schema({
    id:{
        type:String
    }, 
    password:{
        type:String
    }, 
    limit:{
        type:Number
    }
});

module.exports = mongoose.model("Game", Game);