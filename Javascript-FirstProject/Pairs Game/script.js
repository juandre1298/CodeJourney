backImg = "./images/cardBackRed.png";
cards = {
  A: "./images/Pikachu.jpg",
  B: "./images/charmander.png",
  C: "./images/squirtle.png",
  D: "./images/Bulbasaur.webp",
  E: "./images/carterpie.png",
};
c = 0;
moves = [];
score = 0;
for (element in cards) {
  createACard(cards[element], backImg, element, element + "1");
}
for (element in cards) {
  createACard(cards[element], backImg, element, element + "2");
}

function createACard(backImg, frontImg, id, name) {
  //get main Element
  const tableEl = document.getElementById("cardSpaceId");
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
function selectCart() {
  actualGame(this.name);
  this.classList.toggle("is-flipped");
}

function actualGame(cardName) {
  if (c == 0) {
    console.log("chronometer should start");
    playChronometer();
  }
  console.log(c);
  console.log(cardName);
  moves.push(cardName);
  if (c % 2 != 0 && c != 0) {
    if (cardName[0] === moves[c - 1][0] && cardName != moves[c - 1]) {
      console.log("its a match!!!");
      score++;
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
