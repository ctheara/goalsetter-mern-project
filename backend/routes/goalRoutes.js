const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");

router.route("/").get(goalController.getGoals).post(goalController.setGoals);

router
  .route("/:id")
  .put(goalController.updateGoals)
  .delete(goalController.deleteGoals);

module.exports = router;
