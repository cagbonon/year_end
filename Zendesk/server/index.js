const express = require("express");
const msal = require('@azure/msal-node');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const Thing = require('./models/ticket');
const Ticket = require("./models/ticket");



const SERVER_PORT = 3000;

    // Create Express App and Routes
const app = express();


app.get('/api/ticket/:id', (req, res, next) => {
    Ticket.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
});

app.post('/api/ticket', (req, res, next) => {
    delete req.body._id;
    const thing = new Ticket({
      ...req.body
    });
    thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
});

app.use('/api/ticket', (req, res, next) => {
    Ticket.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
});
    
app.listen(SERVER_PORT, () => console.log(`Starting on localhosh:${SERVER_PORT}!`));

module.exports = app;