// cCde Quiz
//Dom Variables
const startQuizBtn = document.querySelector('startQuizBtn');
const questionBox = document.getElementById('questionBox');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const counter = document.getElementById('counter');
const choiceA = document.querySelector('choiceA');
const choiceB = document.querySelector('choiceB');
const choiceC = document.querySelector('choiceC');
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
var quizStarter = startQuiz();
//create a Game over function
//WHEN I click the start button
startQuiz() 

//Create a function for Start button(btn)
function startQuiz(){
  const quizQuestions = questions
  questionBox.innerhtml =quizQuestions.question
  choiceA.innerHTML = quizQuestions.answerA
  choiceB.innerHTML = quizQuestions.answerB
  choiceC.innerHTML = quizQuestions.answerC

submitBtn.addEventListener('click', () => {
  let quizAnswer

  answer.forEach(answer => {
    if(answer.click)
      quizAnswer = answer.id
    }
  });
  return answer
})

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
      if(answer === quizAnswer[quizQuestions].correctAns){
        score ++
      }
      quizQuestions++

      if(quizQuestions < quizAnswer.length){
          loadQuiz()
      } else {
          quiz.innerHTML = `
            <h2>You answered correctly at ${score}
            /${quizQuestions.length} questions

            <button onclick= "location.loadQuiz()">Reload</button>
          `
              }
    }
})
}

startQuizBtn.addEventListener('click', startQuiz );

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





