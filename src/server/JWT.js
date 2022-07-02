const { verify, sign } = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const createTokens = (user) => {
  const accessToken = sign(
    {
      id: user._id,
      FirstName: user.FirstName,
      SecondName: user.SecondName,
      Email: user.Email,
      PhoneNumber: user.PhoneNumber,
    },
    JWT_SECRET
  );
  return accessToken;
};

const validateTokens = (req, res, next) => {
  const accessToken = req.cookies['access-token'];
  if (!accessToken)
    return res.status(400).json({ message: 'User not Authantificated' });
  try {
    const validToken = verify(accessToken, JWT_SECRET);
    if (validToken) {
      req.authantificated = true;
      return next();
    }
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

module.exports = { createTokens, validateTokens };
