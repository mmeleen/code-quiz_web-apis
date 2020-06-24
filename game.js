var startBtn = document.querySelector("#start-btn");
var timerSpan = document.querySelector("#timer");
var startTextDiv = document.querySelector("#start-text");
var gameTextDiv = document.querySelector("#game-text");
var endTextDiv = document.querySelector("#end-text");
var questionEl = document.querySelector("#question-text");
var answerList = document.querySelector("#answer-choices");
var scoreSpan = document.querySelector("#score-span");
var correctBadge = document.querySelector("#correct-badge");
var wrongBadge = document.querySelector("#wrong-badge");

// console.log(startBtn, timerSpan, startTextDiv, gameTextDiv, endTextDiv, questionEl, answerList, scoreSpan, correctBadge, wrongBadge);

var totalTime = 15;
var finalScore = 0;
var questionIndex = 0;

function startQuiz() {
	console.log("startQuiz", totalTime);
	// start timer function (need to make this)
  // set text content of timer on DOM
	// call getQuestion function
	//startTextDiv.classList.add("d-none");
	//gameTextDiv.classList.remove("d-none");
	startTimer(totalTime);
	getQuestion();
}

function startTimer(timeLeft) {

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
	// current.choices.forEach(function(){
		
	// });
	
	// update the DOM with the current answer choices
    // for loop that goes through the answer choices
      // creates a button
      // set a class attribute of "choice"
      // set a value attribute of choice
      // set text content of button to be choice
      // append button to the DOM
}

function checkAnswer() {
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