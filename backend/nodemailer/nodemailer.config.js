import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // true for port 465, false for other ports
//   auth: {
//     user: "kasaudhanabhaykumar8562@gmail.com",
//     pass: "shhj sjjs aakn skon",
//   },
// });
export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
  port: process.env.EMAIL_PORT, // e.g., 587
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // App Password (recommended)
  },
});

// export const sender = {
// 	email: "kasaudhanabhaykumar8562@gmail.com",
// 	name: "ABHAY KUMAR",
// };
export const sender = {
  email: process.env.SENDER_EMAIL, // Your Gmail address
  name: process.env.SENDER_NAME, // Your display name
};

export const adminEmail = process.env.ADMIN_EMAIL;
// import dotenv from 'dotenv';
// import nodemailer from 'nodemailer';

// // Load environment variables from .env file
// dotenv.config();

// Create a transporter object using SMTP transport

// Sender information (optional, helpful for labeling)
// export const sender = {
//   email: process.env.SENDER_EMAIL,          // Your Gmail address
//   name: process.env.SENDER_NAME,            // Your display name
// };

// Optional: Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error("Error connecting to email server:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

// kasaudhanabhaykumar8562@gmail.com
// scgh eaik jvmm wtjt
