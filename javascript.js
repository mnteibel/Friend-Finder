var questions = [
		"You like moving heavy boxes (Not do you mind moving heavy boxes but if you like it)",
		"You rarely get out of the shower before drying off.",
		"You prefer to spread room temperature butter on toast.",
		"You are always looking for new pals!"
			];

var options = [
	"1 (Strongly Disagree)",
	"2 (Disagree)",
	"3 (Neutral)",
	"4 (Agree)",
	"5 (Strongly Agree)"];

function makeQuestions() {
	for (var i = 0; i < questions.length; i++) {
		var insertedQuestions = $("<div>")

		var question = $("<p>").text(questions[i])

		insertedQuestions.append(question)

		$("#questionDiv").append(insertedQuestions)
	}
}

makeQuestions();