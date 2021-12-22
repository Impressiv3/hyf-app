const express = require('express');
const router = express.Router();
const mealRouter = require("./meal.router.js");



router.get("/", async (req, res) => {
  res.json({ message: "hooray! welcome to our api!" });
});

router.get("/meals", mealRouter);

module.exports = router;
