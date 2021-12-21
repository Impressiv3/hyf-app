const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ message: "hooray! welcome to our api!" });
});

module.exports = router;
