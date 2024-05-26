const nodemailer = require("nodemailer");
require('dotenv').config();

const sendEmail = async(user = {name: 'sovick',email: 'dev.sovick@gmail.com' }, eventName="AirTrible") => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.APP_EMAIL,
            pass: process.env.APP_PASSWORD,
        },
    });
    
    const mailOptions = {
        from: process.env.APP_EMAIL,
        to: user.email,
        subject: `Hi ${user.name}`,
        text: `You are successfully registered to ${eventName}.`,
    };
    
    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail