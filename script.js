"use strict";

let matchNumebr = Math.trunc(Math.random() * 20);

const checkButtonSelector = document.querySelector(".check");
const againButtonSelector = document.querySelector(".again");
const message = document.querySelector(".message");
const body = document.querySelector("body");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const matchSle = document.querySelector(".match-nubmer");
const numberV = document.querySelector(".number");

againButtonSelector.addEventListener("click", function () {
  message.textContent = "Start gussing ....";
  body.classList.remove("green");
  body.classList.remove("red");
  score.textContent = 20;
  matchSle.textContent = "?";
  checkButtonSelector.style.display = "block";
  numberV.style.display = "block";
  numberV.value = "";
  matchNumebr = Math.trunc(Math.random() * 20);
  checkButtonSelector.disabled = false;
});

checkButtonSelector.addEventListener("click", function () {
  const enterValue = Number(numberV.value);
  if (!enterValue) {
    message.textContent = "No Number!";
  } else if (matchNumebr == enterValue) {
    message.textContent = "Correct Number";
    body.classList.add("green");
    checkButtonSelector.disabled = true;
    const sc = Number(score.textContent);
    const hi = Number(highScore.textContent);

    let highScoreV = 0;
    if (hi > sc) {
      highScore.textContent = hi;
    } else {
      highScore.textContent = sc;
    }

    matchSle.textContent = sc;
    document.querySelector(".number").value = "";
  } else {
    const sc = Number(score.textContent);
    if (sc != 1) {
      score.textContent = sc - 1;
      if (enterValue < 1 || enterValue > 20) {
        message.textContent = "Number should be between 0 to 20";
      } else {
        message.textContent = "Bad luck try again!";
      }
    } else {
      if (sc == 1) {
        checkButtonSelector.style.display = "none";
        numberV.style.display = "none";
        message.textContent = "You Lose the game!";
        body.classList.add("red");
      }
    }
  }
});
