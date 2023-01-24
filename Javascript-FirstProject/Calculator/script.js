let disp = document.getElementById("display");
let b1 = document.getElementById("b1-button");
let b2 = document.getElementById("b2-button");
let b3 = document.getElementById("b3-button");
let b4 = document.getElementById("b4-button");
let b5 = document.getElementById("b5-button");
let b6 = document.getElementById("b6-button");
let b7 = document.getElementById("b7-button");
let b8 = document.getElementById("b8-button");
let b9 = document.getElementById("b9-button");
let bc = document.getElementById("c-button");
let bmult = document.getElementById("mult-button");
let bdiv = document.getElementById("b0-button");
let bdot = document.getElementById("b0-button");
let badd = document.getElementById("b0-button");
let bsubt = document.getElementById("bsubt-button");
let biqual = document.getElementById("biqual-button");

function display(text) {
  disp.innerHTML = text;
}

clearAll();
function clearAll() {
  calculation = "";
  display("Please insert the operation");
}
function addOperation(op) {
  calculation += op;
  display(calculation);
}
function run() {
  try {
    calculation = eval(calculation);
    display(calculation);
  } catch (ex) {
    display("syntax error :(");
  }
}
