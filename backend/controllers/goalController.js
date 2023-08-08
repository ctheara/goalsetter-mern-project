const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalsModel");

// @desc    Get goals (for user)
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  //we are not using try/catch and instead using express-async-handler
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  console.log(req.body);

  res.status(200).json(goal);
});

// @desc    Update goals
// @route   PUT /api/goals
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc    Delete goals
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new error("Goal not found");
  }

  await Goal.findByIdAndRemove(req.params.id);
    // await goal.remove()  //this is what they had


  res.status(200).json({ id: req.params.id})
  // res.status(200).json(req.params.id);
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
