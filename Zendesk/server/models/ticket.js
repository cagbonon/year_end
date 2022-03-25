const mongoose = require('mongoose');

const ticket = new mongoose.Schema({
  department: {
    type: String,
    //required: true,
  },
  subject: {
    type: String,
    //required: true
  },
  description: {
    type: String,
    //required: true
  },
  url_image: {
    type: String,
  },
  status: {
    type: String,
    default: "En cours.."
  },
  cc: [],
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Ticket', ticket);