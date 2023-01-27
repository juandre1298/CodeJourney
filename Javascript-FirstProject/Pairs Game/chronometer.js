let hours = `00`,
  minutes = `00`,
  seconds = `00`,
  chronometerDisplay = document.getElementById("timerDisplay");
let chrono;
function playChronometer(status) {
  chrono = setInterval(chronometer, 1000);
  if (status == false) {
    clearInterval(chrono);
  }
}
function pauseChronometer() {
  clearInterval(chrono);
}
function chronometer() {
  seconds++;

  if (seconds < 10) seconds = `0` + seconds;

  if (seconds > 59) {
    seconds = `00`;
    minutes++;

    if (minutes < 10) minutes = `0` + minutes;
  }

  if (minutes > 59) {
    minutes = `00`;
    hours++;

    if (hours < 10) hours = `0` + hours;
  }
  chronometerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}
