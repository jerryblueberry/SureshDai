const express = require('express');
const { addAppointment } = require('../controller/AppointmentController/appointmentController');
const router = express.Router();

//  can later add more layers of middleware for better validation of the input
router.post('/add',addAppointment);


module.exports = router