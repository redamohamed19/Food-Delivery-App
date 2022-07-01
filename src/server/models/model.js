const mongoose = require('mongoose');

const user = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    SecondName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    PhoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('UserData', user);
