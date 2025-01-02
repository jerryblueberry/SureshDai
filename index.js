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
const CONNECTION = process.env.CONNECTION


app.use('/appointment',Appointment);
app.use('/services',Service)

app.get('/', (req, res) => {
    // res.send('Welcome to my Server');
    res.status(200).json(`Welcome to my Server ${PORT} ${CONNECTION}`);
  });
app.listen(PORT,() => {
    console.log(`Server Running on port ${PORT},`);
    connectDB();
});
