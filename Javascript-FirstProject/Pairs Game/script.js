backImg = "./images/cardBackRed.png";
cards = {
  A: "./images/Bulbasaur.webp",
  B: "./images/carterpie.png",
  C: "./images/charmander.png",
  D: "./images/Ekans.png",
  E: "./images/Pidgey.png",
  F: "./images/Pikachu.jpg",
  G: "./images/rattata.png",
  H: "./images/Sandshrew.png",
  I: "./images/Spearow.png",
  J: "./images/squirtle.png",
  K: "./images/Weedle.png",
};
let restartButtonEl = document.getElementById("restardId");
let scoreEl = document.getElementById("scoreId");
let movesEl = document.getElementById("movesId");
let tableEl = document.getElementById("cardSpaceId");
restartButtonEl.onclick = restart;
let c = 0;
let moves = [];
let score = 0;

startGame(cards);

function startGame(cards) {
  let cards1 = randomize(cards);
  let cards2 = randomize(cards);
  for (element in cards1) {
    createACard(cards[element], backImg, element, element + "1");
  }
  for (element in cards2) {
    createACard(cards[element], backImg, element, element + "2");
  }
}
function actualGame(cardName) {
  if (c == 0) {
    console.log("chronometer should start");
    playChronometer();
  }
  console.log(c);
  console.log(cardName);
  moves.push(cardName);
  movesEl.innerText = moves.length;
  if (c % 2 != 0 && c != 0) {
    if (cardName[0] === moves[c - 1][0] && cardName != moves[c - 1]) {
      console.log("its a match!!!");
      score++;
      displayScore(score);
      let card1 = document.getElementById(moves[c]);
      let card2 = document.getElementById(moves[c - 1]);
      setTimeout(function () {
        card1.classList.toggle("is-gone");
        card2.classList.toggle("is-gone");
      }, 1000);
    } else {
      console.log("you miss :(");
      let card1 = document.getElementById(moves[c]);
      let card2 = document.getElementById(moves[c - 1]);
      setTimeout(function () {
        card1.classList.toggle("is-flipped");
        card2.classList.toggle("is-flipped");
      }, 1000);
    }
  }
  if (score == Object.keys(cards).length) {
    pauseChronometer();
    setTimeout(function () {
      alert("You won!!!");
    }, 800);
  }
  c++;
}
function createACard(backImg, frontImg, id, name) {
  //get main Element

  // Create Divs
  let cardEl = document.createElement("button");
  let cardInnerEl = document.createElement("div");
  let cardFlipCardFrontEl = document.createElement("div");
  let cardFlipCardBackEl = document.createElement("div");
  // Gave ID
  cardInnerEl.id = name;
  cardInnerEl.name = name;
  // Gave function
  /* cardEl.onclick = selectCart; */
  cardInnerEl.addEventListener("click", selectCart);
  // Give class
  cardEl.className = "flip-card";
  cardInnerEl.className = "flip-card-inner";
  cardFlipCardFrontEl.className = "flip-card-front";
  cardFlipCardBackEl.className = "flip-card-back";

  // Indantation
  tableEl.appendChild(cardEl);
  cardEl.appendChild(cardInnerEl);
  cardInnerEl.appendChild(cardFlipCardFrontEl);
  cardInnerEl.appendChild(cardFlipCardBackEl);

  // ADD imgBack
  let cardBackEl = document.createElement("img");
  cardBackEl.src = backImg;
  cardFlipCardBackEl.appendChild(cardBackEl);
  // ADD imgFront
  let cartFrontEl = document.createElement("img");
  cartFrontEl.src = frontImg;
  cardFlipCardFrontEl.appendChild(cartFrontEl);
}
function deleteCards() {
  tableEl.innerHTML = "";
}
function selectCart() {
  actualGame(this.name);
  this.classList.toggle("is-flipped");
}
function restart() {
  c = 0;
  score = 0;
  displayScore("score");
  restartChronometer();
  for (id of moves) {
    let card = document.getElementById(id);
    card.classList.remove("is-gone");
    card.classList.remove("is-flipped");
  }
  moves = [];
  deleteCards();
  startGame(cards);
}
function displayScore(score) {
  scoreEl.textContent = score;
}
function randomize(ob) {
  let obr = {};
  let keys = Object.keys(ob);
  keys.sort(function () {
    return Math.round(Math.random()) - 0.5;
  });
  keys.forEach((key) => (obr[key] = ob[key]));
  return obr;
}
