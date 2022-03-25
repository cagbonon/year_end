require("dotenv").config();
const nodemailer = require("nodemailer");

const user = process.env.user;
const pass = process.env.pass;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendConfirmationEmail = (email,sujets,description,CC) => {
  transport.sendMail({
    from: user,
    to: email,
    cc: CC,
    subject: sujets,
    html: `<h1>Email de Confirmation</h1>
        <div> Description: ${description} </div>`,
  }).catch(err => console.log("error" ,err));
};