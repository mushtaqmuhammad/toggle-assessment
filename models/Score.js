const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema(
  {
    score: {
      type: Number,
      required: [true, 'Score is Required'],
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Score', scoreSchema);
