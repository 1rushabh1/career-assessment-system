require("dotenv").config();
const mongoose = require("mongoose");
const Career = require("../models/Career");

mongoose.connect(process.env.MONGO_URI);

const careers = [
  {
    careerName: "Software Engineer",
    cluster: "Technology",
    traitWeightage: {
      analytical: 0.9,
      creative: 0.5,
      leadership: 0.4,
      social: 0.3,
      technical: 0.9
    },
    requiredSubjects: ["Math", "Computer Science"],
    recommendedDegrees: ["B.Tech CS", "B.Sc CS"],
    futureScopeScore: 9,
    skillsRequired: ["DSA", "Coding"],
    backupCareers: ["Data Analyst"]
  },
  {
    careerName: "Graphic Designer",
    cluster: "Creative",
    traitWeightage: {
      analytical: 0.4,
      creative: 0.9,
      leadership: 0.3,
      social: 0.4,
      technical: 0.5
    },
    requiredSubjects: ["Arts"],
    recommendedDegrees: ["B.Des"],
    futureScopeScore: 7,
    skillsRequired: ["Photoshop"],
    backupCareers: ["UI Designer"]
  }
];

async function seed() {
  await Career.deleteMany();
  await Career.insertMany(careers);
  console.log("Seeded");
  process.exit();
}

seed();