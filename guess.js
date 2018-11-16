var btnStart = document.querySelector(".btn__start");
var btnMore = document.querySelector(".btn__more");
var btnLess = document.querySelector(".btn__less");
var btnExact = document.querySelector(".btn__exact");
var btnAgain = document.querySelector(".btn__again");
var screen1 = document.querySelector(".screen1");
var screen2 = document.querySelector(".screen2");

var theAnswer = document.querySelector(".answer");
var theCounter = document.querySelector(".tryNumber");

btnStart.addEventListener("click", function () {
  resetStats();
  screen1.classList.add("hide");
  screen2.classList.remove("hide");	
	theAnswer.textContent = "Это число 5000?";
});

btnExact.addEventListener("click", function () {
  theAnswer.textContent = "Вот видите! =)";
  resetButtons();
  btnAgain.addEventListener("click", resetGame);
});

btnMore.addEventListener("click", checkMore);
btnLess.addEventListener("click", checkLess);

function checkMore() {
  lastMore = theGuess;
  newGuess();
};

function checkLess() {
  lastLess = theGuess;
  newGuess();
};
  
function resetGame() {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  resetStats();
  theCounter.textContent = counter;
  btnMore.style.display = "block";
  btnLess.style.display = "block";
  btnExact.style.display = "block";
  btnAgain.style.display = "none";
}

function resetButtons() {
  btnMore.style.display = "none";
  btnLess.style.display = "none";
  btnExact.style.display = "none";
  btnAgain.style.display = "block";
}

function resetStats() {
  theGuess = 5000;
  lastMore = 0;
  lastLess = 10000;
  counter = 1;
}

function newGuess() {
  theGuess = Math.round(lastMore + (lastLess - lastMore)/2);
  counter += 1;
  theCounter.textContent = counter;
  theAnswer.textContent = " Это число " + theGuess + "?";
  if (counter > 14) {
    theAnswer.textContent = "Упс! Как это возможно? Вы точно где-то ошиблись...";
    resetButtons();
    btnAgain.addEventListener("click", resetGame);
  }
}

