const mongoose = require('mongoose');
require('dotenv').config();
const CONNECTION = process.env.CONNECTION;

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(CONNECTION);
        if(connect){
            console.log("Database connected Successfully");
        }else{
            console.log("Error occurred while Connecting to Database");
        }
       
    } catch (error) {
        console.log("Error While Connecting DB",error)
    }
}

module.exports = connectDB;