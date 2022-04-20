//Code Quiz
//Store user info
const user = 0;
var highScore = 50; //var highScore = 50; ; //Score add fix for ticking timer
let quiz = 0;
let index = 0; //Question number // Track the question answered.
let theRightAnswer = true; //var quizStatus = true; // know the status of the quiz. Quiz is not running = false, running = true
let currentQuestion = {};

const questionContainer = document.querySelector("#question-container");
const startBtn = document.querySelector("#startQuizBtn");
const questionBoxEl = document.querySelector("#questionBox");
const answerBtn = document.querySelector("#answerBtn");
// const nextBtn = document.querySelector("#nextBtn");
// const submitBtn = document.querySelector("#submitBtn");
var score = 0; //Max Value by decreasing each wrong answer
var finalAnswerCheck = 0 // If last answer was wrong it will be validated outside of the time interval and then display as enabled = 1 
var checkTimes = 1 // Check timer times call for function on last question
var answerNumber = 0; // Track next answers to show
const viewUserScores = document.querySelector("#view-high-scores")
const counter = document.querySelector("#counter");
const choiceA = document.querySelector("#choiceA");
const choiceB = document.querySelector("#choiceB");
const choiceC = document.querySelector("#choiceC");
const choiceD = document.querySelector("#choiceD");
var mainDivEl = document.getElementById('mainDiv'); // Main div container for all elements except for header elements
// const introPage = document.querySelector("#intro-page");
const timerDisplay = document.querySelector("#timer");
const submitScore = document.querySelector("#submitScore");
const enterInitialsEl = document.createElement("enterInitials"); // Enter initials
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); // TextArea
const answerCorrectWrong = document.querySelector("#answerCorrectWrong");
const finalScoreDisplayEl = document.createElement("finalScoreDisplay"); // Display Question

// var secondsLeft = 1 * questions.length;
var timer = 60; // this is a Global variable called timer and its assigment is a counter

// const score = document.getElementById('score');
// const user = document.getElementById('user');
// answerCorrectWrong = document.querySelector("click", ".answer");
//Score variable



choiceA.style.display ='none'
choiceB.style.display ='none'
choiceC.style.display ='none'
choiceD.style.display ='none'
submitScore.style.display = "none";
answerCorrectWrong.style.display = "none";
enterInitialsTextArea.style.display = "none";
//creat question Object//not sure if i need to create answer object integrated with question or should i create anwser object on its own
// var questions = [
//   correct{
//     0 : "Who is the bootcamp instructor?",
//     1 : "Gary",
//     2 : "Eugene",
//     3 : "Nick",
//     4 : "Jean",
//     5 : "answerA",
//   },
//   {
//     question: "What college is the bootcamp hosted from?",
//     answerA: "University of Texas",
//     answerB: "University of Texas at Denton",
//     answerC: "Southern Methodist University",
//     answerD: "lorem ipsumn slindkdkn",
//     correctAns: "answerC",
//   },
//   {
//     question: "how long did it take Jonathan to program Code Quiz assigned?",
//     answerA: "1 Day",
//     answerB: "4 hours",
//     answerC: "A week",
//     answerD: "Three Weeks",
//     correctAns: "answerB",
//   },
//   {
//     question: "Jonathan is the best programer in the entire world.",
//     answerA: "True",
//     answerB: "False",
//     answerC: "None of the above statements",
//     answerD: "if you chose anything but a you're a hater",
//     correctAns: "answerA",
//   },
//   {
//     question: "What is the syntax to declare a function named 'flashLight'?",
//     answerA: "myFunction flashLight",
//     answerB: "Function flashLight",
//     answerC: "function flashLight()",
//     answerD: "this is a function(){}",
//     correctAns: "answerC",
//   },
//   {
//     question: "How do you center text in css?",
//     answerA: "i need my text centered asap",
//     answerB: "Pease center my text",
//     answerC: "center text",
//     answerD: "text-align: center;",
//     correctAns: "answerC",
//   },
// ];

// var questionObject = {
    
// }

var questionsObject = {
  // Object that holds correct answers.
  correct: {
    0: "Commonly used datatypes DO NOT include?",
    1: "The condition statement if/else is enclosed with the following:",
    2: "Arrays can be used to store the following", // Button #4 for
    3: "A very useful tool to debug arrays is:", // Button #3
    4: "Strings must be enclosed with:",
  },
};

