const mongoose = require('mongoose');

const ccmodel = new mongoose.Schema({
    
  ticketSlug: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Ccmodel', ccmodel);