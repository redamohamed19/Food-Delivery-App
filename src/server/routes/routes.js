const express = require('express');
const Model = require('../models/model');
const bcrypt = require('bcrypt');
const { createTokens, validateTokens } = require('../JWT');
const { check, validationResult } = require('express-validator');

const router = express.Router();

module.exports = router;

//Post Method

router.post(
  '/post',
  [
    check('Email', 'Please provide a valid Email').isEmail(),
    check('Password', 'Password should have minimum 6 caracter').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const hash = bcrypt.hashSync(req.body.Password, 10);

    const data = new Model({
      FirstName: req.body.FirstName,
      SecondName: req.body.SecondName,
      Email: req.body.Email,
      PhoneNumber: req.body.PhoneNumber,
      Password: hash,
    });

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const dataToSave = await data.save();
      const accessToken = createTokens(data);
      res.cookie('access-token', accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
      });
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

//Get all Method
router.get('/signin', async (req, res) => {
  try {
    console.log(req.query);
    const user = await Model.findOne({ Email: req.query.Email }).exec();
    if (!user) {
      return res.json({ response: 'Email or Password Incorrect' });
    }
    bcrypt.compare(req.query.Password, user.Password).then((match) => {
      console.log(match);
      if (!match) {
        return res
          .status(400)
          .json({ response: 'Email or Password Incorrect' });
      }
      const accessToken = createTokens(user);
      res.cookie('access-token', accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: true,
      });
      res.json(accessToken);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
router.get('/profile', validateTokens, (req, res) => {
  res.json('get acccess to profile');
});
