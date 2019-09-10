// making an array with countries
var arrNumbers = [];
for (let i = 1; i < 51; i++) {
  arrNumbers.push( i );
};
var chat = document.getElementById('demo');
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
 var chancesIndex = plArr[opPick].difficulty;
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