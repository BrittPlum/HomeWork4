var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
var questions = document.getElementById("questions")
var answerA =document.getElementById("a")
var answerB =document.getElementById("b")
var answerC =document.getElementById("c")
var answerD =document.getElementById("d")
var score = document.getElementById("score")
var highScore = document.getElementById("highScore")
var initials = document.getElementById("initials")

// start button variable that targets the timmer variable to start a count down function
// function var count that takes time off the clock when incorrect answers are chossen
// questions with multipul choice answers
// answers that are presented in a  that interact with timmer if answer is wrong time is subtrtacted and results are stored in score container
// score container that shows score
// container to save initials and scores 

//Logic of program 
// 1. press the start btton x
// 2. triggers a timer x
// 2a. that starts a countdown  x
// 2b. presents user with question x
// 3a. choose an answer if answer is wrong than time is deducted 
// 3b. if correct on to next question
// 4a. timer runs out game over 
// 4b. run out of questions you win
// 5. store count as score and users initials 

// What we will need 
// questions array; timer; incorrect answer function that subtracts time off; function that gives next question; query user for initials; store score

// Question variables
var question1 = {
    question: "What are variables used for in JavaScript Programs?",
    a:" Storing numbers, dates, or other values", 
    b:"Varying randomly",
    c:"Causing high-school algebra flashbacks",
    d:"None of the above",
    value:"a"
}
var question2 = {
    question: "What should appear at the very end of your JavaScript code? The <script LANGUAGE='JavaScript'>tag",
    a:"The '</script>'", 
    b:"The '<script>'",
    c:"The END statement",
    d:"None of the above",
    value:"a"
}
var question3 = {
    question: "Which of the following are capabilities of functions in JavaScript?",
    a:"Return a value", 
    b:"Accept parameters and Return a value",
    c:"Accept parameters",
    d:"None of the above",
    value:"c"
}
var question4 = {
    question: " ______ tag is an extension to HTML that can enclose JavaScript code",
    a:"<SCRIPT>", 
    b:"<BODY>",
    c:"<HEAD>",
    d:"<TITLE>",
    value:"a"
}
var question5 = {
    question: "What is the correct JavaScript syntax to write Hello World?",
    a:" System.out.println('Hello World')", 
    b:"println ('Hello World')",
    c:"document.write('Hello World')",
    d:"response.write('Hello World')",
    value:"c"
}
var question6 = {
    question: " What is the correct syntax for referring to an external script called  'abc.js'?",
    a:"<script href= 'abc.js'>", 
    b:"<script name= 'abc.js'>",
    c:"<script src= 'abc.js'>",
    d:"None of the above",
    value:"c"
}
var question7 = {
    question: " Which is the correct way to write a JavaScript array?",
    a:"var txt = new Array(1:'tim',2:'kim',3:'jim')", 
    b:"var txt = new Array:1=('tim')2=('kim')3=('jim')",
    c:"var txt = new Array('tim','kim','jim')",
    d:"var txt = new Array='tim','kim','jim'",
    value:"c"
}
var question8 = {
    question: "Which of the following best describes JavaScript?",
    a:"a low-level programming language.", 
    b:"a scripting language precompiled in the browser.",
    c:"a compiled scripting language.",
    d:"an object-oriented scripting language.",
    value:"d"
}
var question9 = {
    question: "Using _______ statement is how you test for a specific condition.",
    a:"Select", 
    b:"If",
    c:"Switch",
    d:"For",
    value:"b"
}
var question10 = {
    question: " Is it possible to nest functions in JavaScript?",
    a:"True", 
    b:"False",
    c: null,
    d: null,
    value:"a"
}

var questionList = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

var count = 100;

function gameStart() {
    count = 100
    startButton.disabled = true;
    var questNumber = 0;
    timerCountdown(); 
    getQuestion(questionList[questNumber]);
    var currentQuestion = questionList[questNumber];
    var correctAnswer = currentQuestion.value; 
    $(".answer").on("click", checkAnswer);
    function checkAnswer() {
        if (this.value == correctAnswer) {
            questNumber++;
        }
        else {
            count -=5;
        }
    }

}    



function getQuestion(currentQuest) {
    questions.textContent = currentQuest.question;
    answerA.textContent = "A. " + currentQuest.a;
    answerB.textContent = "B. " + currentQuest.b;
    answerC.textContent = "C. " + currentQuest.c;
    answerD.textContent = "D. " + currentQuest.d;
}

function timerCountdown() {
    timer.textContent = count;
    var countDown = setInterval(function() {
      if (count > 0){ count--;
        timer.textContent = count;   
    } 
      else {
        clearInterval(countDown);
        startButton.disabled = false;
      }      
    }, 1000);

}

// Runtime 
startButton.addEventListener("click", gameStart)


