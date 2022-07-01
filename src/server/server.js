const routes = require('./routes/routes');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser=require("cookie-parser")
require('dotenv').config();
var cors = require('cors');

const mongoString = process.env.ATLAS_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});
const app = express();
app.use(cookieParser())
app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(8000, () => {
  console.log(`Server Started at ${8000}`);
});
