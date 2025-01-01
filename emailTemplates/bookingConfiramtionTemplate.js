const bookingConfirmationTemplate = (referenceId, name, email, timeSlot, date, serviceName) => {
    return `
    <mjml>
        <mj-head>
            <mj-preview>Appointment Booking Confirmation</mj-preview>
            <mj-style>
                .highlight { color: #007BFF; font-weight: bold; }
            </mj-style>
        </mj-head>
        <mj-body>
            <mj-section background-color="#f4f4f4" padding="20px">
                <mj-column>
                    <mj-image width="150px" src="https://res.cloudinary.com/dgsphdhns/image/upload/v1735739440/aecon_xj8ccj.png" alt="Company Logo"></mj-image>
                    <mj-text font-size="20px" color="#333333" font-family="Arial, sans-serif" align="center">
                        Appointment Booking Confirmation
                    </mj-text>
                </mj-column>
            </mj-section>
            <mj-section background-color="#ffffff" padding="20px">
                <mj-column>
                    <mj-text font-size="16px" color="#333333" font-family="Arial, sans-serif">
                        Dear <span class="highlight">${name}</span>,
                    </mj-text>
                    <mj-text font-size="16px" color="#333333" font-family="Arial, sans-serif">
                        Thank you for booking an appointment with us. Your request has been received, and we will review the availability for your selected time slot. Our team will reach out to you shortly via email or phone to confirm the appointment.
                    </mj-text>
                    <mj-divider border-width="1px" border-color="#eeeeee"></mj-divider>
                    <mj-text font-size="16px" color="#333333" font-family="Arial, sans-serif">
                        <strong>Reference ID:</strong> <span class="highlight">${referenceId}</span><br>
                        <strong>Service Name:</strong> <span class="highlight">${serviceName}</span><br>
                        <strong>Date:</strong> <span class="highlight">${date}</span><br>
                        <strong>Time Slot:</strong> <span class="highlight">${timeSlot}</span><br>
                        <strong>Email:</strong> <span class="highlight">${email}</span>
                    </mj-text>
                    <mj-divider border-width="1px" border-color="#eeeeee"></mj-divider>
                    <mj-text font-size="16px" color="#333333" font-family="Arial, sans-serif">
                        If you have any questions or would like to make changes to your booking, please feel free to contact us at:
                    </mj-text>
                    <mj-text font-size="16px" color="#333333" font-family="Arial, sans-serif">
                        <strong>Phone:</strong> +1 (123) 456-7890<br>
                        <strong>Email:</strong> support@aecon.com
                    </mj-text>
                </mj-column>
            </mj-section>
            <mj-section background-color="#f4f4f4" padding="20px">
                <mj-column>
                    <mj-text font-size="14px" color="#999999" font-family="Arial, sans-serif" align="center">
                        Thank you for choosing Aecon Engineering & Construction Pvt Ltd. We look forward to assisting you.
                    </mj-text>
                    <mj-text font-size="14px" color="#999999" font-family="Arial, sans-serif" align="center">
                        © ${new Date().getFullYear()} Aecon Engineering & Construction Pvt Ltd. All Rights Reserved.
                    </mj-text>
                </mj-column>
            </mj-section>
        </mj-body>
    </mjml>
    `;
};

module.exports = { bookingConfirmationTemplate };
