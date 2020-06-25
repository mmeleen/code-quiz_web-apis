// Retrieve and log stored high scores
var retrievedHighscores = JSON.parse(localStorage.getItem("highScores"));
console.log(retrievedHighscores);

// Variable declaration
var clearBtn = document.getElementById("clear-btn");

// Sort high scores
retrievedHighscores.sort(function(a,b){
  return b.score - a.score;
})

// Generate high scores list and add to page
for(var i = 0; i < retrievedHighscores.length; i++){
  var highscoreDiv = document.createElement("li");
  highscoreDiv.classList.add("list-group-item")
  highscoreDiv.textContent = retrievedHighscores[i].initials + " - " + retrievedHighscores[i].score;
  console.log(document.getElementById("highscore-container"));
  document.getElementById("highscore-container").append(highscoreDiv);
}

// Clear high scores
function clearScores() {
	console.log(event.target);
  localStorage.clear();
  console.log(highScores);
  document.getElementById("highscore-container").innerHTML = "";
  highScores = [];
}

// Event listener for Clear Scores button
clearBtn.addEventListener("click", clearScores);
