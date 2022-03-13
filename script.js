//Code Quiz
const questionContainer = document.querySelector("#question-container");
const startQuizBtn = document.querySelector("#startQuizBtn");
const questionBox = document.querySelector("#questionBox");
const answerBtn = document.querySelector("#answerBtn");
// const nextBtn = document.querySelector("#nextBtn");
// const submitBtn = document.querySelector("#submitBtn");
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
let theRightAnswer = true;
let currentQuestion = {};
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

//Click the start button and the quiz starts
function startQuiz() {
  introPage.classList.add("hide");
  questionContainer.classList.remove("hide");
    showQuestions();
    
  // A timer starts
  // var timer = setInterval(() => {

  //   secondsLeft--;
    
  //   timerEl.textContent = secondsLeft + " seconds left on quiz.";
  //   let indexQuestion = questions
  //   if (index === indexQuestion.length) {
  //     clearInterval();
    
  //     timerEl.textContent = "Done!";
  //   } else {
  //     timerEl.textContent = indexQuestion[index];
  //     index++;
  //   }
  // }, 1000);
}

function showQuestions() {
  questionBox.textContent = questions[index].question;
  choiceA.textContent = questions[index].answerA;
  choiceB.textContent = questions[index].answerB;
  choiceC.textContent = questions[index].answerC;
  choiceD.textContent = questions[index].answerD;
}

tieTogether = () => {
  index++;
  showQuestions(index);
  index;
}
// const choiceBtn = answerBtn.querySelector('.choiceBtn');
// for (let i = 0; i < choiceBtn.length; i++) {
//   choiceBtn[i].setAttribute('theCorrectAnswer(this)');
  
// }

// function theCorrectAnswer.apply() {
//   // let userAns = correctAns;
//   // let answer = questions[index].correctAns
//   if(answer == questions[index].correctAns) {
//     console.log('Answer is correct!')
//   }
// }

startQuizBtn.addEventListener("click", startQuiz);
