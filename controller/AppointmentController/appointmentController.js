const Appointment = require('../../models/AppointMentModel');
const Service = require('../../models/ServiceModel');
const asyncHandler = require('express-async-handler');
const { sendBookingConfirmation} = require('../../utils/mailer')
const { v4: uuidv4 } = require("uuid");
//  User can add appointment 

const addAppointment = asyncHandler(async (req, res) => {
    try {
        const { name, email, phone, serviceId, date, timeSlot } = req.body;

        // Check for missing fields
        if (!name || !email || !phone || !serviceId || !date || !timeSlot) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the date is in the past
        const today = new Date();
        const appointmentDate = new Date(date);
        today.setHours(0, 0, 0, 0);

        if (appointmentDate < today) {
            return res.status(400).json({ message: "Cannot book an appointment for a past date" });
        }

        // Check if the email has booked an appointment within the last 2 days
        const twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

        const recentAppointment = await Appointment.findOne({
            "contactInfo.email": email,
            date: { $gte: twoDaysAgo }
        });

        if (recentAppointment) {
            return res.status(400).json({
                message: "You have already booked an appointment recently. Please wait for 2 days before booking again."
            });
        }

        // Check if the time slot is already booked for the service
        const existingAppointment = await Appointment.findOne({ serviceId, date, timeSlot });
        if (existingAppointment) {
            return res.status(400).json({ message: "The selected time slot is already booked. Please choose a different time slot." });
        }

        // Check if the time slot is valid (business logic: e.g., 9 AM to 6 PM)
        const validTimeSlots = [
            "09:00 AM - 10:00 AM",
            "10:00 AM - 11:00 AM",
            "11:00 AM - 12:00 PM",
            "01:00 PM - 02:00 PM",
            "02:00 PM - 03:00 PM",
            "03:00 PM - 04:00 PM",
            "04:00 PM - 05:00 PM"
        ];

        if (!validTimeSlots.includes(timeSlot)) {
            return res.status(400).json({ message: "Invalid time slot. Please choose a valid time slot." });
        }
        const service  = await Service.findById(serviceId);
        if(!service){
            return res.status(400).json({message:"Invalid Service Id"});
        }
        // Create the appointment
        const appointment = new Appointment({
            name,
            contactInfo: { email, phone },
            serviceId,
            date: appointmentDate,
            timeSlot,
            referenceId: uuidv4(),
        });

        await appointment.save();
        
        // Send success response
        res.status(200).json({
            message: "Appointment booked successfully,We've sent you a E-mail for booking detail",
            referenceId: appointment.referenceId,
        });
        await sendBookingConfirmation(email, appointment.referenceId, name, timeSlot, date, service.name);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



//  users can see the appointment they have 


module.exports = { addAppointment };
