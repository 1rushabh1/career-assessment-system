const mongoose = require("mongoose");

const assessmentResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  traitScores: Object,
  careerMatches: [
    {
      careerId: { type: mongoose.Schema.Types.ObjectId, ref: "Career" },
      fitScore: Number
    }
  ],
  roadmap: Object
}, { timestamps: true });

module.exports = mongoose.model("AssessmentResult", assessmentResultSchema);