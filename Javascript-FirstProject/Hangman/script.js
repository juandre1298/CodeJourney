/* const step1 = document.getElementById("step1");
function liveLess() {
  step1.style = "width: 200px";
} */
words = ["JavaScript", "HTML", "CSS", "web_development"];
letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "_",
];
const restartButton = document.getElementById("restartButton");
restartButton.onclick = restart;
const NWButton = document.getElementById("NWButton");
NWButton.onclick = nextWord;
// create buttons

for (element of letters) {
  let buttons = document.createElement("button");
  // declare the button
  buttons.innerText = element;
  buttons.onclick = newLetter;
  buttons.id = element;

  // get element to place the but tons
  let letterButtons = document.getElementById("buttonsSection");
  letterButtons.appendChild(buttons);
}

// control

hint = "__________";
addWord(hint);
lives = 10;
let currentWord = 0;

function nextWord() {
  currentWord++;
  lives = 10;
  displayLives(lives);
  hint = Array(words[currentWord].length + 1).join("_");
  addWord(hint);
}

function restart() {
  currentWord = -1;
  nextWord();
}

function newLetter(event) {
  const pressedButton = event.target;
  const idPressed = pressedButton.id;

  [hint, score] = guessWord(words[currentWord], idPressed, hint);
  if (score === false) {
    lives = lives - 1;
  }
  displayLives(lives);
  addWord(hint);

  /*   if (words[currentWord] === hint) {
        console.log("Congrats! you won!!!");
  } */
}

function addWord(word) {
  document.getElementById("word").innerHTML = "";
  let wordEl = document.createElement("p");
  // declare the button
  wordEl.innerText = word.split("").join(" ");
  // get element to place the buttons
  let wordPlace = document.getElementById("word");
  //format

  wordPlace.appendChild(wordEl);
}

function guessWord(word, letter, hint) {
  if (!word.toUpperCase().includes(letter)) {
    return [hint, false];
  } else {
    c = 0;
    for (i of word) {
      if (i.toUpperCase() == letter.toUpperCase()) {
        hint = hint.substring(0, c) + i + hint.substring(c + 1);
      }
      c++;
    }
    return [hint, true];
  }
}

function displayLives(n) {
  let livesEl = document.getElementById("nLives");
  livesEl.innerText = n;
  drawing(n);
}
function drawing(step) {
  let landEl = document.getElementById("land");
  let columnEl = document.getElementById("column");
  let beamEl = document.getElementById("beam");
  let ropeEl = document.getElementById("rope");
  let headEl = document.getElementById("head");
  let coreEl = document.getElementById("core");
  let rArmEl = document.getElementById("rArm");
  let lArmEl = document.getElementById("lArm");
  let rLegEl = document.getElementById("rLeg");
  let lLegEl = document.getElementById("lLeg");
  let eye1El = document.getElementById("eye1");
  let eye2El = document.getElementById("eye2");

  switch (step) {
    case 10:
      columnEl.setAttribute("style", "width:5px;height:5px;opacity:0");
      beamEl.setAttribute("style", "width:5px;height:5px;opacity:0");
      ropeEl.setAttribute("style", "width:5px;height:5px;opacity:0");
      headEl.setAttribute("style", "width:5px;height:5px;opacity:0");
      coreEl.setAttribute("style", "width:5px;height:5px;opacity:0");
      rArmEl.setAttribute("style", "width:5px;height:5px;opacity:0");
      lArmEl.setAttribute("style", "width:5px;height:5px;opacity:0");
      rLegEl.setAttribute("style", "width:5px;height:5px;opacity:0");
      lLegEl.setAttribute("style", "width:5px;height:5px;opacity:0");
      headEl.setAttribute("style", "width:5px;height:5px;opacity:0");
      break;
    case 9:
      columnEl.setAttribute("style", "height:280px;opacity:1");
      break;
    case 8:
      beamEl.setAttribute("style", "width: 100px;opacity:1");
      break;
    case 7:
      ropeEl.setAttribute("style", "height: 50px;opacity:1");
      break;
    case 6:
      headEl.setAttribute(
        "style",
        "animation: growHead 1s linear forwards;opacity:1"
      );
      break;
    case 5:
      coreEl.setAttribute("style", "height: 80px;;opacity:1");
      break;
    case 4:
      rArmEl.setAttribute(
        "style",
        "animation: grow 1s linear forwards;opacity:1"
      );
      break;
    case 3:
      lArmEl.setAttribute(
        "style",
        "animation: grow 1s linear forwards;opacity:1"
      );
      break;
    case 2:
      rLegEl.setAttribute("style", "width: 60px;opacity:1");
      break;
    case 1:
      lLegEl.setAttribute("style", "width: 60px;opacity:1");
      break;
    case 0:
      eye1El.setAttribute("style", "opacity:1");
      eye2El.setAttribute("style", "opacity:1");
      alert("stick-man's dead T-T");
      break;
  }
}
function wait(ms) {
  var d = new Date();
  var d2 = null;
  do {
    d2 = new Date();
  } while (d2 - d < ms);
}
