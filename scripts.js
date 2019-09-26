var chat = document.getElementById('demo');
var deckQuantity = 0; // 0 - full deck ; 1 - medium deck (70 cards); 2 - short deck (30 cards);
var opScore = 0;
var plScore = 0;
var plHand = [0,1,2,3,4];
var opArr = [];
var plArr = [];

for (let i = 0; i < 5; i++) {
  let len = arrNumbers.length;
  let randomNumber = Math.floor(Math.random() * len);
  let a = arrNumbers[randomNumber];
  opArr.push(countries[a]);
  arrNumbers.splice(randomNumber, 1);
};
for (let i = 0; i < 5; i++) {
  let len = arrNumbers.length;
  let randomNumber = Math.floor(Math.random() * len);
  let a = arrNumbers[randomNumber];
  plArr.push(countries[a]);
  arrNumbers.splice(randomNumber, 1);
};
var s1 = document.getElementById('s1'); var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3'); var s4 = document.getElementById('s4');
var s5 = document.getElementById('s5'); var s6 = document.getElementById('s6');
var s7 = document.getElementById('s7'); var s8 = document.getElementById('s8');
var s9 = document.getElementById('s9'); var s10 = document.getElementById('s10');
var picked = 0;
s1.onclick = function() { pick(1); }
s2.onclick = function() { pick(2); }
s3.onclick = function() { pick(3); }
s4.onclick = function() { pick(4); }
s5.onclick = function() { pick(5); }

function play() {
  document.getElementById("modal").style.display = "none";
}
function setDeck(a) {
  deckQuantity = a;
  if (deckQuantity == 1) {
    while (arrNumbers.length > 60) {
    let len = arrNumbers.length;
    let randomNumber = Math.floor(Math.random() * len);
    arrNumbers.splice(randomNumber, 1);
    }
  };
  if (deckQuantity == 2) {
    while (arrNumbers.length > 20) {
      let len = arrNumbers.length;
      let randomNumber = Math.floor(Math.random() * len);
      arrNumbers.splice(randomNumber, 1);
      };
  }
  document.getElementById('cardsremaining').style.opacity = 1;
  update();
}
function pick(a) {
  if (opArr[a-1].name !== "BLANK" && opPick == -1) {
  document.getElementById("submit").disabled = false;
  picked = a;
  console.log(picked);
  document.getElementById("guess").disabled = false;
  }
}
function highlight() {
  if (picked == 1) { s1.style.border = "2px solid black" } 
  else {s1.style.border = "1px solid black"};
  if (picked == 2) { s2.style.border = "2px solid black" }
  else {s2.style.border = "1px solid black"};
  if (picked == 3) { s3.style.border = "2px solid black" }
  else {s3.style.border = "1px solid black"};
  if (picked == 4) { s4.style.border = "2px solid black" }
  else {s4.style.border = "1px solid black"};
  if (picked == 5) { s5.style.border = "2px solid black" }
  else {s5.style.border = "1px solid black"};
}
function opHighlight() {
  if (opPick == 0) { s6.style.border = "2px solid black" } 
  else {s6.style.border = "1px solid black"};
  if (opPick == 1) { s7.style.border = "2px solid black" }
  else {s7.style.border = "1px solid black"};
  if (opPick == 2) { s8.style.border = "2px solid black" }
  else {s8.style.border = "1px solid black"};
  if (opPick == 3) { s9.style.border = "2px solid black" }
  else {s9.style.border = "1px solid black"};
  if (opPick == 4) { s10.style.border = "2px solid black" }
  else {s10.style.border = "1px solid black"};
}
function guess() {
  let str = document.getElementById('guess').value;
  if (str == "") {
    chat.innerHTML = "The answer field is empty, fill in the answer.<br><br>" + chat.innerHTML;
    return;
  }
  let answer = String(str).toUpperCase();
  let msgNumber = Math.floor(Math.random() * 3);
  let message = "";
  if (msgNumber == 0) {
    message = "Correct!<br><br>";
  }
  if (msgNumber == 1) {
    message = "Well done!<br><br>";
  }
  if (msgNumber == 2 || msgNumber == 3) {
    message = "Nice one!<br><br>";
  }
  if (answer == opArr[picked - 1].name) {
    chat.innerHTML = message + chat.innerHTML;
    plScore++;
  } else {
    chat.innerHTML = "Wrong answer. This was the flag of " + opArr[picked - 1].name  + "<br><br>" + chat.innerHTML;
  }
  if (arrNumbers.length > 0) {
    let len = arrNumbers.length;
    let randomNumber = Math.floor(Math.random() * len);
    let a = arrNumbers[randomNumber];
    opArr[picked - 1] = countries[a];
    arrNumbers.splice(randomNumber, 1);
  } else {
    opArr[picked - 1] = countries[0];
  }
  update();
  picked = 0;
  highlight();
  document.getElementById('guess').value = "";
  document.getElementById('submit').disabled = "true";
  document.getElementById('guess').disabled = "true";
  document.getElementById("opSlots").style.opacity = 0.25;
  document.getElementById("playerSlots").style.opacity = 1;
  setTimeout(opGuess, 1000);
}
document.getElementById("opSlots").addEventListener('click', highlight);
document.getElementById('submit').addEventListener("click", guess);

