const meal = require("../controllers/meal.controller");
const express = require("express");
const router = express.Router();

router.get("/", meal.createMeal);

module.exports = router;