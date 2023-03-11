const asyncHandler = require("express-async-handler");

//@desc Get goals
//@route GET api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

//@desc Set goals
//@route POST api/goals
//@access private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }
});

//@desc Get goals
//@route PUT api/goals/:id
//@access private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
});

//@desc Get goals
//@route DELETE api/goals/:id
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
