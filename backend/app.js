require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING + process.env.DB_NAME)
  .then(() => console.log("Database connection: SUCCESS!"))
  .catch((err) => console.log({ err }));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
});

module.exports = app;
