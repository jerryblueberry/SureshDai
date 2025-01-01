const nodemailer = require('nodemailer');
const mjml2html = require('mjml');
const {bookingConfirmationTemplate} = require('../emailTemplates/bookingConfiramtionTemplate')
const sendBookingConfirmation = async (email, referenceId, name, timeSlot, date, serviceName) => {
    try {
        const { html } = mjml2html(bookingConfirmationTemplate(referenceId, name, email, timeSlot, date, serviceName));

        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Replace with your email service
            auth: {
                user: 'jerrytechs83@gmail.com',
                pass: 'kalc gmre auxn vxle',
            },
        });

        const mailOptions = {
            from: 'Aecon Engineering & Construction Pvt Ltd <jerrytechs83@gmail.com>',
            to: email,
            subject: "Appointment Booking Confirmation",
            html,
        };

        await transporter.sendMail(mailOptions);
        console.log("Booking Confirmation Email sent successfully");
    } catch (error) {
        console.log("Error occurred while sending email", error);
    }
};

module.exports = { sendBookingConfirmation };
