// const nodemailer =require('nodemailer')

// async function main() {
// let testAccount = await nodemailer.createTestAccount()
// let transporter = nodemailer.createTransport({
//     host: "main.yschristian7@gmial.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user:'yschristian7@gmial.com', 
//       pass: 'chris123'
//     },

// });
// let info = await transporter.sendMail({
//     from : '"first Nodemailer" <yschristian7@gmial.com>',
//     to :'yegokowe@gmail.com',
//     subject:"hello",
//     text:'here  we go'
//   });
//   console.log("Message sent: %s", info.messageId);
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }

// main().catch(console.error);
const  sgMail = require('@sendgrid/mail')

