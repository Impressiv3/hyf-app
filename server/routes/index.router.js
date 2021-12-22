const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

router.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
});

module.exports = router;
