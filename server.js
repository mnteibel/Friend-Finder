// Dependencies

var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

// Sets up app

var app = express()
var PORT = process.env.PORT || 3000

// Sets up app data parsing

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Friend Data

// var friends = [
// 	{
// 		name: "Max Teibel",
// 		answers: []
// 	}
// ]

// Routes

// Opening Page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "start.html"))
})
app.get("/questions", function(req, res) {
	res.sendFile(path.join(__dirname, "questions.html"))
})


// Starts the server to begin listening

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT)
})