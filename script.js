"use strict";
const question = document.querySelector(".question");
const options = document.querySelector(".option");
const btnCheck = document.querySelector(".btn__check");

const questions = [
  {
    question: "Which among the following is a multi-paradigm language?",
    op1: "Java",
    op2: "JavaSrcipt",
    op3: "Python",
    op4: "C++",
    answer: 2,
  },
  {
    question: "Choose the odd among the following",
    op1: "Python",
    op2: "C",
    op3: "C++",
    op4: "Java",
    answer: 2,
  },
  {
    question: "Which of the following does not supports multithreading",
    op1: "JavaScript",
    op2: "Java",
    op3: "Python",
    op4: "C",
    answer: 1,
  },
  {
    question: "Which languages are more appropriate for web developement",
    op1: "Java and C++",
    op2: "Python and Ruby",
    op3: "JavScript and PHP",
    op4: "HTML, CSS and JavaScript",
    answer: 4,
  },
  {
    question: "To Run a Java program, the device must have?",
    op1: "Java",
    op2: "Internet",
    op3: "JDK",
    op4: "JavaCsript",
    answer: 3,
  },
];

let curQuestion = 0;
let answer = -1;
const optionArr = Array.from(options.children);

const init = function () {
  const quest = questions[curQuestion];
  document.querySelector(".question").firstElementChild.textContent =
    quest.question;
  document.getElementById("1").textContent = quest.op1;
  document.getElementById("2").textContent = quest.op2;
  document.getElementById("3").textContent = quest.op3;
  document.getElementById("4").textContent = quest.op4;
  answer = quest.answer;
};
init();
question.addEventListener("click", function (e) {
  console.log(question.firstElementChild.textContent);
});

options.addEventListener("click", function (e) {
  const curOption = e.target.closest(".option__item")?.dataset.option;
  if (!curOption) return;

  optionArr.forEach((op) => {
    op.classList.remove("click");
  });
  if (btnCheck.textContent === "Next") return;
  e.target.closest(".option__item").classList.toggle("click");
});
btnCheck.addEventListener("click", function (e) {
  if (e.target.textContent === "Check") {
    const ops = optionArr.map((el) => el.classList.contains("click"));
    const index = ops.findIndex((op) => op === true);
    if (index === -1) return;
    if (index + 1 === answer) {
      document.getElementById(answer).classList.add("green");
    } else {
      document.getElementById(index + 1).classList.add("red");
      document.getElementById(answer).classList.add("green");
    }
    e.target.textContent = "Next";
  } else if (e.target.textContent === "Restart") location.reload();
  else {
    optionArr.forEach((op) => {
      op.classList.remove("click");
      op.classList.remove("red");
      op.classList.remove("green");
    });

    e.target.textContent = "Check";

    ++curQuestion;
    if (curQuestion < questions.length) init();
    else btnCheck.textContent = "Restart";
  }
});
