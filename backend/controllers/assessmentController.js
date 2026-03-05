const Question = require("../models/Question");
const Career = require("../models/Career");
const AssessmentResult = require("../models/AssessmentResult");
const { calculateTraitScores } = require("../services/scoringEngine");
const { matchCareers } = require("../services/careerMatchingEngine");
const { generateRoadmap } = require("../services/roadmapGenerator");

exports.submitAssessment = async (req, res) => {
  const { answers, userId } = req.body;

  const traitScores = calculateTraitScores(answers);

  const careers = await Career.find();
  const matches = matchCareers(traitScores, careers);

  const roadmap = generateRoadmap(matches[0].careerName);

  const result = await AssessmentResult.create({
    userId,
    traitScores,
    careerMatches: matches.slice(0, 5),
    roadmap
  });

  res.json(result);
};