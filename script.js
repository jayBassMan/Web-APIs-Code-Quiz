//Code Quiz


const questionContainer = document.querySelector("#question-container");
const startBtn = document.querySelector("#startQuizBtn");
const questionBox = document.querySelector("#questionBox");
const answerBtn = document.querySelector("#answerBtn");
// const nextBtn = document.querySelector("#nextBtn");
// const submitBtn = document.querySelector("#submitBtn");
const viewUserScores = document.querySelector("#view-high-scores")
const counter = document.querySelector("#counter");
const choiceA = document.querySelector("#choiceA");
const choiceB = document.querySelector("#choiceB");
const choiceC = document.querySelector("#choiceC");
const choiceD = document.querySelector("#choiceD");
const introPage = document.querySelector("#intro-page");
const timerDisplay = document.querySelector("#timer");
const submitScore = document.querySelector("#submitScore");
const enterInitialsTextArea = document.querySelector("enterInitialsTextArea");
const answerCorrectWrong = document.querySelector("answerCorrectWrong");

// var secondsLeft = 1 * questions.length;
var timer = 60; // this is a Global variable called timer and its assigment is a counter

// const score = document.getElementById('score');
// const user = document.getElementById('user');
// answerCorrectWrong = document.querySelector("click", ".answer");
//Score variable

//Store user info
const user = 0;
const score = 50; //var highScore = 50; ; //Score add fix for ticking timer
let quiz = 0;
let index = 0; //Question number // Track the question answered.
let theRightAnswer = true; //var quizStatus = true; // know the status of the quiz. Quiz is not running = false, running = true
let currentQuestion = {};

choiceA.style.display ='none'
choiceB.style.display ='none'
choiceC.style.display ='none'
choiceD.style.display ='none'
submitScore.style.display = "none";
answerCorrectWrong.style.display = "none";
enterInitialsTextArea.style.display = "none";
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

var questionObject = {
    
}


//Initialize the display timer at default value
timerDisplay.textContent = timer;

viewUserScores.addEventListener('click', function() { //view users scores

  var users = "";
  var test = "";
  var highScores = "";

  for (let i = 0; i < localStorage.length; i++) {
    const getUserScore = [];

    users = localStorage.getItem(localStorage.key(i));
    test = users.substring(0,4)
    if(test == 'quiz') {
      getUserScore = user.split(",");
      var userName = checkUserValue[0]
      highScores += "User" + userName.substring(4) + "high score is: " + getUserScore[1] + "\n"
    }
    window.alert(highScores);
    
  }
})

//Click the start button and the quiz starts
startBtn.addEventListener('click', function(){

  startBtn.style.display = 'none';
  questionBox.style.display = 'none'
  finalScoreDisplayEl.style.display = 'none'

  introPage.classList.add("hide");
  questionContainer.classList.remove("hide");
    showQuestions();

    var timeInterval = setInterval(function(){

      if (score === 1) {
        highScore -= 10
      }
      score = 0;
  
    })
    
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
})



function showQuestions() {
  
  questionBox.textContent = questions.correct[index]

  questionBox.style.display = ""; // Allow the questions to be displayed
  choiceA.style.display = ""; // Allow our buttons to appear
  choiceB.style.display = "";
  choiceC.style.display = "";
  choiceD.style.display = "";

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


