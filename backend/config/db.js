const mongoose = require("mongoose");
require('dotenv').config()


const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrl:true,
            useUnifiedTopology:true
        })
        console.log("MONGO CONNECTED")
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
} 

module.exports = connectDB;