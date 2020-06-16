// Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

// Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

// Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

// Your app will store every burger in a database, whether devoured or not.

//STEPS:

//require express
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});