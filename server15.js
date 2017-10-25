// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

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
var waitingList = [
   {
    routeName:"reservation2",
    name:"Sai",
    phoneNumber:"8082345511",
    email:"Sai.scubadiver@gmail.com",
    uniqueId:2
  }
];

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setting up routes
// =============================================================
app.get("/", function(req, res) {
 res.sendFile(path.join(__dirname, "index.html"));  

});
app.get("/tables", function(req,res){
  res.sendFile(path.join(__dirname, "tablesView.html"));
})
app.get("/reserve",function(req,res){
  res.sendFile(path.join(__dirname,"reservations.html"));
})
app.get("/api/reservations", function (req,res){
  res.json(reservations);
})
app.get("/api/waitingList", function (req,res){
  res.json(waitingList);
})
app.post("api/clear",function(){
  reservations = [];
  waitingList = [];
})
app.post("/api/reservations", function(req,res){
  if(reservations.length < 5){
    reservations.push(req.body);
    res.json(true);
  } else {
    reservations.push(req.body);
    res.json(false);
  } 

})


app.listen(PORT, function() {
  console.log("We are listening to Port: " + PORT);
});

