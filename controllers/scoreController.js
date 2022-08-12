const Score = require('../models/Score.js');
const { StatusCodes } = require('http-status-codes');

const getScore = async (req, res) => {
  const score = await Score.find({});
  res.status(StatusCodes.OK).json({ score: score[0].score });
};

const createScore = async (req, res) => {
  const temp = await Score.create(req.body);
  res.status(StatusCodes.CREATED).json({ score: temp });
};

const updateScore = async (req, res) => {
  const score = await Score.find({});
  let { _id } = score[0];

  await Score.findOneAndUpdate({ _id }, req.body);

  const newScore = await Score.find({});
  res.status(StatusCodes.OK).json({ score: newScore[0].score });
};

module.exports = { getScore, updateScore, createScore };
