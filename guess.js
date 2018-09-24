var btnStart = document.querySelector(".start");
var btnMore = document.querySelector(".more");
var btnLess = document.querySelector(".less");
var btnExact = document.querySelector(".exact");

var theAnswer = document.querySelector(".answer");

var theCounter = document.querySelector(".tryNumber");

var theGuess = 5000;
var lastMore = 0;
var lastLess = 10000;
var counter = 1;

btnStart.addEventListener("click", function () {
  btnStart.classList.add("hide");
	btnMore.classList.add("show");
	btnLess.classList.add("show");
	btnExact.classList.add("show");
	theAnswer.textContent = "Попытка номер " + counter + ". Это число 5000?";
});

btnExact.addEventListener("click", function () {
  theAnswer.textContent = "Видите, как я крута? =)";
});

btnMore.addEventListener("click", checkMore);
btnLess.addEventListener("click", checkLess);

function checkMore () {
  lastMore = theGuess;
	theGuess = Math.round(lastMore + (lastLess - lastMore) / 2);
  counter += 1;
  theCounter.textContent = "counter";
  theAnswer.textContent = "Попытка номер " + counter + ". Это число " + theGuess + "?";
  if (counter > 14) {
    theAnswer.textContent = "Упс! Как это возможно? Вы точно где-то ошиблись...";
  }
  return counter;
};

function checkLess () {
  lastLess = theGuess;
	theGuess = Math.round(lastMore + (lastLess - lastMore)/2);
  counter += 1;
  theAnswer.textContent = "Попытка номер " + counter + ". Это число " + theGuess + "?";
  if (counter > 14) {
    theAnswer.textContent = "Упс! Как это возможно? Вы точно где-то ошиблись...";
  }
  return counter;
};
