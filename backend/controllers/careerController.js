const Career = require("../models/Career");

exports.getAllCareers = async (req, res) => {
  const careers = await Career.find();
  res.json(careers);
};