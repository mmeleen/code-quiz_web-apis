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
var submitForm = document.getElementById("score-submit");
var submitBtn = document.getElementById("submit");
var initialsInput = document.getElementById("initials");
var clearBtn = document.getElementById("clear-btn");

// console.log(startBtn, timerSpan, startTextDiv, gameTextDiv, endTextDiv, questionEl, answerList, scoreSpan, correctBadge, wrongBadge);

var timeLeft = 60;
var finalScore = 0;
var questionIndex = 0;
var interval;
var highScores = JSON.parse(localStorage.getItem("highScores"))  || [];


function startQuiz() {
	// start timer function (need to make this)
  // set text content of timer on DOM
	// call getQuestion function
	startTextDiv.classList.add("d-none");
	gameTextDiv.classList.remove("d-none");
	startBtn.classList.add("d-none");
	startTimer();
	getQuestion();
}

function startTimer() {

  interval = setInterval(function() {
		timeLeft--;
		timerSpan.textContent = timeLeft;

    if (timeLeft <= 0) {
			endQuiz();
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
	var correctAnswer = questionArray[questionIndex].answer;
	console.log(correctAnswer);
	var element = event.target;

  // If that element is a button...
  if (element.matches(".choice") === true) {
		console.log(element.value);
    // Get its data-index value and remove the todo element from the list
		console.log();
		if (element.value === correctAnswer){
			correctPopUp();
		} else {
			wrongPopUp();
			timeLeft -= 10;
			timerSpan.textContent = timeLeft;
		}
		if (questionIndex < (questionArray.length - 1)){
			questionIndex++;
			getQuestion();
		} else {
			endQuiz();
		}
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

function correctPopUp(){
	correctBadge.classList.remove("d-none");
	var fade = setTimeout(function(){
		correctBadge.classList.add("d-none");
	}, 750);
}

function wrongPopUp(){
	wrongBadge.classList.remove("d-none");
	var fade = setTimeout(function(){
		wrongBadge.classList.add("d-none");
	}, 750);
}

function endQuiz() {
	clearInterval(interval);
	if (timeLeft < 0) {
		finalScore = 0;
	} else {
		finalScore = timeLeft;
	}
	scoreSpan.textContent = finalScore;
	gameTextDiv.classList.add("d-none");
	endTextDiv.classList.remove("d-none");
	answerList.classList.add("d-none");
	submitForm.classList.remove("d-none");
}

// function clearScores() {
// 	console.log(event.target);
// 	localStorage.clear();
// }

startBtn.addEventListener("click", startQuiz);
answerList.addEventListener("click", checkAnswer);
// clearBtn.addEventListener("click", clearScores);

submitBtn.addEventListener("click", function(event) {
  //event.preventDefault();
  
  // create user object from submission
  var user = {
    initials: initialsInput.value.trim(),
    score: finalScore
  };

	console.log(user);
	highScores.push(user);
	console.log(highScores);

	// set new submission
	localStorage.setItem("highScores", JSON.stringify(highScores));
});