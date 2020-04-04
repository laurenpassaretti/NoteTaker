//Dependencies
const http = require("http"); 
const fs = require("fs"); 
const express = require("express")

var app = express()
const PORT = process.env.PORT || 3000; 

//html route to return the notes file
app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "notes.html")); 
}); 

//html route to return to index.html
app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "index.html")); 
})

//code to "start" server
app.listen(PORT, function() {
    console.log(`Server is listen listening on ${PORT}`);
}); 
