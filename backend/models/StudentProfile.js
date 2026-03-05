const mongoose = require("mongoose");

const studentProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  classLevel: String,
  academicScores: {
    math: Number,
    science: Number,
    english: Number,
    socialScience: Number,
    computer: Number
  },
  location: String
}, { timestamps: true });

module.exports = mongoose.model("StudentProfile", studentProfileSchema);