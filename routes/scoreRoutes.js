const express = require('express');

const {
  getScore,
  updateScore,
  createScore,
} = require('../controllers/scoreController');

const router = express.Router();

router.route('/score').get(getScore).put(updateScore).post(createScore);

module.exports = router;
