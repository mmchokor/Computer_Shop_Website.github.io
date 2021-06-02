const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull");

var caseNumber = "0";

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "What is you maximum budget",
    choice1: "300$",
    choice2: "500$",
    choice3: "1000$",
    choice4: "Unlimited",
  },
  {
    question: "Select your desired screen size.",
    choice1: "Under 12 inches",
    choice2: "Between 12 and 14 inches",
    choice3: "Between 15 and 16 inches",
    choice4: "Greater than 16 inches",
  },

  {
    question: "How do you plan to use your PC?",
    choice1: "Just the basics",
    choice2: "School",
    choice3: "Work",
    choice4: "Gaming",
  },
];

//CONSTANTS
const MAX_QUESTIONS = 3;

startQuiz = () => {
  questionCounter = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    switch (caseNumber) {
      //300
      //300 11 All uses
      case "0300$Under 12 inchesJust the basics":
        window.location.href = "./Shop products/prod1.html";
        break;
      case "0300$Under 12 inchesSchool":
        window.location.href = "./Shop products/prod1.html";
        break;
      case "0300$Under 12 inches1Work":
        window.location.href = "./Shop products/prod1.html";
        break;
      case "0300$Under 12 inchesGaming":
        window.location.href = "./Shop products/prod1.html";
        break;

      //300 13 All uses
      case "0300$Between 12 and 14 inchesJust the basics":
        window.location.href = "./Shop products/prod2.html";
        break;
      case "0300$Between 12 and 14 inchesSchool":
        window.location.href = "./Shop products/prod2.html";
        break;
      case "0300$Between 12 and 14 inchesWork":
        window.location.href = "./Shop products/prod2.html";
        break;
      case "0300$Between 12 and 14 inchesGaming":
        window.location.href = "./Shop products/prod2.html";
        break;
      //300 15 All uses
      case "0300$Between 15 and 16 inchesJust the basics":
        window.location.href = "./Shop products/prod3.html";
        break;
      case "0300$Between 15 and 16 inchesSchool":
        window.location.href = "./Shop products/prod3.html";
        break;
      case "0300$Between 15 and 16 inchesWork":
        window.location.href = "./Shop products/prod3.html";
        break;
      case "0300$Between 15 and 16 inchesGaming":
        window.location.href = "./Shop products/prod3.html";
        break;
      //300 17 All uses
      case "0300$Greater than 16 inchesJust the basics":
        window.location.href = "./Shop products/prod4.html";
        break;
      case "0300$Greater than 16 inchesSchool":
        window.location.href = "./Shop products/prod4.html";
        break;
      case "0300$Greater than 16 inchesWork":
        window.location.href = "./Shop products/prod4.html";
        break;
      case "0300$Greater than 16 inchesGaming":
        window.location.href = "./Shop products/prod4.html";
        break;

      //500
      //500 11 All uses
      case "0500$Under 12 inchesJust the basics":
        window.location.href = "./Shop products/prod5.html";
        break;
      case "0500$Under 12 inchesSchool":
        window.location.href = "./Shop products/prod5.html";
        break;
      case "0500$Under 12 inchesWork":
        window.location.href = "./Shop products/prod5.html";
        break;
      case "0500$Under 12 inchesGaming":
        window.location.href = "./Shop products/prod5.html";
        break;
      //500 13 All uses
      case "0500$Between 12 and 14 inchesJust the basics":
        window.location.href = "./Shop products/prod6.html";
        break;
      case "0500$Between 12 and 14 inchesSchool":
        window.location.href = "./Shop products/prod6.html";
        break;
      case "0500$Between 12 and 14 inchesWork":
        window.location.href = "./Shop products/prod6.html";
        break;
      case "0500$Between 12 and 14 inchesGaming":
        window.location.href = "./Shop products/prod6.html";
        break;
      //500 15 All uses
      case "0500$Between 15 and 16 inchesJust the basics":
        window.location.href = "./Shop products/prod7.html";
        break;
      case "0500$Between 15 and 16 inchesSchool":
        window.location.href = "./Shop products/prod7.html";
        break;
      case "0500$Between 15 and 16 inchesWork":
        window.location.href = "./Shop products/prod7.html";
        break;
      case "0500$Between 15 and 16 inchesGaming":
        window.location.href = "./Shop products/prod7.html";
        break;
      //500 17 All uses
      case "0500$Greater than 16 inchesJust the basics":
        window.location.href = "./Shop products/prod8.html";
        break;
      case "0500$Greater than 16 inchesSchool":
        window.location.href = "./Shop products/prod8.html";
        break;
      case "0500$Greater than 16 inchesWork":
        window.location.href = "./Shop products/prod8.html";
        break;
      case "0500$Greater than 16 inchesGaming":
        window.location.href = "./Shop products/prod8.html";
        break;

      //1000
      //1000 11 All uses
      case "01000$Under 12 inchesJust the basics":
        window.location.href = "./Shop products/prod9.html";
        break;
      case "01000$Under 12 inchesSchool":
        window.location.href = "./Shop products/prod9.html";
        break;
      case "01000$Under 12 inchesWork":
        window.location.href = "./Shop products/prod9.html";
        break;
      case "01000$Under 12 inchesGaming":
        window.location.href = "./Shop products/prod9.html";
        break;
      //1000 13 All uses
      case "01000$Between 12 and 14 inchesJust the basics":
        window.location.href = "./Shop products/prod10.html";
        break;
      case "01000$Between 12 and 14 inchesSchool":
        window.location.href = "./Shop products/prod10.html";
        break;
      case "01000$Between 12 and 14 inchesWork":
        window.location.href = "./Shop products/prod10.html";
        break;
      case "01000$Between 12 and 14 inchesGaming":
        window.location.href = "./Shop products/prod10.html";
        break;
      //1000 15 All uses
      case "01000$etween 15 and 16 inchesJust the basics":
        window.location.href = "./Shop products/prod11.html";
        break;
      case "01000$Between 15 and 16 inchesSchool":
        window.location.href = "./Shop products/prod11.html";
        break;
      case "01000$Between 15 and 16 inchesWork":
        window.location.href = "./Shop products/prod11.html";
        break;
      case "01000$Between 15 and 16 inchesGaming":
        window.location.href = "./Shop products/prod11.html";
        break;
      //1000 17 All uses
      case "01000$Greater than 16 inchesJust the basics":
        window.location.href = "./Shop products/prod12.html";
        break;
      case "01000$Greater than 16 inchesSchool":
        window.location.href = "./Shop products/prod12.html";
        break;
      case "01000$Greater than 16 inchesWork":
        window.location.href = "./Shop products/prod12.html";
        break;
      case "01000$Greater than 16 inchesGaming":
        window.location.href = "./Shop products/prod12.html";
        break;

      //Unlimited
      //Unlimited 11 All uses
      case "0UnlimitedUnder 12 inchesJust the basics":
        window.location.href = "./Shop products/prod13.html";
        break;
      case "0UnlimitedUnder 12 inchesSchool":
        window.location.href = "./Shop products/prod13.html";
        break;
      case "0UnlimitedUnder 12 inchesWork":
        window.location.href = "./Shop products/prod13.html";
        break;
      case "0UnlimitedUnder 12 inchesGaming":
        window.location.href = "./Shop products/prod13.html";
        break;
      //Unlimited 13 All uses
      case "0UnlimitedBetween 12 and 14 inchesJust the basics":
        window.location.href = "./Shop products/prod14.html";
        break;
      case "0UnlimitedBetween 12 and 14 inchesSchool":
        window.location.href = "./Shop products/prod14.html";
        break;
      case "0UnlimitedBetween 12 and 14 inchesWork":
        window.location.href = "./Shop products/prod14.html";
        break;
      case "0UnlimitedBetween 12 and 14 inchesGaming":
        window.location.href = "./Shop products/prod14.html";
        break;
      //Unlimited 15 All uses
      case "0UnlimitedBetween 15 and 16 inchesJust the basics":
        window.location.href = "./Shop products/prod15.html";
        break;
      case "0UnlimitedBetween 15 and 16 inchesSchool":
        window.location.href = "./Shop products/prod15.html";
        break;
      case "0UnlimitedBetween 15 and 16 inchesWork":
        window.location.href = "./Shop products/prod15.html";
        break;
      case "0UnlimitedBetween 15 and 16 inchesGaming":
        window.location.href = "./Shop products/prod15.html";
        break;
      //Unlimited 17 All uses
      case "0UnlimitedGreater than 16 inchesJust the basics":
        window.location.href = "./Shop products/prod16.html";
        break;
      case "0UnlimitedGreater than 16 inchesSchool":
        window.location.href = "./Shop products/prod16.html";
        break;
      case "0UnlimitedGreater than 16 inchesWork":
        window.location.href = "./Shop products/prod16.html";
        break;
      case "0UnlimitedGreater than 16 inchesGaming":
        window.location.href = "./Shop products/prod16.html";
        break;

      default:
        window.location.href = "shop.html";
        break;
    }
    //go to the shop page
   // return window.location.assign("shop.html");
  }
  questionCounter++;
  /*Update the progress text */
  progressText.innerText = "Question "+questionCounter+"/"+MAX_QUESTIONS;

  /*Update the progress bar inside bar width according to what 
  question we are in and the total number of questions */
  progressBarFull.style.width = ((questionCounter / MAX_QUESTIONS) * 100)+'%';

  /*choosing a question from the question list above*/
  let questionIndex = 0;
  currentQuestion = availableQuesions[questionIndex];

  //updating the text of the questions
  question.innerText = currentQuestion.question;

  //updating the text of the choices
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  //removeing the the question after it is displayed
  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    //on click check if it is allowed to get an answer from the user
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    
    //apply a css class on the selected choice box
    const classToApply = "selected";

    /*update the case number every time a choice is selected
    to know what laptop it should recommend*/
    caseNumber += choice.innerText;

    //apply the above class
    selectedChoice.parentElement.classList.add(classToApply);
    
    /*do a time delay of 300ms before we remove the set of
    questions and add a new set*/
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      //call the method above to add a new question
      getNewQuestion();
    }, 300);
  });
});

startQuiz();
