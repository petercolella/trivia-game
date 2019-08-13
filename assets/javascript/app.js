$(document).ready(function() {
  let counter;
  let timer;
  let currentQuestion;
  let correct;
  let incorrect;
  let answered;
  let unanswered;
  $('#timer').css('opacity', 0);

  $('#startButton').on('click', function() {
    $('#timer').css('opacity', 1);
    currentQuestion = 0;
    correct = 0;
    incorrect = 0;
    answered = 0;
    unanswered = 0;
    nextQuestion();
  });

  $('#questioButton').on('click', function() {
    timeUp();
    nextQuestion();
  });

  function timeUp() {
    clearInterval(timer);
    checkAnswer();
  }

  function countdownTimer() {
    counter--;
    $('#timer').html('<h2>0:0' + counter + '</h2>');

    if (counter === 0) {
      timeUp();
      nextQuestion();
    }
  }
  //---------------------------------------------------------------

  function nextQuestion() {
    $('#startButton').css('opacity', 0);
    const isQuestionOver = questionsAnswers.length === currentQuestion;
    if (isQuestionOver) {
      console.log('Game is Over');
      showResults();
    } else {
      domQuestion();
    }
  }

  function domQuestion() {
    counter = 10;
    $('#timer').html('<h2>0:' + counter + '</h2>');
    timer = setInterval(countdownTimer, 1000);

    const questions = questionsAnswers[currentQuestion].question;
    const answers = questionsAnswers[currentQuestion].options;

    $('#triviaGame').html(`
<div class="col">
    <div class="row">
        <h4>${questions}</h4>
    </div>
    <div class="row">
        <p>${getChoice(answers)}</p>
    </div>
</div>
  `);
    $('#questioButton').css('opacity', 1);
  }

  function getChoice(answers) {
    let result = '';

    for (let j = 0; j < answers.length; j++) {
      result += `<input type="radio" name="${currentQuestion}" value="${
        answers[j]
      }"> ${answers[j]}<br>`;
    }

    return result;
  }

  function checkAnswer() {
    if (
      $('#triviaGame')
        .find(`input[name="${currentQuestion}"]:checked`)
        .val() === questionsAnswers[currentQuestion].correctoption
    ) {
      correct++;
    } else {
      incorrect++;
    }
    if (
      $('#triviaGame')
        .find(`input[name="${currentQuestion}"]:checked`)
        .val()
    ) {
      answered++;
    } else {
      unanswered++;
    }
    currentQuestion++;
  }

  function showResults() {
    $('#startButton')
      .text('Play Again?')
      .css('opacity', 1);

    $('#timer').css('opacity', 0);

    $('#triviaGame').html(`
    <h1>Thanks for playing the game!</h1>
    <p id="correct"><strong>Correct Answers: ${correct}</strong></p>
    <p id="incorrect"><strong>Incorrect Answers: ${incorrect}</strong></p>
    <p id="answered"><strong>Answered Questions: ${answered}</strong></p>
    <p id="unanswered"><strong>Unanswered Questions: ${unanswered}</strong></p>
  `);
    $('#questioButton').css('opacity', 0);
  }
});
