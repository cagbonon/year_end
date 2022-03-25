const mongoose = require('mongoose');

const user = new mongoose.Schema({
  firstName: {
    type: String,
    //required: true
  },
  lastName: {
    type: String,
    //required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  departmentId : {
      type : mongoose.Schema.Types.ObjectId,
      ref:  'Department'
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', user);