var friendsData = require("../data/friendsData")

function apiRoutes(app) {

	app.get("/api/friendsData", function (req, res) {
		res.json(friendsData)
	})

	app.post("/api/friends", function(req, res) {
		var bestMatchNumber = 50
		var bestMatch = ""
		var newFriend = req.body
		console.log(newFriend)

		for (var i = 0; i < friendsData.length; i++) {
			var compareFriend = friendsData[i]
			var compareNumber = 0
			for (var a = 0; a < friendsData[i].answerArr.length; a++) {
				var answerDif = Math.abs(compareFriend.answerArr[a] - newFriend.answerArr[a])
				compareNumber = answerDif + compareNumber
			}
			if (bestMatchNumber > compareNumber) {
				bestMatchNumber = compareNumber
				bestMatch = compareFriend
			} else {
				 bestMatch = bestMatch
			}
		}
		console.log(bestMatch)
		friendsData.push(req.body)
		res.json(bestMatch)
	})
}

		

module.exports = apiRoutes