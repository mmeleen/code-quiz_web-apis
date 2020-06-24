var startBtn = document.querySelector("#start");
var timerSpan = document.querySelector("#timer");
var questionEl = document.querySelector("#question-text");
var answerList = document.querySelector("#answer-choices");
var scoreSpan = document.querySelector("#score-span");
var correctBadge = document.querySelector("#correct-badge");
var wrongBadge = document.querySelector("#wrong-badge");

var secondsLeft = 60;
var finalScore = 0;

function startQuiz() {
	// start timer function (need to make this)
  // set text content of timer on DOM
	// call getQuestion function

  // We only want to start the timer if totalSeconds is > 0
  if (totalSeconds > 0) {
    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
       secondsElapsed variable which is used to check if the time is up */
      interval = setInterval(function() {
        secondsElapsed++;

        // So renderTime() is called here once every second.
        renderTime();
      }, 1000);
  } else {
    alert("Minutes of work/rest must be greater than 0.")
  }
}

function getQuestion() {
	// get the question/answer object from your questions array based on the current question index
	// update the DOM with the current question
  // clear out any old question choices  
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