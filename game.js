var startBtn = document.getElementById("start-btn");
var timerSpan = document.getElementById("timer");
var startTextDiv = document.getElementById("start-text");
var gameTextDiv = document.getElementById("game-text");
var endTextDiv = document.getElementById("end-text");
var questionEl = document.getElementById("question-text");
var answerList = document.getElementById("answer-choices");
var scoreSpan = document.getElementById("score-span");
var correctBadge = document.getElementById("correct-badge");
var wrongBadge = document.getElementById("wrong-badge");

// console.log(startBtn, timerSpan, startTextDiv, gameTextDiv, endTextDiv, questionEl, answerList, scoreSpan, correctBadge, wrongBadge);

var timeLeft = 15;
var finalScore = 0;
var questionIndex = 0;

function startQuiz() {
	// start timer function (need to make this)
  // set text content of timer on DOM
	// call getQuestion function
	//startTextDiv.classList.add("d-none");
	//gameTextDiv.classList.remove("d-none");
	startTimer();
	getQuestion();
}

function startTimer() {

  var interval = setInterval(function() {
		timeLeft--;
		timerSpan.textContent = timeLeft;

    if (timeLeft === 0) {
      endQuiz();
      clearInterval(interval);
		}
  }, 1000);

}

function getQuestion() {
	console.log("getQuestion");
	// get the question/answer object from your questions array based on the current question index
	// update the DOM with the current question
	// clear out any old question choices
	var current = questionArray[questionIndex];
	questionEl.textContent = current.title;
	answerList.innerHTML = "";
	for (i=0; i < current.choices.length; i++){
		var newButton = document.createElement("button");
		newButton.setAttribute("class", "choice btn btn-primary my-2");
		newButton.setAttribute("value", current.choices[i]);
		newButton.textContent = current.choices[i];
		answerList.append(newButton);
	}
	
	
	// update the DOM with the current answer choices
    // for loop that goes through the answer choices
      // creates a button
      // set a class attribute of "choice"
      // set a value attribute of choice
      // set text content of button to be choice
      // append button to the DOM
}

function checkAnswer() {
	var element = event.target;

  // If that element is a button...
  if (element.matches(".choice") === true) {
		console.log(element.value);
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");

  }
	// if choice value is incorrect
		// subtract seconds from the timer
		// display new time to page
		// let player know they are incorrect
	// else 
		// let the player know they're correct

	// check if we've run out of questions
		// yes - end game
		// no - get next question
}

function endQuiz() {
	console.log("endQuiz");
}

startBtn.addEventListener("click", startQuiz);
answerList.addEventListener("click", checkAnswer);