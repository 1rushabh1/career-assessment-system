const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  careerName: String,
  cluster: String,
  traitWeightage: {
    analytical: Number,
    creative: Number,
    leadership: Number,
    social: Number,
    technical: Number
  },
  requiredSubjects: [String],
  recommendedDegrees: [String],
  futureScopeScore: Number,
  skillsRequired: [String],
  backupCareers: [String]
});

module.exports = mongoose.model("Career", careerSchema);