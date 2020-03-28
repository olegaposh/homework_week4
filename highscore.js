//function to print the high score
/*
function printHighScores(){
var highSCore = JSON.parse(window.localStorage.getItem("Highscores"));
};
// function clear the high score
*/

var highScoreList = document.querySelector("#scores");
var highScoreForm = document.querySelector("#high-score-form");
// the value of the input initals 
var highScoreInput = document.querySelector("#high-score");
var submitBtn = document.querySelector("#submitHighScore");

var highscores = [];
var globalRecentScore = "";

// Constants
const NUM_SCORES = 4;

renderStuff();

// !=== TODO ==== !!
// Clear storage button

// Add Click event on button to call clearStorage

// function to call localStorage.clear also calls renderStuff so that new empty list renders.
function clearStorage() {
    // empty for now
}

// Desc: This function creates a list of scores using the highscores array
// when the function is called.
function renderStuff() {
    // Get JSON string of all scores in localStorage and ;add to an array.
    var currentHighscores = "{}";

    if (localStorage.getItem("highscores") !== null) {
        currentHighscores = localStorage.getItem("highscores");
    }

    // Parse JSON string into a JSON object
    //var lastUser = JSON.parse(localStorage.getItem("user"));
    var scoreObject = JSON.parse(currentHighscores);

    // !=== TODO ==== !!
    // Here we are setting score1 so that we are always replacing the same score.
    // What we want to do is:
    // Check if score 1 exists if it does , if it does not replace score 1
    // check if score 2 exists if it does , if it does not replace score 2
    // check if score 3 exists if it does , if it does not replace score 3
    // check if score 4 exists if it does
    // check if score 5 exists if it does replace score 1 
    if ('score1' in scoreObject) {
        // The score exists
    } else {
        // The score does not exist
    }
    if (globalRecentScore.length > 0) {
        scoreObject.score1 = globalRecentScore;
        scoreObject.score2 = globalRecentScore;
    }

    // Convert JSON object back to string
    // localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("highscores", JSON.stringify(scoreObject));

    ///Fill the array with all of your top 5 scores

    // javascript iterate over javascript object
    for (var score in scoreObject) {
        highscores.push(scoreObject[score]);
    }

    // clear to do list
    highScoreList.innerHTML = "";

    // Set highscore list to current high score

    //render a new li 
    for (var i = 0; i < NUM_SCORES; i++) {
        var hiscore = highscores[i];
        var li = document.createElement("li");

        li.textContent = hiscore;
        highScoreList.appendChild(li);
    }
};

//when form is submitted
highScoreForm.addEventListener("submit", function (event) {
    event.preventDefault();
    saveScore();
});

//taking in input initailstion

//WRAP  saving score in function then call it on submit

// STEPS:
// 1. Store score
//     score is from logic.js on index.html.  We need it in highscore.js on highscore.html
// 2. Get Score
// 3. Display score


function saveScore() {
    //storing the text entered into a varible
    // Stores initial
    var highScoreText = highScoreInput.value.trim();

    if (highScoreText === "") {
        return;
    }

    // Get value of current score
    var storedScore = localStorage.getItem("timeleft");

    // Make new string initials + '-' + score
    var mostRecentScore = highScoreText + " - " + storedScore;

    globalRecentScore = mostRecentScore;
    
    renderStuff();

    //return from function if blank is submitted
    

    // var newScore = {
    //     highScoreText: highScoreList,
    //     score: timeLeft
    // }

    // var scoreDisplay = JSON.parse(window.localStorage.getItem("scores")) || [];
    // highscores.push(newScore);
    // window.location.setItem("score", JSON.stringify(scoreDisplay));
    // highScoreInput.value = "";
}

// function checkForEnter(event) {
//     // "13" represents the enter key
//     if (event.key === "Enter") {
//         saveScore();
//     }
// }

// re-render the list
//renderStuff();

submitBtn.onclick = saveScore;