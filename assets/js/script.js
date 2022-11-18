var startQuizButton = document.getElementById("quizStart");
var questionsEl = document.getElementById("questions");


var button1 = document.getElementById("a");
var button2 = document.getElementById("b");
var button3 = document.getElementById("c");
var button4 = document.getElementById("d");
var nextQuestion = document.getElementById("nextq");
var makeChoice = document.getElementById("makec");






var codeQuestions = [{
    question: "Commonly used date types DO not include:",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    correctAnswer: "c"},

    {
    question: "The condition in an if / else statement is enclosed with ____.",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parenthesis",
    choice4: "square brackets",
    correctAnswer: "b"}, 

    {
    question: "Arrays in JavaScript can be used to store____.",
    choiceA: "JavaScript",
    choiceB: "terminal/bash",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "a"},   

    {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choice1: "commas",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "parenthesis",
    correctAnswer: "c"}, 
         
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "terminal/bash",
    choice3: "for loops",
    choice4: "console.log",
    correctAnswer: "d"},   
]


function startQuiz() {
    startQuizButton.style.display = "none";
    makeChoice.style.display = "none";
    console.log("does it work")
    nextQuestion.textContent = codeQuestions[0].question;
    console.log("next question");
}


document.getElementById("quizStart").addEventListener("click", function(){
    var timeleft = 60;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countDown").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});



startQuizButton.addEventListener("click",startQuiz);