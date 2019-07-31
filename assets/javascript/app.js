$(document).ready();

let counter = 10;
let timer;
let currentQuestion = 0;

function timeUp() {
  clearInterval(timer);
}

function countdownTimer() {
  counter--;
  $("#timer").html("<h2>" + counter + "</h2>");

  if (counter === 0) {
    timeUp();
  }

}
//---------------------------------------------------------------

function nextQuestion() {

  const isQuestionOver = (questionsAnswers.length - 1) === currentQuestion;
  if (isQuestionOver) {
    console.log("Game is Over");
  }
  else {
    currentQuestion++;
    domQuestion();
  }

};

function domQuestion() {

  counter = 10;
  timer = setInterval(countdownTimer, 1000);

  const questions = questionsAnswers[currentQuestion].question;
  const answers = questionsAnswers[currentQuestion].options;

  currentQuestion = $("#triviaGame").html("<h4>" + questions + "</h4>" + getChoice(answers));

}


nextQuestion();

function getChoice(answers) {
  let result = '';

  for (let j = 0; j < answers.length; j++) {
    result += `<input type="radio" data-answer="${answers[j]}">${answers[j]}`;
  }

  return result;
}

$(document).on("click", '.option', function () {

  console.log("Hey");
});

let correct = 0;
let incorrect = 0;
let answered = 0;
let unanswered = 0;

$("#correct").append(correct);
$("#incorrect").append(incorrect);
$("#answered").append(answered);
$("#unanswered").append(unanswered);

