const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const userRouter = require("./src/routes/globalRoutes");
const session = require("express-session");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/files", express.static(path.resolve(__dirname, "tmp", "uploads")));

app.use(
  session({ secret: "secret12345", resave: true, saveUninitialized: true })
);

app.use("/nodeapp", userRouter);

module.exports = app;
