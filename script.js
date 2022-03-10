// cCde Quiz
//Dom Variables
const startQuizBtn = document.getElementById('startQuizBtn');
const questionBox = document.getElementById('questionBox');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');
const answerA = document.getElementById('answerA');
const answerB = document.getElementById('answerB');
const answerC = document.getElementById('answerC');
const score = document.getElementById('score');
const user = document.getElementById('user');

//Score variable

//Store user info

//creat question Object//not sure if i need to create answer object integrated with question or should i create anwser object on its own
var questions =[
    {
    question: "Who is the bootcamp instructor?",
    answers: ["Gary","Eugene","Nick"],
    correctAns: 1
    },{
    question: "What college is the bootcamp hosted from?",
    answers: ["University of Texas","University of Texas at Denton","Southern Methodist University"],
    correctAns: 3
    },{
    question: "What is a function?",
    answers: ["A Template literal","A set of statements that performs a task or calculates a value",
    "A classification of data that tells the compiler or interpreter how the programmer wants to use the data."],
    correctAns: 2
    }, {
    question: "Jonathan is the best programer in the entire world.",
    answers: ["True","False","None of the above statements"],
    correctAns: 1
    }, {
    question: "What is the syntax to declare a function named 'flashLight'?",
    answers: ["myFunction flashLight","Function flashLight","function flashLight()"],
    correctAns: 3
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

function quizQuestions() {
  for (let i = 0; i < questions.length; i++) {
      questionBox.innerHTML=this.i+1+" "+ this.questions[ithis.i].question
      answerA.innerHTML=this.questions[this.questions.length].answers[0];
      answerB.innerHTML=this.questions[this.questions.length].answers[1];
      answerC.innerHTML=this.questions[this.questions.length].answers[2];
        var response = window.prompt(questions[i].prompt);
        if (response == questions[i].correctAns) {
      score++;
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  }
  alert("You got " + score + "/" + questions.length);
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
//Create a function for Start button(btn)
function startGameBtnGenerate(){
    alert('"Code Quiz")
    quizQuestions();

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


