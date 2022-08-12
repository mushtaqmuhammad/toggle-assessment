const express = require('express');
const { StatusCodes } = require('http-status-codes');
require('dotenv').config();

const app = express();
app.use(express.json());

const { connectDB } = require('./db/connectDB');
const scoreRoutes = require('./routes/scoreRoutes');

app.use('/api', scoreRoutes);

const PORT = process.env.PORT || 5001;

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is Running at PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

console.clear();
start();