var opPick = -1;
function opGuess() {
 if (plHand.length > 0) {
 let anotherRandomNumber = Math.floor(Math.random() * (plHand.length - 1));
 opPick = plHand[anotherRandomNumber];
 opHighlight();
 var chancesIndex = plArr[opPick].difficulty + difficultyIndex;
 setTimeout(actualGuess, 800);
 function actualGuess() {
   let chances = Math.floor(Math.random() * chancesIndex);
   if (chances == 0) {
     chat.innerHTML = "Computer picked card No. " 
       + (opPick + 1) + " (" + plArr[opPick].name + ") and answered correctly<br><br>" + chat.innerHTML;
     opScore++;
   } else {
    chat.innerHTML = "Computer picked card No. "
   + (opPick + 1) + " (" + plArr[opPick].name + ") and missed<br><br>" + chat.innerHTML;
   };
   if (arrNumbers.length > 0) {
   let len = arrNumbers.length;
   let randomNumber = Math.floor(Math.random() * len);
   let a = arrNumbers[randomNumber]
   plArr[opPick] = countries[a];
   arrNumbers.splice(randomNumber, 1);
   } else {
   plArr[opPick] = countries[0];
   let index = plHand.indexOf(opPick);
   plHand.splice(index, 1);
   }
   opPick = -1;
   opHighlight();
   update();
   document.getElementById("opSlots").style.opacity = 1;
   document.getElementById("playerSlots").style.opacity = 0.25;
  }
 }
}

function update() {
s1.src = opArr[0].source;
s2.src = opArr[1].source;
s3.src = opArr[2].source; 
s4.src = opArr[3].source;
s5.src = opArr[4].source; 
s6.src = plArr[0].source;
s7.src = plArr[1].source; 
s8.src = plArr[2].source;
s9.src = plArr[3].source;
s10.src = plArr[4].source;
document.getElementById("plscore").innerHTML = "YOU: " + plScore;
document.getElementById("opscore").innerHTML = "COMPUTER: " + opScore;
if (arrNumbers.length > 1) {
document.getElementById("cardsremaining").innerHTML = arrNumbers.length + " cards remaining in deck";
} else if (arrNumbers.length == 1) {
  document.getElementById("cardsremaining").innerHTML = arrNumbers.length + " card remaining in deck";
} else {
  document.getElementById("cardsremaining").innerHTML = "No cards remaining in the deck";
};
  if (arrNumbers.length == 0 && plHand.length == 0 && opArr[0] == countries[0] && opArr[1] == countries[0] && opArr[2] == countries[0] && opArr[3] == countries[0] && opArr[4] == countries[0] ) {
    gameOver();
  }
}
update();

function gameOver() {
  document.getElementById('cardsremaining').innerHTML = "GAME OVER";
  if (opScore > plScore) {
    chat.innerHTML = "Computer won. Better luck next time!<br><br>" + chat.innerHTML;
  } else if (opScore < plScore) {
    chat.innerHTML = "Congratulations! You won!<br><br>" + chat.innerHTML;
  } else {
    chat.innerHTML = "It's a tie!<br><br>" + chat.innerHTML;
  }
}

