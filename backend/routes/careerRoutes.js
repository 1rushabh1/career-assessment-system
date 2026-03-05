const router = require("express").Router();
const { getAllCareers } = require("../controllers/careerController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

router.get("/", protect, getAllCareers);

router.post("/create", protect, restrictTo("admin"), async (req, res) => {
  const Career = require("../models/Career");
  const career = await Career.create(req.body);
  res.json(career);
});

module.exports = router;