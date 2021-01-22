let answers = document.querySelectorAll(".answer-click");
let questions = document.querySelectorAll(".question");

questions[0].addEventListener("click", showAnswerOne);

questions[1].addEventListener("click", showAnswerTwo);

questions[2].addEventListener("click", showAnswerThree);

questions[3].addEventListener("click", showAnswerFour);

questions[4].addEventListener("click", showAnswerFive);

function showAnswerOne() {
  if (answers[0].style.display == "none") {
    answers[1].style.display = "none";
    answers[2].style.display = "none";
    answers[3].style.display = "none";
    answers[4].style.display = "none";
    answers[0].style.display = "block";
    answers[0].style.width = "250px";
  } else {
    answers[0].style.display = "none";
  }
}
function showAnswerTwo() {
  if (answers[1].style.display == "none") {
    answers[0].style.display = "none";
    answers[2].style.display = "none";
    answers[3].style.display = "none";
    answers[4].style.display = "none";
    answers[1].style.display = "block";
    answers[1].style.width = "250px";
  } else {
    answers[1].style.display = "none";
  }
}
function showAnswerThree() {
  if (answers[2].style.display == "none") {
    answers[0].style.display = "none";
    answers[1].style.display = "none";
    answers[3].style.display = "none";
    answers[4].style.display = "none";
    answers[2].style.display = "block";
    answers[2].style.width = "250px";
  } else {
    answers[2].style.display = "none";
  }
}
function showAnswerFour() {
  if (answers[3].style.display == "none") {
    answers[0].style.display = "none";
    answers[1].style.display = "none";
    answers[2].style.display = "none";
    answers[4].style.display = "none";
    answers[3].style.display = "block";
    answers[3].style.width = "250px";
  } else {
    answers[3].style.display = "none";
  }
}
function showAnswerFive() {
  if (answers[4].style.display == "none") {
    answers[0].style.display = "none";
    answers[1].style.display = "none";
    answers[2].style.display = "none";
    answers[3].style.display = "none";
    answers[4].style.display = "block";
    answers[4].style.width = "250px";
  } else {
    answers[4].style.display = "none";
  }
}
