const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is root!"));
router.get("/meals", (req, res) => res.send("This is MEALS!"));
router.post("/meals", controllers.createMeal);

module.exports = router;
