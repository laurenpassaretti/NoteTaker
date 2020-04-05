//Dependencies
const http = require("http"); 
const fs = require("fs"); 
const express = require("express"); 
const path = require("path"); 
var savedNotes = []
var app = express();
const PORT = process.env.PORT || 3000; 
// var server = http.createServer(handleRequest); 

//assists with data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//html route to return the notes file
app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "./public/notes.html")); 
}); 
app.get("/api/notes", (req,res)=>{
    fs.readFileSync("db/db.json", "utf-8", (err)=>{
        if (err) throw err 
    })
    res.json(newNote); 
})

//html route to return to index.html
app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "./public/index.html")); 
})
// app.get("/api/notes", function(req,res) {
//     res.sendFile(db.json)
//   }); 
// app.post("/notes", function(req,res) {
//     var newNote = req.body; 
//     fs.appendFileSync('./db/db.json', render([newNote]), (req,res) => {
//     console.log("successfully created new note")
//     console.log(newNote); 
//     savedNotes.push(newNote); 
    
//     })
    // console.log(newNote); 
    // savedNotes.push(newNote); 
    // res.json(newNote); 
    // res.json(db.json); 

    
//   });
//   app.get("/api/notes", function(req,res){
//       res.json(db.json)
//   })
//   app.use('/api/notes', express.static(__dirname + 'db/db.json')); 

//code to "start" server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });