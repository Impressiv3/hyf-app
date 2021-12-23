/* const { Meal } = require("../models"); */
const { Meal } = require("../database/database.js")

const createMeal = async (req, res) => {
  try {
    const user = await Meal.create(req.body);
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMeal,
};
