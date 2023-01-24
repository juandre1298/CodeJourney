const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const date = document.getElementById("dateInput");
const dateTitle = document.getElementById("textInput");
let titleTimer = document.getElementById("titleTimer");

newDate();
function newDate() {
  if (date.value != "") {
    if (new Date(date.value) < new Date()) {
      console.log("Please try another date. this already happened");
      window.alert("Please try another date. this already happened");
    } else {
      console.log(date.value);
      newYears = date.value;
      countdown();
    }
  } else {
    console.log("01 Jan 2024");
    newYears = "01 Jan 2024";
  }
  if (dateTitle.value != "") {
    /*     titleTimer.textContent = dateTitle; */
    console.log(dateTitle.value);
    titleTimer.innerText = dateTitle.value;
  } else {
    titleTimer.innerText = "New Years Eve";
  }
}

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  let totalseconds = (newYearsDate - currentDate) / 1000;
  let days = Math.floor(totalseconds / (3600 * 24));

  let hours = Math.floor(totalseconds / 3600) % 24;
  let min = Math.floor(totalseconds / 60) % 60;
  let sec = Math.floor(totalseconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(min);
  secondsEl.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// initial call
countdown();
setInterval(countdown, 1000);
