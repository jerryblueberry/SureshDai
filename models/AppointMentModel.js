const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contactInfo:{
        email:{type:String,required:true},
        phone:{type:String,required:true},
    },
    serviceId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Service",
        required:true,
    },
    date:{
        type:Date,
        required:true
    },
    timeSlot:{
        type:String,
        required:true,

    },
    status:{
        type:String,
        enum:["booked","completed","canceled"],
        default:"booked"
    },
    referenceId:{type:String,
        required:true
    },

},{timestamps:true});


module.exports = mongoose.model("Appointment",appointmentSchema);