const db = require("../models");
const { Meal } = require("../models");
const Op = db.Sequelize.Op;

// Create and Save a new Meal
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Meal
  const { title, description } = req.body;
  const meal = {
    title: title,
    description: description,
  };

  try {
    const meal = await Meal.create(req.body);
    return res.status(201).json({
      meal,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Retrieve all Meals from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Meal.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};

/* const createMeal = async (req, res) => {
  try {
    const meal = await Meal.create(req.body);
    return res.status(201).json({
      meal,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
 */
