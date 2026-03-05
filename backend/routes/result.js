const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

  const result = {
    name: "Student",
    email: "student@email.com",

    traits: {
      analytical: 8,
      creative: 4,
      social: 3,
      leadership: 5
    },

    stream: "Science",
    career: "Data Scientist",

    roadmap: [
      "Take Science Stream",
      "Study Mathematics",
      "Learn Python + Statistics",
      "Do B.Sc / B.Tech Data Science",
      "Become Data Scientist"
    ]
  };

  res.json(result);
});

module.exports = router;