const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "What is you budget",
    choice1: "up to 300$",
    choice2: "up to 500$",
    choice3: "up to 1000$",
    choice4: "unlimited",
  },
  {
    question: "How do you plan to use your PC?",
    choice1: "Just the basics",
    choice2: "School",
    choice3: "Work",
    choice4: "Gaming",
  },
  {
    question: "Select your desired screen size.",
    choice1: "Under 12in screen",
    choice2: "12-14in screen",
    choice3: "15-17in screen",
    choice4: "17in or larger screen",
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
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  /*Update the progress bar */
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  /* to shuffle the questions each time*/
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply = "selected";

    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 300);
  });
});

startQuiz();
