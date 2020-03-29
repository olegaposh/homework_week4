
var startButton = document.getElementById("start-btn");
var questionsElement = document.getElementById("question-container");
var questionElement = document.getElementById("questions");
var answerCheck = document.getElementById("answer-check");
var timerElement = document.querySelector("#countdown");

var currentQuestionIndex = 0;
var timeLeft = 30;

// click start button
startButton.addEventListener("click", startGame)

function startGame() {

    startButton.setAttribute("class", "hide");

    questionsElement.setAttribute("class", "");

    createButtons();
    // Defines .choice elements
    setNextQuestion();

    
    counter();

};
// first question 
// for loop goes here? 
function setNextQuestion() {

    var currentQuestion = questions[currentQuestionIndex];
    var displayTitle = document.getElementById("questions");
    displayTitle.children[0].textContent = currentQuestion.title;


    var choices = document.querySelectorAll(".choice");
    // Creating buttons
    // Setting button values
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        //var choiceButton = document.createElement("button");
        //choiceButton.setAttribute("class", "choice");
        choices[i].setAttribute("value", currentQuestion.choices[i]);
        choices[i].textContent = i + 1 + ". " + currentQuestion.choices[i];
        //displayTitle.appendChild(choiceButton);
    }

};


// first question 
// for loop goes here? 
function createButtons() {

    var currentQuestion = questions[currentQuestionIndex];
    var displayTitle = document.getElementById("questions");

    // Create empty span element to hold question title
    var span = document.createElement("span");
    displayTitle.appendChild(span);

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.onclick = selectAnswer;
        // choiceButton.setAttribute("value", currentQuestion.choices[i]);
        // choiceButton.textContent = i + 1 + ". " + currentQuestion.choices[i];
        // choiceButton.onclick = selectAnswer;
        displayTitle.appendChild(choiceButton);
    }

};

// When a user clicks on a button this runs.
function selectAnswer(event) {
    // if they get it wrong
    if (event.target.value !== questions[currentQuestionIndex].answer) {
        timeLeft = timeLeft - 3;
        checkAnswer();
        answerCheck.innerHTML = "Wrong!!!"
        
    }
    else {
        checkAnswer();
        answerCheck.innerHTML = "Correct Homeslice!";


    }

    currentQuestionIndex++;

    // When the current question is greater than the total number of questions
    if (currentQuestionIndex >= questions.length) {
        // Currentscore
        localStorage.setItem("timeleft", timeLeft);
        window.location.href = "./highscore.html";

    }


    setNextQuestion();
};


//time counter
function counter() {
    var timeInterval = setInterval(function () {
        timerElement.textContent = timeLeft;
        timeLeft--;

        if (timeLeft <= 0) {

            timerElement.textContent = "";
            alert("Your time is up son");
            clearInterval(timeInterval);
            timeLeft = 0;
            window.location.href = "./highscore.html";
        }

    }, 1000);

};



function checkAnswer() {

    var checkDaAnswer = setTimeout(function () {

        answerCheck.innerHTML = "";
    }, 1000);
}




var questions = [
    {
        title: "What's Alex's favorite color?",
        choices: ["blue", "green", "teal", "red"],
        answer: "teal"
    },
    {
        title: "What is SpongeBob's favorite activity?",
        choices: ["jelly fishing", "driving", "blowing bubbles", "cooking"],
        answer: "jelly fishing"
    },
    {
        title: "You're in 3rd place, what place are you in when you pass the person in 2nd place?",
        choices: ["1st", "2nd", "3rd", "none of the above"],
        answer: "2nd"
    },
    {
        title: "How fast does the earth spin?",
        choices: ["100 mph", "1000 mph", "10,000 mph", "earth is flat"],
        answer: "1000 mph"
    },
    {
        title: "What's Alex's favorite hobby?",
        choices: ["music", "jelly fishing", "bowling", "surfing"],
        answer: "music"
    }
];





