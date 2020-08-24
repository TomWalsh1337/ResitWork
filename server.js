var express = require("express");
var path = require("path");
var connectDB = require("./DB/Connection");
var assert = require("assert");
var router = express.Router();

var app = express();

connectDB();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/HTML files')))

app.get("/", function (request, response){
    response.sendFile(__dirname+"/Index.html")
});

app.listen(3000);

console.log("Server running on port 3000");