require("dotenv").config();
const nodemailer = require("nodemailer");

const user = process.env.user;
const pass = process.env.pass;

const transport = nodemailer.createTransport({

  //host: 'smtp.gmail.com',
  //host: 'smtp.zoho.com',
  //secureConnection: false, // TLS requires secureConnection to be false
  //port: 465, // port for secure SMTP
  // tls: {
  //    ciphers:'SSLv3'
  // },
  // secure : true,


  //outlook 
  // service: "Outlook365",
  // host: "smtp.office365.com", // hostname
  // secureConnection: false, // TLS requires secureConnection to be false
  // port: 587, // port for secure SMTP
  // tls: {
  //   ciphers: 'SSLv3'
  // },
  service : "Gmail",
  //----------------


  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendConfirmationEmail = (email, sujets, description, CC) => {
  console.log("jj => " + email);
  
  transport.sendMail({
    from: "Zendesk support",
    to:  email,
    cc: CC,
    subject: sujets,
    html: `<h1>Email de Confirmation</h1>
        <div> Description: ${description} </div>`,
    amp: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
        <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
        <p>GIF (requires "amp-anim" script in header):<br/>
          <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
      </body>
    </html>`
  }).catch(err => console.log("error", err));
};