var answersObject = {
  // Object that holds correct answers.
  answers: {
    0: {
      0: "Strings",
      1: "Boolean",
      2: "Alerts",
      3: "Numbers",
    },
    1: {
      0: "Parentheses",
      1: "Curly Brackets",
      2: "Quotes",
      3: "Square Brackets",
    },
    2: {
      // Button #3
      0: "Javascript",
      1: "Terminal/bash",
      2: "For loops",
      3: "Console.log",
    },
    3: {
      // Answer to question 5 --> Button #2
      0: "Commas",
      1: "Curly brackets",
      2: "Quotes",
      3: "Parentheses",
    },
    4: {
      // Button #4
      0: "Number of strings",
      1: "Other arrays",
      2: "Booleans",
      3: "All of the above",
    },
  },
};

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
submitScore.addEventListener('click', function() {


  var quizLocalStorage = "quiz";
  var quizUserDetails = "";
  var value = [];

  // If good input the value will be assign properly
  quizUserDetails = quizLocalStorage + enterInitialsTextAreaEl.value
  value = [quizUserDetails,highScore] // Create an array for validation

  //Add test entry @local storage in order to be able to get the local storage.
  // If user clears the data at local storage the below code will not work unless ther is at least on entry.
  if (!localStorage.length) {
    localStorage.setItem("test", "test");
  }

  for (var i = 0; i < localStorage.length; i++){

    var checkUser = "";
    var checkUserValue = [];

    // Assign value again
    quizUserDetails = quizLocalStorage + enterInitialsTextArea.value;

    // Check if assigned value exist in the local storage
    checkUser = quizLocalStorage + enterInitialsTextArea.value;
    // quizInitial + score will be checked against the input from the user to validate if exist already in local storage

    if (checkUser == null) {// New user, no need to split
        localStorage.setItem(quizUserDetails, value); //Value is equal to 
        window.alert("Your score of " + highScore + "has been submitted!")
      break;
    } else if (checkUser != null){
      checkUserValue = checkUser.split(","); //Split since the object exist in local storage


    }

    if ( quizUserDetails == checkUserValue[0] && highScore == checkUserValue[1] ) {


      // Only insert if the current highScore is higher,
      // otherwise let the user know they had a higher score already
      localStorage.setItem(quizUserDetails, value); // Value us equal to 
      window.alert(highScore + " " + "is the lates entry for user initial " + enterInitialsTextArea + ". Entry will not be added.")
      break;
    } else if (enterInitialsTextArea.value == " ") {
      window.alert("Please enter an initial");
      break;
    } else if (quizUserDetails = checkUserValue[0] && highScore > checkUserValue[1]){
     // New high score submitted!
            localStorage.setItem(quizUserDetails, value); // Value is equal to 
            window.alert("New high score of " + highScore + " has been submitted!.\nYour previous score was " + checkUserValue[1])
            break; 
        } else if ( quizUserDetails == checkUserValue[0] && highScore < checkUserValue[1] ) { 
            // Your previous code was higher!
            localStorage.setItem(quizUserDetails, value); // Value is equal to 
            window.alert("Your previous code of " + checkUserValue[1] + " was higher. Entry will not be added.");
            break; 

        } else { // New entry all together
            localStorage.setItem(quizUserDetails, value); // Value is equal to 
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        }
  }

})


choiceA.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

choiceB.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

choiceC.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

choiceD.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

submitScore.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

