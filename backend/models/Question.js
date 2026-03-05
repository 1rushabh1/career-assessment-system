const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: String,
  dimension: String,
  options: [
    {
      text: String,
      weightMap: {
        analytical: Number,
        creative: Number,
        leadership: Number,
        social: Number,
        technical: Number
      }
    }
  ]
});

module.exports = mongoose.model("Question", questionSchema);