var path = require("path")

function htmlRoutes(app) {

// Opening Page
	app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/start.html"))
	})
// Questions Page
	app.get("/questions", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/questions.html"))
	})

}

module.exports = htmlRoutes