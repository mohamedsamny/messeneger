const homeController = require("../controllers/home");

module.exports = function(app){
  app.get('/', function(req, res) {
    homeController.getHomePage(req, res);
  });
};