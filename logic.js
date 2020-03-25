// element for questions, answers, 

// variable for a timer

// variable for the choices

// variable start button

//feedback variable

// function to start the quiz
    // start timer set interval-text-content
    // show the starting time
    // hide the start screen  setAttribute.(class.hide);
    // removeAttribute

//function get the new question
    // section title to update question 
    //clear answers
    // get current object question from an array
    //update title - clear old question 
    // for each loop through

    var startButton = document.getElementById("start-btn");
    var questionsElement = document.getElementById("question-container");
    var questionElement = document.getElementById("question");
    var answersElement = document.getElementById("answers");

    var currentQuestionIndex = 0;


    startButton.addEventListener("click", startGame)

    function startGame() {

        startButton.setAttribute("class", "hide");

        questionsElement.setAttribute("class", "");

        // ? var questionIndex = 0;

        setNextQuestion();
        
    };

    function setNextQuestion () { 

        var currentQuestion = questions[currentQuestionIndex];
        var displayTitle = document.getElementById("question");
        displayTitle.textContent = currentQuestion.title;
        answersElement.innerHTML = "";
        currentQuestion.choices.forEach(function(choice, i) {

            var choiceButton = document.createElement("button");
            choiceButton.setAttribute("class", "choice");
            choiceButton.setAttribute("value", choice);
            choiceButton.textContent = i + 1 + ". " + choice;
            choiceButton.onclick = selectAnswer;
            displayTitle.appendChild(choiceButton);
3
        });
    };


    function selectAnswer () {


    };

    

    var questions = [
        {
          title: "Commonly used data types DO NOT include:",
          choices: ["strings", "booleans", "alerts", "numbers"],
          answer: "alerts"
        },
        {
          title: "The condition in an if / else statement is enclosed within ____.",
          choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
          answer: "parentheses"
        }]; 