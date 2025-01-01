const express = require('express');
require('dotenv').config();

const cors = require('cors');
const connectDB = require('./db/database');
const Appointment = require('./routes/appointmentRoute');
const Service = require('./routes/serviceRoute');


const app = express();
app.use(cors({
    origin:true,
    credentials:true,
}))


app.use(express.json());
app.use(express.urlencoded({extended:true}));
const PORT = process.env.PORT 


app.use('/appointment',Appointment);
app.use('/services',Service)


app.listen(PORT,() => {
    console.log(`Server Running on port ${PORT},`);
    connectDB();
});
