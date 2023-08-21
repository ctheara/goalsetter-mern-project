const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");
const { protect  } = require('../middleware/authMiddleware')

//get and post routes
//since its the same route for both, we group them
router.route("/").get(protect, goalController.getGoals).post(protect, goalController.setGoal);

//put and delete routes
router
  .route("/:id")
  .put(protect, goalController.updateGoal)
  .delete(protect, goalController.deleteGoal);

module.exports = router;
