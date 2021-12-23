const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/meals", (req, res) => res.json({ message: "this is meals" }));
router.post("/meals", controllers.createMeal);

router.get("/", (req, res) => res.send("This is Api!"));

module.exports = router;
