var retrievedHighscores = JSON.parse(localStorage.getItem("highScores"));

console.log(retrievedHighscores);

var clearBtn = document.getElementById("clear-btn");


retrievedHighscores.sort(function(a,b){
  return b.score - a.score;
})

for(var i = 0; i < retrievedHighscores.length; i++){
  var highscoreDiv = document.createElement("div");
  highscoreDiv.textContent = retrievedHighscores[i].initials + " - " + retrievedHighscores[i].score;
  console.log(document.getElementById("highscore-container"));
  document.getElementById("highscore-container").append(highscoreDiv);
}

function clearScores() {
	console.log(event.target);
  localStorage.clear();
  console.log(highScores);
  document.getElementById("highscore-container").innerHTML = "";
  highScores = [];
}

clearBtn.addEventListener("click", clearScores);