startBtn.addEventListener("click", function() {

// Debugger;
  startBtn.style.display = 'none';
  questionBox.style.display = 'none'
  finalScoreDisplay.style.display = 'none'

    enterInitials.style.display='none';
    score = 0; // Score is 0 again.
    timer=60;
    timerDisplay.textContent = timer; //Counter to display once more to make look smoother.
    finalAnswerCheck = 0; // Check if last question and wrong.
    checkTimes = 1; // Check timer for funciton patch.


  // introPage.classList.add("hide");
  // questionContainer.classList.remove("hide");
  //   showQuestions();

    var timeInterval = setInterval(function(){

      if (score === 1) {
        highScore -= 10
      }
      score = 0; //move the score back to 0 to chek for another wrong answer.

      if (timer >= 1 && finalAnswerCheck !== 1) {
        //Assign text to content to the question from our object
        questionBox.textContent = questionsObject.correct[index];

        questionBox.style.display = ""; // Allow the questions to be displayed
        choiceA.style.display = ""; // Allow our buttons to appear
        choiceB.style.display = "";
        choiceC.style.display = "";
        choiceD.style.display = "";

        //Display asnwers to the question
        choiceA.textContent = answersObject.answers[answerNumber][0];
        choiceB.textContent = answersObject.answers[answerNumber][1];
        choiceC.textContent = answersObject.answers[answerNumber][2];
        choiceD.textContent = answersObject.answers[answerNumber][3];

        gridContainer.appendChild(questionBoxEl);
        gridContainer.appendChild(choiceA);
        gridContainer.appendChild(finalScoreDisplayEl);
        timer -= 1;
        timerDisplay.textContent = timer;
        console.log("time left:" + timer);

        choiceA.addEventListener("click", function () {

          if (
            questionBox.textContent ===
              "The condition statement if/else is enclosed with the following:" &&
            choiceA.textContent === "Parentheses"
          ) {
            console.log("Correct");
            // timer += 1; // Add a second for a correct answer as it will take one second to move to the next question
            index = 2; // Move to the next question which is the third questions
            answerNumber = 4;
            answerCorrectWrong.style.display = "";
            answerCorrectWrong.textContent = "Correct!";
            answerCorrectWrong.style.borderTop = "solid #808080";
            answerCorrectWrongGrid.appendChild(answerCorrectWrong);
          } else {
            //Assign wrong values based incorrect answers.

            switch (choiceA.textContent) {
              case "Strings":
                console.log("Inside the case now this question 1");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080";

                score = 1; // Give user a 10+ score
                index = 1; // Move to the next question which is the second question
                answerNumber = 1;
                break;
              case "Number of strings":
                console.log("Inside the case now this question 1");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080";

                score = 1; // Give user a 10+ score
                index = 3; // Move to the next question which is the second question
                answerNumber = 2;
                break;
              case "Javascript":
                console.log("Inside the case now this question 1");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080";

                score = 1; // Give user a 10+ score
                index = 4; // Move to the next question which is the second question
                answerNumber = 3;
                break;
              case "Commas":
                console.log("Correct");
                //timer += 1; // Add a second for a correct answer as it will take one second to move to the next question
                //index = 2; // Move to the next question
                //game over
                answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
                answerCorrectWrong.textContent = "Correct!";
                answerCorrectWrong.style.borderTop = "solid #808080";
                answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                //window.alert("Game Over"); Game is over at this point.
                index = 0; // Game is over, no more questions to show.
                answerNumber = 0; // Game is over, no more answers to show.
                console.log("I'm here" + timeInterval);
                choiceA.style.display = "none";
                choiceB.style.display = "none";
                choiceC.style.display = "none";
                choiceD.style.display = "none";
                answerCorrectWrong.style.display = "none"; // When time is over correct or wrong will go away.
                startBtn.style.display = "none"; // Remove Start Quiz button.
                //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                questionBox.textContent = "You have finished the quiz!";
                finalScoreDisplay.style.display = ""; // Allow display for final score
                enterInitials.style.display = ""; // Display Message Enter initials
                enterInitialsTextArea.style.display = ""; // Capture user score once submitted is clicked.
                finalAnswerCheck = 1; // Final Wrong
                lastQuestionWrong();
                finalScoreDisplay.textContent =
                  "Your final score is: " + highScore; // Assign the latest high score.
                enterInitials.textContent = "Enter initials: ";
                submitScore.style.display = "";
                submitScore.textContent = "Submit";
                //Exit the quiz/timer.
                clearInterval(timeInterval);
                break;
            }
          }
        });

        choiceB.addEventListener("click", function () {
          if (
            questionBox.textContent === "Strings must be enclosed with:" &&
            choiceB.textContent === "Curly brackets"
          ) {
            console.log("Correct");
            //timer += 1; // Add a second for a correct answer as it will take one second to move to the next question
            //index = 2; // Move to the next question
            //game over
            answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
            answerCorrectWrong.textContent = "Correct!";
            answerCorrectWrong.style.borderTop = "solid #808080";
            answerCorrectWrongGrid.appendChild(answerCorrectWrong);
            //window.alert("Game Over"); Game is over at this point.
            index = 0; // Game is over, no more questions to show.
            answerNumber = 0; // Game is over, no more answers to show.
            console.log("I'm here" + timeInterval);
            choiceA.style.display = "none";
            choiceB.style.display = "none";
            choiceC.style.display = "none";
            choiceD.style.display = "none";
            answerCorrectWrong.style.display = "none"; // When time is over correct or wrong will go away.
            startBtn.style.display = "none"; // Remove Start Quiz button.
            //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
            questionBox.textContent = "You have finished the quiz!";
            finalScoreDisplay.style.display = ""; // Allow display for final score
            enterInitials.style.display = ""; // Display Message Enter initials
            enterInitialsTextArea.style.display = ""; // Capture user score once submitted is clicked.
            finalScoreDisplay.textContent = "Your final score is: " + highScore; // Assign the latest high score.
            enterInitials.textContent = "Enter initials: ";
            submitScore.style.display = "";
            submitScore.textContent = "Submit";
            //Exit the quiz/timer.
            clearInterval(timeInterval);
          } else {
            switch (choiceB.textContent) {
              case "Boolean":
                console.log("Inside the case now this is question 2");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080";

                score = 1; // Give user a 10+ score
                index = 1; // Move to the next question which is the second question
                answerNumber = 1;
                break;
              case "Curly Brackets":
                console.log("Inside the case now this is question 2");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080";

                score = 1; // Give user a 10+ score
                index = 2; // Move to the next question which is the second question
                answerNumber = 4;
                console.log(score);
                break;
              case "Other arrays":
                console.log("Inside the case now this is question 2");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080";
                score = 1; // Give user a 10+ score
                index = 3; // Move to the next question which is the second question
                answerNumber = 2;
                break;
              case "Terminal/bash":
                console.log("Inside the case now this is question 2");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080";
                score = 1; // Give user a 10+ score
                index = 4; // Move to the next question which is the second question
                answerNumber = 3;
                break;
            }
          }
        });

        choiceC.addEventListener("click", function () {
          if (
            questionBox.textContent ===
              "Commonly used datatypes DO NOT include?" &&
            choiceC.textContent === "Alerts"
          ) {
            console.log("Correct");
            //timer += 1; // Add a second for a correct answer as it will take one second to move to the next question
            index = 1; // Move to the next question which is the second question
            answerNumber = 1;
            answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
            answerCorrectWrong.textContent = "Correct!";
            answerCorrectWrong.style.borderTop = "solid #808080";
            answerCorrectWrongGrid.appendChild(answerCorrectWrong);
          } else if (
            questionBox.textContent ===
              "A very useful tool to debug arrays is:" &&
            choiceC.textContent === "For loops"
          ) {
            console.log("Correct");
            //timer += 1; // Add a second for a correct answer as it will take one second to move to the next question
            index = 4; // Move to the next question which  is the fifth question
            answerNumber = 3;
            answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
            answerCorrectWrong.textContent = "Correct!";
            answerCorrectWrong.style.borderTop = "solid #808080";
            answerCorrectWrongGrid.appendChild(answerCorrectWrong);
          } else if (
            questionBox.textContent ===
              "The condition statement if/else is enclosed with the following:" &&
            choiceC.textContent === "Quotes"
          ) {
            console.log("Inside the case now this is question 3");
            answerCorrectWrong.style.display = "";
            answerCorrectWrong.textContent = "Wrong!";
            answerCorrectWrong.style.borderTop = "solid #808080";
            score = 1; // Give user a 10+ score
            index = 2; // Move to the next question which is the second question
            answerNumber = 4;
          } else {
            switch (choiceC.textContent) {
              case "Booleans":
                console.log("Inside the case now this is question 3");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080#808080";
                score = 1; // Give user a 10+ score
                index = 3; // Move to the next question which is the second question
                answerNumber = 2;
                break;
              case "Quotes":
                console.log("Inside the case now this is question 3");
                score = 1; // Give user a 10+ score
                index = 0; // Game is over, no more questions to show.
                answerNumber = 0; // Game is over, no more answers to show.
                console.log("I'm here" + timeInterval);
                choiceA.style.display = "none";
                choiceB.style.display = "none";
                choiceC.style.display = "none";
                choiceD.style.display = "none";
                answerCorrectWrong.style.display = "none"; // When time is over correct or wrong will go away.
                startBtn.style.display = "none"; // Remove Start Quiz button.
                //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                questionBox.textContent = "You have finished the quiz!";
                finalScoreDisplay.style.display = ""; // Allow display for final score
                enterInitials.style.display = ""; // Display Message Enter initials
                enterInitialsTextArea.style.display = ""; // Capture user score once submitted is clicked.
                finalAnswerCheck = 1; // Final Wrong
                lastQuestionWrong();
                finalScoreDisplay.textContent =
                  "Your final score is: " + highScore; // Assign the latest high score.
                enterInitials.textContent = "Enter initials: ";
                submitScore.style.display = "";
                submitScore.textContent = "Submit";
                //Exit the quiz/timer.
                clearInterval(timeInterval);

                break;
            }
          }
        });

        choiceD.addEventListener("click", function () {
          if (
            questionBox.textContent ===
              "Arrays can be used to store the following" &&
            choiceD.textContent === "All of the above"
          ) {
            console.log("Correct");
            // timer += 1; // Add a second for a correct answer as it will take one second to move to the next question
            //Game is overquestionNumber = 4; // Move to the next question
            index = 3; // Move to the next question which is the fourth question
            answerNumber = 2;
            answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
            answerCorrectWrong.textContent = "Correct!";
            answerCorrectWrong.style.borderTop = "solid #808080";
            answerCorrectWrongGrid.appendChild(answerCorrectWrong);
          } else {
            switch (choiceD.textContent) {
              case "Numbers":
                console.log("Inside the case now this is question4");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080";
                score = 1; // Give user a 10+ score
                index = 1; // Move to the next question which is the second question
                answerNumber = 1;
                break;
              case "Square Brackets":
                console.log("Inside the case now this is question4");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080";
                score = 1; // Give user a 10+ score
                index = 2; // Move to the next question which is the second question
                answerNumber = 4;
                break;
              case "Console.log":
                console.log("Inside the case now this is question4");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080";
                score = 1; // Give user a 10+ score
                index = 4; // Move to the next question which is the second question
                answerNumber = 3;
                break;
              case "Parentheses":
                console.log("Inside the case now this is question4");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #808080";
                score = 1; // Give user a 10+ score
                //index = 4; // Move to the next question which is the second question
                //answerNumber = 3;
                index = 0; // Game is over, no more questions to show.
                answerNumber = 0; // Game is over, no more answers to show.
                console.log("I'm here" + timeInterval);
                choiceA.style.display = "none";
                choiceB.style.display = "none";
                choiceC.style.display = "none";
                choiceD.style.display = "none";
                answerCorrectWrong.style.display = "none"; // When time is over correct or wrong will go away.
                startBtn.style.display = "none"; // Remove Start Quiz button.
                //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                questionBox.textContent = "You have finished the quiz!";
                finalScoreDisplay.style.display = ""; // Allow display for final score
                enterInitials.style.display = ""; // Display Message Enter initials
                enterInitialsTextArea.style.display = ""; // Capture user score once submitted is clicked.
                finalAnswerCheck = 1; // Final Wrong
                lastQuestionWrong();
                finalScoreDisplay.textContent =
                  "Your final score is: " + highScore; // Assign the latest high score.
                enterInitials.textContent = "Enter initials: ";
                submitScore.style.display = "";
                submitScore.textContent = "Submit";
                //Exit the quiz/timer.
                clearInterval(timeInterval);
                break;
            }
          }
        });
      }
       else if(timer === 0){

          console.log("I'm here" + timeInterval);
          index = 0; // Reset all questions
          answerNumber = 0; // Reset all possible answers.
          choiceA.style.display = 'none';
          choiceB.style.display = 'none';
          choiceC.style.display = 'none';
          choiceD.style.display = 'none';
          answerCorrectWrong.style.display='none'; // When time is over correct or wrong will go away.
          //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
          questionBox.textContent = "Game Over!. Try again by clicking on \"Click Start Quiz\"";
          startBtn.style.display = "";
          clearInterval(timeInterval);
          
          gridContainer.appendChild(questionBoxEl);
    
          displayMessage();
        }
      }, 1000)

});

