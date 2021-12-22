const express = require("express");
const router = express.Router();
const path = require("path");
const cors = require("cors");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./database/database.js");

const app = express();

const apiRouter = require("./routes/api.router");

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

app.use("/api", apiRouter);

app.get("/*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
