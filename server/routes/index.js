const { Router } = require("express");
const router = Router();
const meal = require("../controllers/meal.controller")

router.get("/meals", meal.findAll);
router.post("/meals", meal.create);

router.get("/", (req, res) => res.send("This is Api!"));

module.exports = router;
