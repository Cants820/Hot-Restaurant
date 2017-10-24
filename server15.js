// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 2343;

//setting up arrays for reservations and waiting list
// =============================================================
var reservations = [
  {
    routeName:"reservation1",
    name:"joseph",
    phoneNumber:"4084089999",
    email:"joseph.scubadiver@gmail.com",
    uniqueId:1
  }
];
var waitingList = [];

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setting up routes
// =============================================================
app.get("/", function(req, res) {
 res.send("welcome to hot restaurants")
});

app.get("/reservations", function(req,res){
  res.json(reservations[0]);
})


app.listen(PORT, function() {
  console.log("We are listening to Port: " + PORT);
});
