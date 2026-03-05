const router = require("express").Router();
const { submitAssessment } = require("../controllers/assessmentController");
const { protect } = require("../middleware/authMiddleware");

router.post("/submit", protect, submitAssessment);

module.exports = router;