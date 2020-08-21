const homeRoutes = require ("./home");
const usersRoutes = require ("./users");

module.exports = function(app){
  homeRoutes(app);
  usersRoutes(app);
};