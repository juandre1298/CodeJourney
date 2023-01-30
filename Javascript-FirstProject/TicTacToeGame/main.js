//get Elements
let tableEl = document.getElementById("tableId");
let input = document.getElementById("iputId");
let startButton = document.getElementById("startButton");
startButton.onclick = start;
//
let col = Array.from(Array(4).keys());
let c = 0;
// start game
function start() {
  tableEl.innerHTML = "";
  size = input.value;

  if (size == "") {
    size = 3;
  }
  if (size > 5 || size < 2) {
    alert("size should be between 2 and 5 ");
  } else {
    col = Array.from(Array(+size).keys());
    createTable(col);
  }
}

// create table

function createTable(col) {
  for (i of col) {
    for (j in col) {
      // create element
      let buttonEl = document.createElement("button");
      /*       let text=document.createElement("p"); */
      // Propertis
      buttonEl.id = i + j;
      buttonEl.className = "randomButton";
      buttonEl.name = "randomButton";
      buttonEl.onclick = moveSelected;

      // insert
      tableEl.appendChild(buttonEl);
    }
  }
  //gave class
  tableEl.style = `grid-template-columns: repeat(${col.length}, 1fr);`;
  let end = col.length - 1;
  for (i in col) {
    document.getElementById(i + "0").style = `border-left: none;`;
    document.getElementById("0" + i).style = `border-top: none`;
    document.getElementById(end + i).style = `border-bottom: none`;
    document.getElementById(i + end).style = `border-right: none`;
  }
  document.getElementById("00").style = `border-top: none;border-left: none;`;
  document.getElementById(
    end * 11
  ).style = `border-bottom: none;border-right: none;`;
  document.getElementById(
    "0" + end
  ).style = `border-top: none;border-right: none;`;
  document.getElementById(
    end + "0"
  ).style = `border-bottom: none;border-left: none;`;
}
// create table

function moveSelected() {
  if (this.innerText == "") {
    let press = this.id;
    c++;
    if (c % 2) {
      this.innerText = "X";
    } else {
      this.innerText = "O";
    }
    evaluateWinner(this);
  } else {
    alert("this position is already selected, try another one :(");
  }
}
// evaluate winner
function evaluateWinner(currentVal) {
  i = currentVal.id[0];
  j = currentVal.id[1];

  idealCase = Array(col.length).fill(currentVal.innerText).join("");

  let Arr = [[], [], [], []];
  let pos = [[], [], [], []];
  for (z in col) {
    //evaluate for each i all j

    let but = document.getElementById(i + z);
    pos[0].push(i + z);
    Arr[0].push(but.innerText);
    //evaluate for each j all i
    but = document.getElementById(col[z] + j);
    pos[1].push(col[z] + j);
    Arr[1].push(but.innerText);
    // evaluate the diagonals
    but = document.getElementById(col[z] + z);
    pos[2].push(col[z] + z);
    Arr[2].push(but.innerText);
    but = document.getElementById(col[col.length - z - 1] + z);
    pos[3].push(col[col.length - z - 1] + z);
    Arr[3].push(but.innerText);
  }
  solution = Arr.map((el) => el.join("") == idealCase);
  let indexWinner = solution.indexOf(true);
  if (solution.includes(true)) {
    console.log(currentVal.innerText + " Won!!!");
    youWon(indexWinner, pos[indexWinner][0]);
  }
}
let line = document.createElement("div");
function youWon(type, posi) {
  line.innerHTML = "";
  line.className = "line";
  tableEl.appendChild(line);
  root = document.documentElement;
  fromTop = "top: " + (+posi[0] * 100 + 50) + "px; ";
  fromLeft = "left: " + (+posi[1] * 100 + 50) + "px; ";
  growth = "animation: grow 1s linear forwards;opacity:1";
  switch (type) {
    case 0:
      fromTop = "top: " + (+posi[0] * 100 + 50) + "px; ";
      fromLeft = "left: " + +posi[1] * 100 + "px; ";

      root.style.setProperty("--growth", size * 100 + "px");
      line.style = `  transform: rotate(0deg); ` + fromTop + fromLeft + growth;
      break;
    case 1:
      fromTop = "top: " + +posi[0] * 100 + "px; ";
      fromLeft = "left: " + (+posi[1] * 100 + 50) + "px; ";

      root.style.setProperty("--growth", size * 100 + "px");
      line.style = `  transform: rotate(90deg); ` + fromTop + fromLeft + growth;
      break;
    case 2:
      fromTop = "top: " + +posi[0] * 100 + "px; ";
      fromLeft = "left: " + +posi[1] * 100 + "px; ";

      root.style.setProperty("--growth", size * 100 * Math.sqrt(2) + "px");
      line.style = `  transform: rotate(45deg); ` + fromTop + fromLeft + growth;
      break;
    case 3:
      fromTop = "top: " + (+posi[0] * 100 + 100) + "px; ";
      fromLeft = "left: " + +posi[1] * 100 + "px; ";

      root.style.setProperty("--growth", size * 100 * Math.sqrt(2) + "px");
      line.style =
        `  transform: rotate(-45deg); ` + fromTop + fromLeft + growth;
      break;
  }
}
youWon(2, 4);
