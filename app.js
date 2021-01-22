let answers = document.querySelectorAll(".answer-click");
let questions = document.querySelectorAll(".question");
const quesContent = document.querySelectorAll(".ques-content");
const arrowImg = document.querySelectorAll(".arrow-down");

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
    quesContent[0].style.fontWeight = "bold";
    quesContent[1].style.fontWeight = "normal";
    quesContent[2].style.fontWeight = "normal";
    quesContent[3].style.fontWeight = "normal";
    quesContent[4].style.fontWeight = "normal";
    arrowImg[0].style.transform = "rotate(180deg)";
    arrowImg[1].style.transform = "none";
    arrowImg[2].style.transform = "none";
    arrowImg[3].style.transform = "none";
    arrowImg[4].style.transform = "none";
  } else {
    quesContent[0].style.fontWeight = "normal";
    answers[0].style.display = "none";
    arrowImg[0].style.transform = "none";
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
    quesContent[1].style.fontWeight = "bold";
    quesContent[0].style.fontWeight = "normal";
    quesContent[2].style.fontWeight = "normal";
    quesContent[3].style.fontWeight = "normal";
    quesContent[4].style.fontWeight = "normal";
    arrowImg[1].style.transform = "rotate(180deg)";
    arrowImg[0].style.transform = "none";
    arrowImg[2].style.transform = "none";
    arrowImg[3].style.transform = "none";
    arrowImg[4].style.transform = "none";
  } else {
    quesContent[1].style.fontWeight = "normal";
    answers[1].style.display = "none";
    arrowImg[1].style.transform = "none";
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
    quesContent[2].style.fontWeight = "bold";
    quesContent[0].style.fontWeight = "normal";
    quesContent[1].style.fontWeight = "normal";
    quesContent[3].style.fontWeight = "normal";
    quesContent[4].style.fontWeight = "normal";
    arrowImg[2].style.transform = "rotate(180deg)";
    arrowImg[0].style.transform = "none";
    arrowImg[1].style.transform = "none";
    arrowImg[3].style.transform = "none";
    arrowImg[4].style.transform = "none";
  } else {
    quesContent[2].style.fontWeight = "normal";
    answers[2].style.display = "none";
    arrowImg[2].style.transform = "none";
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
    quesContent[3].style.fontWeight = "bold";
    quesContent[0].style.fontWeight = "normal";
    quesContent[1].style.fontWeight = "normal";
    quesContent[2].style.fontWeight = "normal";
    quesContent[4].style.fontWeight = "normal";
    arrowImg[3].style.transform = "rotate(180deg)";
    arrowImg[0].style.transform = "none";
    arrowImg[1].style.transform = "none";
    arrowImg[2].style.transform = "none";
    arrowImg[4].style.transform = "none";
  } else {
    quesContent[3].style.fontWeight = "normal";
    answers[3].style.display = "none";
    arrowImg[3].style.transform = "none";
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
    quesContent[4].style.fontWeight = "bold";
    quesContent[0].style.fontWeight = "normal";
    quesContent[1].style.fontWeight = "normal";
    quesContent[2].style.fontWeight = "normal";
    quesContent[3].style.fontWeight = "normal";
    arrowImg[4].style.transform = "rotate(180deg)";
    arrowImg[0].style.transform = "none";
    arrowImg[1].style.transform = "none";
    arrowImg[2].style.transform = "none";
    arrowImg[3].style.transform = "none";
  } else {
    quesContent[4].style.fontWeight = "normal";
    answers[4].style.display = "none";
    arrowImg[4].style.transform = "none";
  }
}
