require("dotenv").config();
const nodemailer = require("nodemailer");

const user = process.env.user;
const pass = process.env.pass;

const transport = nodemailer.createTransport({
  //outlook
  host: "smtp.office365.com",
  port: 587,
  secureConnection: false,
  secure: false,
  requireTLS: true,
  tls: {
    rejectUnauthorized: false,
  },
  service: "Outlook365",
  //----------------

  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendConfirmationEmail = (
  email,
  sujets,
  description,
  CC,
  url_image
) => {
  transport
    .sendMail({
      from: user,
      to: email,
      cc: CC,
      subject: sujets,
      html: `<h1>Vous avez un nouveau ticket créé</h1>
        <div> Description: ${description} </div>
        <div>
        <img src="${url_image}" alt="Image : ${url_image}"/>
        </div>
        `,
    })
    .catch((err) => console.log("error", err));
};
