const mongoose = require('mongoose');

const department = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Department', department);