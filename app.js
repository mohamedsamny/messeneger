// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const mongoose = require("mongoose");
require("./models");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connection.on("connected", () => {
  // We need to be connected to the DB for this service to work
  finishSetup();
})

mongoose.connection.on("error", (err) => {
  console.log("Error while connecting to MongoDB!");
})

mongoose.connect("mongodb://127.0.0.1/messenger", { useNewUrlParser: true, useUnifiedTopology: true });

function finishSetup() {
  const app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static("public"));

  app.engine('ejs', require('ejs-locals'));
  app.set("view engine", "ejs");

  routes(app);

  app.listen(3000, function() {
    console.log("Server started at port 3000");
  });
};