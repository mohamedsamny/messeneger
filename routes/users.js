const usersController = require("../controllers/users");

module.exports = function(app){
  app.get('/users/login', function(req, res) {
    usersController.login(req, res);
  });

  app.get('/users/register', function(req, res) {
    usersController.register(req, res);
  });
};