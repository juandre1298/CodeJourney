const quizData = [
  {
    question: "How old is Florin?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "What is the programming language that this app uses?",
    a: "java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "who is the President of US?",
    a: "Hugo Chavez",
    b: "Donald Trump",
    c: "Ivan Duque",
    d: "J Biden",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Applicaction programing Interface",
    correct: "a",
  },
  {
    question: "What year was JavaScript Launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "d",
  },
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //todo: show results
      /* alert("You finished!"); */
      quiz.innerHTML = `<h2>You answered correctly at: ${score} / ${quizData.length} questions`;
    }
  }
});