// restart
function displayRestartText() {
  document.getElementById("restartText").style.opacity = 1;
}
function hideRestartText() {
  document.getElementById("restartText").style.opacity = 0;
}
function displaySettingsText() {
  document.getElementById("settingsText").style.opacity = 1;
}
function hideSettingsText() {
  document.getElementById("settingsText").style.opacity = 0;
}
function reset() {
  chat.innerHTML = "Restarting the game<br><br>" + chat.innerHTML;
  arrNumbers = [];
  for (let i = 1; i < countries.length; i++) {
  arrNumbers.push( i );
  };
  if (deckQuantity == 1) {
    while (arrNumbers.length > 70) {
    let len = arrNumbers.length;
    let randomNumber = Math.floor(Math.random() * len);
    arrNumbers.splice(randomNumber, 1);
    }
  };
  if (deckQuantity == 2) {
    while (arrNumbers.length > 30) {
      let len = arrNumbers.length;
      let randomNumber = Math.floor(Math.random() * len);
      arrNumbers.splice(randomNumber, 1);
    }
  }
  opScore = 0;
  plScore = 0;
  plHand = [0,1,2,3,4];
  opArr = [0,0,0,0,0];
  plArr = [0,0,0,0,0];
  for (let i = 0; i < 5; i++) {
    let len = arrNumbers.length;
    let randomNumber = Math.floor(Math.random() * len);
    let a = arrNumbers[randomNumber];
    opArr[i] = countries[a];
    arrNumbers.splice(randomNumber, 1);
  };
  for (let i = 0; i < 5; i++) {
    let len = arrNumbers.length;
    let randomNumber = Math.floor(Math.random() * len);
    let a = arrNumbers[randomNumber];
    plArr[i] = countries[a];
    arrNumbers.splice(randomNumber, 1);
  };
  var opPick = -1;
  update();
}
function confirmRestart() {
  document.getElementById("confirmRestart").style.display = "block";
}
function hideConfirmRestart() {
    document.getElementById("confirmRestart").style.display = "none";
}
// settings
var colorTheme = 0; // 0 - light; 1 - dark; 
var difficultyIndex = 0; // -1 - hard; 0 - medium; 1 - easy;
// deckquantity defined in the beginning
document.getElementById("close-btn").addEventListener("click", closeSettings);
function closeSettings() {
  document.getElementById("settings-room").style.display = "none";
}
document.getElementById("settings").addEventListener("click", openSettings);
function openSettings() {
  document.getElementById("settings-room").style.display = "block";
}


function updateTheme(a) {
  colorTheme = a;
  if (colorTheme == 0) {
    document.getElementsByTagName("BODY")[0].style.backgroundImage = 'linear-gradient(to right, #006080, #00663d)';
    document.getElementById("plscore").style.color = 'black';
    document.getElementById("opscore").style.color = 'black';
    document.getElementById("cardsremaining").style.color = "rgba(0,0,0, .25)";
    document.getElementById("dark-slot").style.opacity = 0.45;
    document.getElementById("light-slot").style.opacity = 1;
  };
  if (colorTheme == 1) {
    document.getElementsByTagName("BODY")[0].style.backgroundImage = 'linear-gradient(to right, #0d0d0d, #00001a)';
    document.getElementById("plscore").style.color = 'white';
    document.getElementById("opscore").style.color = 'white';
    document.getElementById("cardsremaining").style.color = "rgba(255,255,255, .75)";
    document.getElementById("light-slot").style.opacity = 0.45;
    document.getElementById("dark-slot").style.opacity = 1;
  };
}

function updateDifficulty(a) {
  difficultyIndex = a;
  if (difficultyIndex == 0) {
    document.getElementById("dif-easy").style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById("dif-easy").style.color = 'white';
    document.getElementById("dif-med").style.backgroundColor = 'white';
    document.getElementById("dif-med").style.color = 'rgba(0,0,0,0.7)';
    document.getElementById("dif-hard").style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById("dif-hard").style.color = 'white';
  }
  else if (difficultyIndex == 1) {
    document.getElementById("dif-easy").style.backgroundColor = 'white';
    document.getElementById("dif-easy").style.color = 'rgba(0,0,0,0.7)';
    document.getElementById("dif-med").style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById("dif-med").style.color = 'white'
    document.getElementById("dif-hard").style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById("dif-hard").style.color = 'white'
  }
  else if (difficultyIndex == -1) {
    document.getElementById("dif-easy").style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById("dif-easy").style.color = 'white'
    document.getElementById("dif-med").style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById("dif-med").style.color = 'white'
    document.getElementById("dif-hard").style.backgroundColor = 'white';
    document.getElementById("dif-hard").style.color = 'rgba(0,0,0,0.7)';
  }
}
updateDifficulty(0);