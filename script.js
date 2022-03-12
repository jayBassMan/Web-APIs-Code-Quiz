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
    answerD: "lslslslslslslsls",
    correctAns: "answerA",
  },
  {
    question: "What college is the bootcamp hosted from?",
    answerA: "University of Texas",
    answerB: "University of Texas at Denton",
    answerC: "Southern Methodist University",
    answerD: "lslslslslslslsls",
    correctAns: "answerC",
  },
  {
    question: "What is a function?",
    answerA: "A Template literal",
    answerB: "A set of statements that performs a task or calculates a value",
    answerC:
      "A classification of data that tells the compiler or interpreter how the programmer wants to use the data.",
    answerD: "lslslslslslslsls",
    correctAns: "answerB",
  },
  {
    question: "Jonathan is the best programer in the entire world.",
    answerA: "True",
    answerB: "False",
    answerC: "None of the above statements",
    answerD: "lslslslslslslsls",
    correctAns: "answerA",
  },
  {
    question: "What is the syntax to declare a function named 'flashLight'?",
    answerA: "myFunction flashLight",
    answerB: "Function flashLight",
    answerC: "function flashLight()",
    answerD: "lslslslslslslsls",
    correctAns: "answerC",
  },
  {
    question: "What is the syntax to declare a function named 'flashLight'?",
    answerA: "myFunction flashLight",
    answerB: "Function flashLight",
    answerC: "function flashLight()",
    answerD: "lslslslslslslsls",
    correctAns: "answerC",
  },
];
var secondsLeft = 15 * questions.length;
var timerID = "";
// var quizStarter = startQuiz();
//create a Game over function
//WHEN I click the start button

// const quizQuestions = questions;
// questionBox.innerhtml = quizQuestions.question;
// choiceA.innerHTML = quizQuestions.answerA;
// choiceB.innerHTML = quizQuestions.answerB;
// choiceC.innerHTML = quizQuestions.answerC;

// submitBtn.addEventListener("click", () => {
//   let quizAnswer;

//   answer.forEach((answer) => {
//     if (answer.click) {
//       quizAnswer = answer.id;
//     }
//   });
//   return answer;
// });

// submitBtn.addEventListener("click", () => {

// const answer = getSelected();

// if (answer) {
//   if (answer === quizAnswer[quizQuestions].correctAns) {
//     score++;
//   }
//   quizQuestions++;

//   if (quizQuestions < quizAnswer.length) {
//     loadQuiz();
//   } else {
//     quiz.innerHTML = `
//           <h2>You answered correctly at ${score}
//           /${quizQuestions.length} questions

//           <button onclick= "location.loadQuiz()">Reload</button>
//         `;
//   }
// }
// });

function startQuiz() {
  introPage.classList.add("hide");
  questionContainer.classList.remove("hide");

  // timerID = setInterval(() => {
  //   secondsLeft--;
  //   timerEl.textContent = secondsLeft + " seconds left till next question.";
  //     showQuestion();
  //   if (secondsLeft === 0) {
  //     // Stops execution of action quat set interval
  //     clearInterval(timerID);
  //     // Calls function for game over
    
  //     // gameOver();
  //     };

    var timer = setInterval(() => {
      secondsLeft--;
      timerEl.textContent = secondsLeft + " seconds left till next question.";
      showQuestion();
      if (index === questions.length) {
        clearInterval(timer);
        timerEl.textContent = "Done!";
      } else {
        timerEl.textContent = questions[index];
        index++;
      }
    }, 1000);
    };

  


function showQuestion() {
    questionBox.textContent = questions[index].question
    choiceA.textContent = questions[index].answerA
    choiceB.textContent = questions[index].answerB
    choiceC.textContent = questions[index].answerC
    choiceD.textContent = questions[index].answerC
  }


startQuizBtn.addEventListener("click", startQuiz);

// THEN a timer starts

// var timerInterval = startTimer(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//     clearInterval(timerInterval);
//       // Calls function for game over
//     gameOver();
//     }

// }, 1000);


function displayFromArray() {
  var arr = [
    "Thor",
    "Hulk",
    "Captain America",
    "Dr. Strange",
    "SpiderMan",
    "Black Widow",
    "Hawkeye",
    "Captain Marvel",
    "Daredevil",
    "Loki",
  ];

  var currIdx = 0;

  var timer = setInterval(() => {
    if (currIdx === arr.length) {
      clearInterval(timer);
      mainEl.textContent = "Done!";
    } else {
      mainEl.textContent = arr[currIdx];
      currIdx++;
    }
  }, 1000);
}