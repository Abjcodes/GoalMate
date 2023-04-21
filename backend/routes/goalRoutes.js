const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.use(protect).route("/").get(getGoals).post(setGoals);
router.use(protect).route("/:id").put(updateGoals).delete(deleteGoals);

module.exports = router;
