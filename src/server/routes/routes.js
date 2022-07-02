const express = require('express');
const Model = require('../models/model');
const bcrypt = require('bcrypt');
const { createTokens, validateTokens } = require('../JWT');

const router = express.Router();

module.exports = router;

//Post Method

router.post('/post', async (req, res) => {
  const hash = bcrypt.hashSync(req.body.Password, 10);

  const data = new Model({
    FirstName: req.body.FirstName,
    SecondName: req.body.SecondName,
    Email: req.body.Email,
    PhoneNumber: req.body.PhoneNumber,
    Password: hash,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get('/getuser', async (req, res) => {
  try {
    const user = await Model.findOne({ Email: req.body.Email }).exec();
    if (!user) {
      res.json({ response: 'Email or Password Incorrect' });
    }
    bcrypt.compare(req.body.Password, user.Password).then((match) => {
      console.log(match);
      if (!match) {
        res.status(400).json({ response: 'Email or Password Incorrect' });
      }
      const accessToken = createTokens(user);
      res.cookie('access-token', accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: true,
      });
      res.json('Logged In');
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/profile', validateTokens, (req, res) => {
  res.json('get acccess to profile');
});
