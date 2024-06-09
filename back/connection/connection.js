const mongoose =require('mongoose')

const url = "mongodb+srv://praveenkumarv989:12@cluster0.wl6fsri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const Connection =()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((err)=>{
        console.log("Connection Error",err)
    })
}

module.exports = Connection;