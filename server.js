//Dependencies
const http = require("http"); 
const fs = require("fs"); 
const express = require("express"); 
const path = require("path"); 

var app = express()
const PORT = process.env.PORT || 3000; 
// var server = http.createServer(handleRequest); 

//assists with data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//html route to return the notes file
app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "./public/notes.html")); 
}); 

//html route to return to index.html
app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "./public/index.html")); 
})

//code to "start" server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });