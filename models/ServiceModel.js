const mongoose = require('mongoose');

const serviceAppointment =  new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    description:{
        type:String,
    },
    duration:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("Service",serviceAppointment);