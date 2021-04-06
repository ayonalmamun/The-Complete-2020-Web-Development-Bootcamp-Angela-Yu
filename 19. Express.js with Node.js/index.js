const express = require('express');
const app = express(); 

app.get("/", function(req, res){
    res.send("Hu");
});

app.get("/contact", function(req, res){
    res.send("Contact Me");
});

app.get("/about", function(req, res){
    res.send("Ayon Al Mamun");
});

app.get("/Hobbies", function(req, res){
    res.send("Pasta Nasta");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});