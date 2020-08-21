"use strict";

var homeRoutes = require("./home");

module.exports = function (app) {
  homeRoutes(app);
};