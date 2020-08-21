// jshint esversion:6

const express = require ("express");
const bodyParser = require ("body-parser");
const routes = require ("./routes");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

routes(app);

app.listen(3000, function() {
  console.log("Server started at port 3000");
});
