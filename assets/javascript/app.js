$(document).ready(function () {
    $("#timeRemaining").append("<div> 00:00 </div>");
})



let tensecondsAlert = setTimeout(function() {
   $("#timeRemaining").append("<div> 00:10 </div>");
  }, 10000);

  let windowTimeOut = setTimeout(function() {
    $("#timeRemaining").append("<div> 00:15 </div>");
  }, 15000);

  let wins = 0;
  let losses = 0;

  function calculatingWins () {

    if($("questionOne").on("click", function() {} ) === inlineRadio1)
    win++;
  }