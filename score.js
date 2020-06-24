var retrievedHighscores = JSON.parse(localStorage.getItem("highScores"));

console.log(retrievedHighscores);

retrievedHighscores.sort(function(a,b){
  return b.score - a.score;
})

for(var i = 0; i < retrievedHighscores.length; i++){
  var highscoreDiv = document.createElement("div");
  highscoreDiv.textContent = retrievedHighscores[i].initials + " - " + retrievedHighscores[i].score;
  console.log(document.getElementById("highscore-container"));
  document.getElementById("highscore-container").append(highscoreDiv);
}