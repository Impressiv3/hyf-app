const { Meal } = require("../models");

const createMeal = async (req, res) => {
  try {
    const meal = await Meal.create(req.body);
    return res.status(201).json({ meal });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMeal,
};
