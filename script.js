// cCde Quiz
//Dom Variables
const startGameBtn = .document.getElementById('startGameBtn');
const question = .document.getElementById('question');
const quiz = .document.getElementById('quiz');
const counter = .document.getElementById('counter');
const timeGauge = .document.getElementById('timeGauge');
const answerA = .document.getElementById('A');
const answerB = .document.getElementById('B');
const answerC = .document.getElementById('C');

//Store user info
var user;
//creat question Object//not sure if i need to create answer object integrated with question or should i create anwser object on its own
var questions =[
    {
    question1: "Who is the bootcamp instructor",
    answerA: "Gary",
    answerB: "Eugene",
    answerC: "Nick",
    correctAns: "A"
    },{
    question1: "What college is the bootcamp hosted from?",
    answerA: "University of texas",
    answerB: "University of texas at Denton",
    answerC: "Southern Methodist Univeristy",
    corectAns: "C"
    },{
    question1: "What is a function?",
    answerA: "A Template literal",
    answerB: "set of statements that performs a task or calculates a value",
    answerC: "A classification of data that tells the compiler or interpreter how the programmer wants to use the data.",
    corectAns: "B"
    }
]
var secondsLeft = 15;



//Get user information for user profile
function getUserInfo(){
    textBox.document.getElementById("#textBox", user)
    prompt("What is your name?")
    user = prompt
}
//create a Game over function
//WHEN I click the start button
//Create a function for Start button(btn)
function startGameBtn(){
    startGameBtn
    alert('lets play "Code Quiz"')



// THEN a timer starts 
//Create a timer function 
function startTimer(){
    // THEN time is subtracted from the clock
  // Sets interval in variable
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
    clearInterval(timerInterval);
      // Calls function for game over
    gameOver;
    }

}, 1000);
}

// I am presented with a question
//Create a questions function
function quizQuestions(){
    questions
    
    

}
// WHEN I answer a question
//Create a function for anwsers
function answers(){
    answersBtn1.document.getElementById("answersBtn1")
//     THEN I am presented with another question
// WHEN I answer a question incorrectly
}

//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
function gameOver(){

prompt("Out of time! Game Over! Would you like to play again?" + Y + N)
var choice = toLowerCase.Y || toLowerCase.N
if(choice === Y){
    startGameBtn()
} else {
    prompt("Thank you for playing! Have a nice day!")
}


// WHEN the game is over
//Creat a score card function for user
function getScore(){
    // THEN I can save my initials and my score
    let score = user
    user ++;
}

}
}


