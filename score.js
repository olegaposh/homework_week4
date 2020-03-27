//function to print the high score
/*
function printHighScores(){

var highSCore = JSON.parse(window.localStorage.getItem("Highscores"));


};
// function clear the high score
*/


var highScoreList = document.querySelector("#scores");
var highScoreForm = document.querySelector("#high-score-form");
var highScoreInput = document.querySelector("#high-score");

var highscores = ["OP", "AP", "IP"];

function renderStuff() {

    //render a new entry
    for (var i = 0; i < highscores.length; i++) {

        var hiscore = highscores[i];

        var li = document.createElement("li");
        li.textContent = hiscore;
        highScoreList.appendChild(li);

    }

};


//when form is submitted

highScoreForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var highScoreText = highScoreInput.value.trim();

    highscores.push(highScoreText);
    


});