$(document).ready(function () {
   // $("#timeRemaining").text("0");
})

let counter = 0;
let timeleft = 65;

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

function countdownTimer() {
counter++;
$("#timer").text(timeConverter(timeleft- counter));

} setInterval(countdownTimer, 1000);



