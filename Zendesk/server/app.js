const express = require("express");
//const app = express();
const msal = require('@azure/msal-node');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRoute = require('./routes/api/user');
const ticketRoute = require('./routes/api/ticket');
const departmentRoute = require('./routes/api/department');
const multer  = require('multer');




//const express = require('express');
//bodyParser = require('body-parser'),
cors = require('cors');


// serveur
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json())
var corsOptions = {
    origin: process.env.corsOrigin
  }
  app.use(cors(corsOptions));

// erreur cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



// const connectDB = require('./config/db');
// const Thing = require('./models/Ticket');
// const Ticket = require("./models/Ticket");

app.use(bodyParser.json());
app.use(morgan('dev'));


const filleStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './assets')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname)
  }
});

const upload = multer({storage: filleStorageEngine});

app.use(bodyParser.json());
app.use(morgan('dev'));

app.post("/images", upload.array('images', 5),(req, res) => {
  console.log(req.files);
  res.send(req.files.filename);
  // res.send("Les images sont enregistrés succes");
});



app.get('/', (req, res) => {
    res.status(200).json({
        "message" : "Connect to API"
    });
});


app.use('/users', userRoute);
app.use('/tickets', ticketRoute);
app.use('/departments', departmentRoute);


module.exports = app;