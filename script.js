// cCde Quiz
//Dom Variables
const startQuizBtn = document.getElementById('startQuizBtn');
const questionBox = document.getElementById('questionBox');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const counter = document.getElementById('counter');
const choiceA = document.getElementById('choiceA');
const choiceB = document.getElementById('choiceB');
const choiceC = document.getElementById('choiceC');
// const score = document.getElementById('score');
// const user = document.getElementById('user');
const answer = document.querySelector('click','.answer');
//Score variable

//Store user info
const user = 0;
const score = 0;
let quiz = 0;
//creat question Object//not sure if i need to create answer object integrated with question or should i create anwser object on its own
var questions =[
    {
    question: "Who is the bootcamp instructor?",
    answerA: "Gary",
    answerB: "Eugene",
    answerC: "Nick",
    correctAns: "answerA"
    },{
    question: "What college is the bootcamp hosted from?",
    answerA: "University of Texas",
    answerB: "University of Texas at Denton",
    answerC: "Southern Methodist University",
    correctAns: "answerC"
    },{
    question: "What is a function?",
    answerA: "A Template literal",
    answerB: "A set of statements that performs a task or calculates a value",
    answerC: "A classification of data that tells the compiler or interpreter how the programmer wants to use the data.",
    correctAns: "answerB"
    }, {
    question: "Jonathan is the best programer in the entire world.",
    answerA: "True",
    answerB: "False",
    answerC: "None of the above statements",
    correctAns: "answerA"
    }, {
    question: "What is the syntax to declare a function named 'flashLight'?",
    answerA: "myFunction flashLight",
    answerB: "Function flashLight",
    answerC: "function flashLight()",
    correctAns: "answerC"
    }
]
var secondsLeft = 15;

function answers(){
}
//Get user information for user profile
function getUserInfo(){
    prompt("What is your name?")
    user = prompt
}

function getScore() {
  // THEN I can save my initials and my score
  user.score;
}

function gameOver() {
  prompt("Out of time! " + Y + N);
  var choice = toLowerCase.Y || toLowerCase.N;
  if (choice === Y) {
    startGameBtn();
  } else {
    prompt("Have a nice day!");
  }

  // WHEN the game is over
  //Creat a score card function for user
  getScore();
}
//create a Game over function
//WHEN I click the start button
startQuiz() 

//Create a function for Start button(btn)
function startQuiz(){
  const quizQuestions = questions(quiz)
  questionBox.innerText = quizQuestions.question
  choiceA.innerText = quizQuestions.answerA
  choiceB.innerText = quizQuestions.answerB
  choiceC.innerText = quizQuestions.answerC
}
submitBtn.addEventListener('click', () => {
  let quizAnswer

  answer.forEach(answer => {
    if(answer.click) {
      quizAnswer = answer.id
    }
  });
  return answer
})

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer);
})

// THEN a timer starts 
//Create a timer function 
    // THEN time is subtracted from the clock
  // Sets interval in variable
var timerInterval = startTimer(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
    clearInterval(timerInterval);
      // Calls function for game over
    gameOver();
    }

}, 1000);


// I am presented with a question
//Create a questions function

// WHEN I answer a question
//Create a function for anwsers
function answers(){
    answersBtn.document.getElementById("answersBtn1")
//THEN I am presented with another question
// WHEN I answer a question incorrectly
}

//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

}


