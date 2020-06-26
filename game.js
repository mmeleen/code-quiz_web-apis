// Variable declaration

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

var timeLeft = 60;
var finalScore = 0;
var questionIndex = 0;
var interval;

// Create blank high scores array or retrieve from local storage
var highScores = JSON.parse(localStorage.getItem("highScores"))  || [];

// Start quiz function
function startQuiz() {
	// Hide starting elements
	startTextDiv.classList.add("d-none");
	startBtn.classList.add("d-none");
	// Show quiz elements
	gameTextDiv.classList.remove("d-none");
	// Start timer
	startTimer();
	// Get first question
	getQuestion();
}

// Start timer function
function startTimer() {
	// Timer counts down
  interval = setInterval(function() {
		timeLeft--;
		timerSpan.textContent = timeLeft;
		// End quiz when time runs out
    if (timeLeft <= 0) {
			endQuiz();
		}
  }, 1000);

}

// Get question function
function getQuestion() {
	// Get and display current question from question array
	var current = questionArray[questionIndex];
	questionEl.textContent = current.title;
	// Clear previous answers
	answerList.innerHTML = "";
	// Generate answer choice buttons
	for (i=0; i < current.choices.length; i++){
		var newButton = document.createElement("button");
		newButton.setAttribute("class", "choice btn btn-primary my-2");
		newButton.setAttribute("value", current.choices[i]);
		newButton.textContent = current.choices[i];
		answerList.append(newButton);
	}
}

// Check answer function
function checkAnswer() {
	// Get correct answer from question array
	var correctAnswer = questionArray[questionIndex].answer;
	console.log(correctAnswer);
	// Get clicked element
	var element = event.target;
	console.log(element.value);
	// Check if clicked element was an answer choice
  if (element.matches(".choice") === true) {
		// If correct, trigger correct badge popup
		if (element.value === correctAnswer){
			correctPopUp();
		} else {
			// If wrong, trigger wrong badge popup and impose time penalty
			wrongPopUp();
			timeLeft -= 5;
			timerSpan.textContent = timeLeft;
		}
		// Get next question if more remain, otherwise end quiz
		if (questionIndex < (questionArray.length - 1)){
			questionIndex++;
			getQuestion();
		} else {
			endQuiz();
		}
  }
}

// Function to temporarily display "Correct" badge 
function correctPopUp(){
	correctBadge.classList.remove("d-none");
	var fade = setTimeout(function(){
		correctBadge.classList.add("d-none");
	}, 750);
}
// Function to temporarily display "Wrong" badge 
function wrongPopUp(){
	wrongBadge.classList.remove("d-none");
	var fade = setTimeout(function(){
		wrongBadge.classList.add("d-none");
	}, 750);
}

// End quiz function
function endQuiz() {
	// Stop timer
	clearInterval(interval);
	// If time ran out, score is zero
	if (timeLeft < 0) {
		finalScore = 0;
	} else {
		finalScore = timeLeft;
	}
	// Show post-quiz elements, hide quiz elements
	scoreSpan.textContent = finalScore;
	gameTextDiv.classList.add("d-none");
	endTextDiv.classList.remove("d-none");
	answerList.classList.add("d-none");
	submitForm.classList.remove("d-none");
}

// Event listeners for start and answer buttons 
startBtn.addEventListener("click", startQuiz);
answerList.addEventListener("click", checkAnswer);

// Submit button listener and function
submitBtn.addEventListener("click", function(event) {
  
  // Create user object from submission
  var user = {
    initials: initialsInput.value.trim(),
    score: finalScore
  };
	console.log(user);

	// Add user object to high scores array
	highScores.push(user);
	console.log(highScores);

	// Save high scores array to local storage
	localStorage.setItem("highScores", JSON.stringify(highScores));
});