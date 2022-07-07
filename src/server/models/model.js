const mongoose = require('mongoose');

const user = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: [true, 'please enter a FirstName'],
    },
    SecondName: {
      type: String,
      required: [true, 'please enter a SecondName'],
    },
    Email: {
      type: String,
      required: [true, 'please enter a Email'],
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

//fire a triggers after the doc saved to DB
user.post('save', (doc, next) => {
  console.log(doc);
  next();
});

module.exports = mongoose.model('UserData', user);
