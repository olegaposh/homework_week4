

var highScoreList = document.querySelector("#scores");
var highScoreForm = document.querySelector("#high-score-form");
// the value of the input initals 
var highScoreInput = document.querySelector("#high-score");
var submitBtn = document.querySelector("#submitHighScore");


var globalRecentScore = "";

// Constants
const NUM_SCORES = 5;

renderStuff();


// Desc: This function creates a list of scores using the highscores array
// when the function is called.
function renderStuff() {
    // Pull saved highscore object which has past 5 highscores.
    // Get JSON string of all scores in localStorage and ;add to an array.
    var highscores = [];
    var currentHighscores = "{}";

    if (localStorage.getItem("highscores") !== null) {
        currentHighscores = localStorage.getItem("highscores");
    }

    // Parse JSON string into a JSON object
    //var lastUser = JSON.parse(localStorage.getItem("user"));
    var scoreObject = JSON.parse(currentHighscores);


    // if the user entered in their initials then globalRecentScore will be set and have a length greater than 0.
    if (globalRecentScore.length > 0) {
        scoreObject.score5 = scoreObject.score4;
        scoreObject.score4 = scoreObject.score3;
        scoreObject.score3 = scoreObject.score2;
        scoreObject.score2 = scoreObject.score1;
        scoreObject.score1 = globalRecentScore;
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

    // Set a global variable to the score gottent from index.html: it's the most recent score from playing the quiz
    globalRecentScore = mostRecentScore;

    renderStuff();
}



submitBtn.onclick = saveScore;