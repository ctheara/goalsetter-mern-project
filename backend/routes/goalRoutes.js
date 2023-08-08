const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");

//get and post routes
//since its the same route for both, we group them
router
  .route("/")
  .get(goalController.getGoals)
  .post(goalController.setGoal);

//put and delete routes
router
  .route("/:id")
  .put(goalController.updateGoal)
  .delete(goalController.deleteGoal);

module.exports = router;
