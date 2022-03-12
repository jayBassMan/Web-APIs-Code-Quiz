// // code Quiz
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// //Dom Variables
const questionContainer = document.querySelector("#question-container");
const startQuizBtn = document.querySelector("#startQuizBtn");
const questionBox = document.querySelector("#questionBox");
const nextBtn = document.querySelector("#nextBtn");
const submitBtn = document.querySelector("#submitBtn");
const counter = document.querySelector("#counter");
const choiceA = document.querySelector("#choiceA");
const choiceB = document.querySelector("#choiceB");
const choiceC = document.querySelector("#choiceC");
const introPage = document.querySelector("#intro-page");
const timerEl = document.querySelector("#timer");
// const score = document.getElementById('score');
// const user = document.getElementById('user');
const answer = document.querySelector("click", ".answer");
//Score variable

//Store user info
const user = 0;
const score = 0;
let quiz = 0;
let index = 0;
//creat question Object//not sure if i need to create answer object integrated with question or should i create anwser object on its own
var questions = [
  {
    question: "Who is the bootcamp instructor?",
    answerA: "Gary",
    answerB: "Eugene",
    answerC: "Nick",
    answerD: "Jean",
    correctAns: "answerA",
  },
  {
    question: "What college is the bootcamp hosted from?",
    answerA: "University of Texas",
    answerB: "University of Texas at Denton",
    answerC: "Southern Methodist University",
    answerD: "lorem ipsumn slindkdkn",
    correctAns: "answerC",
  },
  {
    question: "how long did it take Jonathan to program Code Quiz assigned?",
    answerA: "1 Day",
    answerB: "4 hours",
    answerC: "A week",
    answerD: "Three Weeks",
    correctAns: "answerB",
  },
  {
    question: "Jonathan is the best programer in the entire world.",
    answerA: "True",
    answerB: "False",
    answerC: "None of the above statements",
    answerD: "if you chose anything but a you're a hater",
    correctAns: "answerA",
  },
  {
    question: "What is the syntax to declare a function named 'flashLight'?",
    answerA: "myFunction flashLight",
    answerB: "Function flashLight",
    answerC: "function flashLight()",
    answerD: "this is a function(){}",
    correctAns: "answerC",
  },
  {
    question: "How do you center text in css?",
    answerA: "i need my text centered asap",
    answerB: "Pease center my text",
    answerC: "center text",
    answerD: "text-align: center;",
    correctAns: "answerC",
  },
];
var secondsLeft = 1 * questions.length;
var timerID = "";

//WHEN I click the start button
function startQuiz() {
  introPage.classList.add("hide");
  questionContainer.classList.remove("hide");

  // A timer starts
  var timer = setInterval(() => {
    secondsLeft--;
    showQuestion();
    timerEl.textContent = secondsLeft + " seconds left till next question.";

    if (index === question.timer) {
      clearInterval(timer);
      timerEl.textContent = "Done!";
    } else {
      timerEl.textContent = question[index];
      index++;
    }
  }, 1000);
}

function showQuestion() {
  questionBox.textContent = questions[index].question;
  choiceA.textContent = questions[index].answerA;
  choiceB.textContent = questions[index].answerB;
  choiceC.textContent = questions[index].answerC;
  choiceD.textContent = questions[index].answerD;
}

startQuizBtn.addEventListener("click", startQuiz);