function lastQuestionWrong () {
        if (finalAnswerCheck === 1 && checkTimes === 1) {
        highScore -= 10;
        checkTimes = 2;
        return highScore
    }

  }

      
      
//     })
    
//     // A timer starts
//     // var timer = setInterval(() => {
    
//     //   secondsLeft--;
    
//     //   timerEl.textContent = secondsLeft + " seconds left on quiz.";
//     //   let indexQuestion = questions
//     //   if (index === indexQuestion.length) {
//     //     clearInterval();
    
//     //     timerEl.textContent = "Done!";
//     //   } else {
//     //     timerEl.textContent = indexQuestion[index];
//     //     index++;
//     //   }
//     // }, 1000);
// })



// function showQuestions() {
  
// }

// tieTogether = () => {
//   index++;
//   showQuestions(index);
//   index;
// }
// // const choiceBtn = answerBtn.querySelector('.choiceBtn');
// // for (let i = 0; i < choiceBtn.length; i++) {
// //   choiceBtn[i].setAttribute('theCorrectAnswer(this)');
  
// // }

// // function theCorrectAnswer.apply() {
// //   // let userAns = correctAns;
// //   // let answer = questions[index].correctAns
// //   if(answer == questions[index].correctAns) {
// //     console.log('Answer is correct!')
// //   }
// // }


