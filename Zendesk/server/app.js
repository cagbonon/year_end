const express = require("express");
const app = express();
const msal = require('@azure/msal-node');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRoute = require('./routes/api/user');
const ticketRoute = require('./routes/api/ticket');
const departmentRoute = require('./routes/api/department');



// const connectDB = require('./config/db');
// const Thing = require('./models/Ticket');
// const Ticket = require("./models/Ticket");

app.use(bodyParser.json());
app.use(morgan('dev'));



app.get('/', (req, res) => {
    res.status(200).json({
        "message" : "Connect to API"
    });
});


app.use('/users', userRoute);
app.use('/tickets', ticketRoute);
app.use('/departments', departmentRoute);


module.exports = app;