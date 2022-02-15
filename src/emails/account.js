// const nodemailer =require('nodemailer')
const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '';
sgMail.setApiKey(sendgridAPIKey);
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
const sendWelcomeeEmail = (email,name)=>{
    sgMail.send({
          to:email,
          from:'yschristian7@gmail.com',
          subject:"Thanks for joining in! ",
          text:`welcome to the app ${name}.i hope you will enjoy our app`
    })
}
module.exports={ sendWelcomeeEmail  }
