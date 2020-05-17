if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceworker.js")
      .then(res => { 
        console.log("service worker registered");
        loadingScreen.style.opacity = '0';
        setTimeout( () => {
          loadingScreen.style.display = 'none';
        }, 500);
      })
      .catch(err => console.log("service worker not registered", err))
  })
}

// Load the assets
for (let i = 0; i < countries.length; i++) {
  let img = countries[i].source;
  let e = document.createElement('img');
  e.src = img;
}
// DOM Accessing
const s1 = document.getElementById('s1'); 
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3'); 
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5'); 
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7'); 
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9'); 
const s10 = document.getElementById('s10');
const centerMessage = document.getElementById('center-message');
const answerInput =  document.getElementById('guess');
const playerSlots = document.getElementById('playerSlots');
const opponentSlots = document.getElementById('opponentSlots')
const cardsRemaining = document.getElementById("cardsremaining");
const submitButton = document.getElementById('submit');
const difficultyButtons = document.getElementsByClassName('section-buttons')[0];
const deckSizeButtons = document.getElementsByClassName('section-buttons')[1]
const playButton = document.getElementsByClassName('play-button')[0];
const settingsButton = document.getElementsByClassName('settings-button')[0];
const settingsColorSlots = document.getElementById('color-slots');
const settingsDifficultySlots = document.getElementById('difficulty-slots');
const settingsDeckSizeSlots = document.getElementById('deck-size-slots');
const deckSizeNote = document.getElementsByClassName('note')[0];
const loadingScreen = document.getElementById('loading-modal');

// GAME ENGINE
function setDeck(deckQuantity) {
  while (arrNumbers.length > deckQuantity) {
    let len = arrNumbers.length;
    let randomNumber = Math.floor(Math.random() * len);
    arrNumbers.splice(randomNumber, 1);
  }
  cardsRemaining.style.opacity = 1;
}

function splitCards() {
  // Opponent hand
  for (let i = 0; i < 5; i++) {
      let len = arrNumbers.length;
      let randomNumber = Math.floor(Math.random() * len);
      let flagId = arrNumbers[randomNumber];
      oppHand.push(countries[flagId]);
      arrNumbers.splice(randomNumber, 1);
  };
  // Player hand;
  for (let i = 0; i < 5; i++) {
    let len = arrNumbers.length;
    let randomNumber = Math.floor(Math.random() * len);
    let a = arrNumbers[randomNumber];
    playerHand.push(countries[a]);
    arrNumbers.splice(randomNumber, 1);
  };
}

// Updating the images of flag elements
function updateFlagImages() {
  s1.src = oppHand[0].source;
  s2.src = oppHand[1].source;
  s3.src = oppHand[2].source; 
  s4.src = oppHand[3].source;
  s5.src = oppHand[4].source;
  s6.src = playerHand[0].source;
  s7.src = playerHand[1].source; 
  s8.src = playerHand[2].source;
  s9.src = playerHand[3].source;
  s10.src = playerHand[4].source;
}

function pickFlag(num) {
  if (oppHand[num-1].name !== "BLANK") {
    submitButton.disabled = false;
    answerInput.disabled = false;
    playerPickedCard = num;
    highlight(num);
    answerInput.focus();
  }
}

function guess() {
  let str = answerInput.value;
  if (str == "") {
    showMessage("Please fill the answer");
    return;
  }
  let answer = str.toUpperCase();
  if (answer === oppHand[playerPickedCard - 1].name) {
    showMessage("Correct!");
    plScore++;
  } else {
    showMessage(`Wrong, this was the flag of ${oppHand[playerPickedCard - 1].name}`);
  }
  if (arrNumbers.length > 0) {
    let len = arrNumbers.length;
    let randomNumber = Math.floor(Math.random() * len);
    let a = arrNumbers[randomNumber];
    oppHand[playerPickedCard - 1] = countries[a];
    arrNumbers.splice(randomNumber, 1);
  } else {
    oppHand[playerPickedCard - 1] = countries[0];
  }
  updateFlagImages();
  updateScoreboard();
  playerPickedCard = 0;
  highlight();
  answerInput.value = "";
  submitButton.disabled = true;
  answerInput.disabled = true;
  opponentSlots.style.opacity = 0.25;
  playerSlots.style.opacity = 1;
  if (checkIfGameIsOver() === true) {
    gameOver();
    return;
  }
  setTimeout(opGuess, 1000);
}

function opGuess() {
  if (playerHand.length > 0) {
    let anotherRandomNumber = Math.floor(Math.random() * (playerCardNumbers.length - 1));
    let cardIndex = playerCardNumbers[anotherRandomNumber];
    let opponentPick = playerHand[cardIndex];
    opponentHighlight(opponentPick);
    let chancesIndex = opponentPick.difficulty + difficultyIndex;
    setTimeout(performOpGuess, 800);
    function performOpGuess() {
      let chances = Math.floor(Math.random() * chancesIndex);
      if (chances == 0) {
        // Correct answer
        showMessage(`Computer chose flag of ${opponentPick.name} and answered correctly`);
        opScore++;
      } else {
        // Wrong answer
        showMessage(`Computer chose flag of ${opponentPick.name} and missed`);
      };
      // Pick a new card to player hand
      if (arrNumbers.length > 0) {
        let len = arrNumbers.length;
        let randomNumber = Math.floor(Math.random() * len);
        let countryId = arrNumbers[randomNumber];
        playerHand[cardIndex] = countries[countryId];
        arrNumbers.splice(randomNumber, 1);
      } else {
        let index = playerHand.indexOf(opponentPick);
        playerHand[cardIndex] = countries[0];
        playerCardNumbers.splice(playerCardNumbers.indexOf(cardIndex), 1);
      }
    opponentPick = -1;
    opponentHighlight("None");
    updateScoreboard();
    updateFlagImages();
    if (checkIfGameIsOver() === true) {
      gameOver();
      return;
    }
    opponentSlots.style.opacity = 1;
    playerSlots.style.opacity = 0.25;
  }
 }
}

function highlight(pickedCard) {
  let index = pickedCard - 1;
  const items = opponentSlots.getElementsByClassName('slot');
  for (let i = 0; i < 5; i++) {
    if (i === index) {
      items[i].style.border = "3px solid #3366ff";
    } else {
      items[i].style.border = "1px solid black"
    }
  }
}

function opponentHighlight(opponentPick) {
  if (opponentPick === "None") {
    for (let i = 0; i < 5; i++) {
      let item = playerSlots.getElementsByClassName('slot')[i];
      item.style.border = "1px solid black";
    }
  } else {
    let cardNum = playerHand.indexOf(opponentPick);
    for (let i = 0; i < 5; i++) {
      let item = playerSlots.getElementsByClassName('slot')[i];
      if (i === cardNum) {
        item.style.border = "3px solid #3366ff"
      } else {
        item.style.border = "1px solid black"
      }
    }
  } 
}

function updateScoreboard() {
  document.getElementById("plscore").innerHTML = "YOU: " + plScore;
  document.getElementById("opscore").innerHTML = "COMPUTER: " + opScore;
  if (arrNumbers.length > 1) {
    cardsRemaining.innerHTML = arrNumbers.length + " cards remaining in deck";
  } else if (arrNumbers.length == 1) {
    cardsRemaining.innerHTML = arrNumbers.length + " card remaining in deck";
  } else {
    cardsRemaining.innerHTML = "No cards remaining in the deck";
  };
}


function checkIfGameIsOver() {
  if (arrNumbers.length > 0) {
    return false;
  }
  for (let i = 0; i < 5; i++) {
    if (oppHand[i].name !== "BLANK") {
      return false
    }
    if (playerHand[i].name !== "BLANK") {
      return false
    }
  }
  return true
}

function gameOver() {
  cardsRemaining.innerHTML = "GAME OVER. ";
  if (opScore > plScore) {
    cardsRemaining.innerHTML += "Computer won"
  } else if (opScore < plScore) {
    cardsRemaining.innerHTML += "You won!";
  } else {
    cardsRemaining.innerHTML += "It's a tie";
  }
}

// Show message
function showMessage(msg) {
  const newMessage = document.createElement("DIV");
  newMessage.classList.add('message');
  if (colorTheme === 0) {
    newMessage.classList.add('lighter-color');
  }
  newMessage.innerText = msg;
  centerMessage.append(newMessage);

  setTimeout( () => { centerMessage.removeChild(newMessage)}, 2000)
}

// SECOND TIER FUNCTIONS
function restartGame() {
  showMessage("Restarting the game");
  arrNumbers = [];
  for (let i = 1; i < countries.length; i++) {
    arrNumbers.push( i );
  };
  while (arrNumbers.length > deckQuantity) {
    let len = arrNumbers.length;
    let randomNumber = Math.floor(Math.random() * len);
    arrNumbers.splice(randomNumber, 1);
  };
  opScore = 0;
  plScore = 0;
  playerHand = [];
  oppHand = [];
  playerPickedCard = 0;
  playerCardNumbers = [0,1,2,3,4];
  opPick = -1;
  playerSlots.style.opacity = 0.25;
  opponentSlots.style.opacity = 1;
  splitCards();
  updateFlagImages();
  updateScoreboard();
}

// Opening Restart Module
function openConfirmRestartModal() {
  document.getElementById("confirmRestart").style.display = "flex";
}
function hideConfirmRestart() {
  document.getElementById("confirmRestart").style.display = "none";
}

// Opening Settings Module
function openSettings() {
  document.getElementById("settings-room").style.display = "flex";
  retrieveSettings();
  highlightSettingsColorSlots();
  highlightSettingsDifficulty();
  highlightSettingsDeckSize();
}
function closeSettings() {
  document.getElementById("settings-room").style.display = "none";
  storeSettings();
}


function removeModal() {
  document.getElementById("modal").style.display = "none";
}
function updateTheme(colorIndex) {
  colorTheme = colorIndex;
  if (colorTheme === 0) {
    document.getElementsByTagName("BODY")[0].style.backgroundImage = 'linear-gradient(to right, #006080, #00663d)';
    document.getElementById("plscore").style.color = 'black';
    document.getElementById("opscore").style.color = 'black';
    document.getElementById("cardsremaining").style.color = "rgba(0,0,0, .25)";
  };
  if (colorTheme === 1) {
    document.getElementsByTagName("BODY")[0].style.backgroundImage = 'linear-gradient(to right, #0d0d0d, #00001a)';
    document.getElementById("plscore").style.color = 'white';
    document.getElementById("opscore").style.color = 'white';
    document.getElementById("cardsremaining").style.color = "rgba(255,255,255, .75)";
  };
  highlightSettingsColorSlots();
}

function updateDifficulty(newDifficultyIndex) {
  difficultyIndex = newDifficultyIndex;
  highlightSettingsDifficulty();
}

function updateDeck(newDeckSize) {
  deckQuantity = newDeckSize;
  highlightSettingsDeckSize();
};

function storeSettings() {
  if (typeof(Storage) !== undefined) {
    if (difficultyIndex === 0) {
      localStorage.setItem('difficultyIndex','medium');
    } else if (difficultyIndex === 1) {
      localStorage.setItem('difficultyIndex','easy');
    } else if (difficultyIndex === -1) {
      localStorage.setItem('difficultyIndex','hard');
    };
    if (colorTheme === 0) {
      localStorage.setItem('colorTheme','light');
    } else {
     localStorage.setItem('colorTheme','dark');
    };
  };
};

function retrieveSettings() {
  if (localStorage.colorTheme == undefined || localStorage.difficultyIndex == undefined ) {
      localStorage.colorTheme = 'light';
      localStorage.difficultyIndex = 'medium';
  };
  if (localStorage.difficultyIndex === 'easy') {
    difficultyIndex = 1;
  } else if (localStorage.difficultyIndex === 'medium') {
    difficultyIndex = 0;
  } else if (localStorage.difficultyIndex === 'hard') {
    difficultyIndex = -1;
  };
  if (localStorage.colorTheme === 'light') {
    colorTheme = 0;
  } else if (localStorage.colorTheme === 'dark') {
    colorTheme = 1;
  };
};

function highlightDifficultyButton() {
  for (let i = 1, k = 0; i > -2; i--, k++) {
    let item = difficultyButtons.getElementsByClassName('section-button')[k];
    if (difficultyIndex === i) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  }
}

function highlightDeckSizeButton() {
  const fullButton = deckSizeButtons.getElementsByClassName('section-button')[0];
  const shortButton = deckSizeButtons.getElementsByClassName('section-button')[1];
  const customButton = deckSizeButtons.getElementsByClassName('section-custom')[0];
  if (deckQuantity === 195) {
    fullButton.classList.add('selected')
  } else {
    fullButton.classList.remove('selected')
  };
  if (deckQuantity === 30) {
    shortButton.classList.add('selected')
  } else {
    shortButton.classList.remove('selected')
  };
  if (deckQuantity !== 30 && deckQuantity !== 195) {
    customButton.classList.add('selected');
    const input = document.getElementById('deck-size-input');
    input.value = deckQuantity;
  } else {
    customButton.classList.remove('selected')
  };
}

function pickDifficulty(newDifficultyIndex) {
  difficultyIndex = newDifficultyIndex;
  highlightDifficultyButton();
}
function pickDeckSize(newDeckSize) {
  deckQuantity = newDeckSize;
  highlightDeckSizeButton();
}

function highlightSettingsColorSlots(){
  if (colorTheme === 0) {
    settingsColorSlots.getElementsByClassName('color-slot')[0].classList.add('selected');
    settingsColorSlots.getElementsByClassName('color-slot')[1].classList.remove('selected');
  } else {
    settingsColorSlots.getElementsByClassName('color-slot')[1].classList.add('selected');
    settingsColorSlots.getElementsByClassName('color-slot')[0].classList.remove('selected')
  }
}

function highlightSettingsDifficulty() {
  if (difficultyIndex === 1) {
    settingsDifficultySlots.getElementsByClassName('set-slot')[0].classList.add('selected');
    settingsDifficultySlots.getElementsByClassName('set-slot')[1].classList.remove('selected');
    settingsDifficultySlots.getElementsByClassName('set-slot')[2].classList.remove('selected');
  }
  if (difficultyIndex === 0) {
    settingsDifficultySlots.getElementsByClassName('set-slot')[0].classList.remove('selected');
    settingsDifficultySlots.getElementsByClassName('set-slot')[1].classList.add('selected');
    settingsDifficultySlots.getElementsByClassName('set-slot')[2].classList.remove('selected');
  }
  if (difficultyIndex === -1) {
    settingsDifficultySlots.getElementsByClassName('set-slot')[0].classList.remove('selected');
    settingsDifficultySlots.getElementsByClassName('set-slot')[1].classList.remove('selected');
    settingsDifficultySlots.getElementsByClassName('set-slot')[2].classList.add('selected');
  }
}

function highlightSettingsDeckSize() {
  document.getElementById('settings-custom-deck').value = deckQuantity;
  if (deckQuantity === 195) {
    settingsDeckSizeSlots.getElementsByClassName('set-slot')[0].classList.add('selected');
    settingsDeckSizeSlots.getElementsByClassName('set-slot')[1].classList.remove('selected');
    settingsDeckSizeSlots.getElementsByClassName('set-slot')[2].classList.remove('selected');
  } else if (deckQuantity === 30) {
    settingsDeckSizeSlots.getElementsByClassName('set-slot')[0].classList.remove('selected');
    settingsDeckSizeSlots.getElementsByClassName('set-slot')[1].classList.add('selected');
    settingsDeckSizeSlots.getElementsByClassName('set-slot')[2].classList.remove('selected');
  } else {
    settingsDeckSizeSlots.getElementsByClassName('set-slot')[0].classList.remove('selected');
    settingsDeckSizeSlots.getElementsByClassName('set-slot')[1].classList.remove('selected');
    settingsDeckSizeSlots.getElementsByClassName('set-slot')[2].classList.add('selected');
  }
}

function showDeckSizeNote() {
  deckSizeNote.style.opacity = 1;
}
function hideDeckSizeNote() {
  deckSizeNote.style.opacity = 0;
}

// Adding events
playButton.addEventListener("click", playGame);
s1.onclick = function() { pickFlag(1); }
s2.onclick = function() { pickFlag(2); }
s3.onclick = function() { pickFlag(3); }
s4.onclick = function() { pickFlag(4); }
s5.onclick = function() { pickFlag(5); }
submitButton.addEventListener("click", guess);
document.getElementById("close-btn").onclick = function() { closeSettings(); hideDeckSizeNote() };
difficultyButtons.getElementsByClassName('section-button')[0].onclick = function() { pickDifficulty(1)};
difficultyButtons.getElementsByClassName('section-button')[1].onclick = function() { pickDifficulty(0)};
difficultyButtons.getElementsByClassName('section-button')[2].onclick = function() { pickDifficulty(-1)};
deckSizeButtons.getElementsByClassName('section-button')[0].onclick = function() { pickDeckSize(195)};
deckSizeButtons.getElementsByClassName('section-button')[1].onclick = function() { pickDeckSize(30)};
deckSizeButtons.getElementsByClassName('section-custom')[0].onclick = function() { pickDeckSize(document.getElementById('deck-size-input').value)};
settingsButton.addEventListener('click', openSettings);
document.getElementById('light-slot').onclick = function() { updateTheme(0)}
document.getElementById('dark-slot').onclick = function() { updateTheme(1)}
settingsDifficultySlots.getElementsByClassName('set-slot')[0].onclick = function() { updateDifficulty(1)};
settingsDifficultySlots.getElementsByClassName('set-slot')[1].onclick = function() { updateDifficulty(0)};
settingsDifficultySlots.getElementsByClassName('set-slot')[2].onclick = function() { updateDifficulty(-1)};
settingsDeckSizeSlots.getElementsByClassName('set-slot')[0].onclick = function() { updateDeck(195); showDeckSizeNote()};
settingsDeckSizeSlots.getElementsByClassName('set-slot')[1].onclick = function() { updateDeck(30); showDeckSizeNote() };
settingsDeckSizeSlots.getElementsByClassName('set-slot')[2].onclick = function() { updateDeck(document.getElementById('settings-custom-deck').value); showDeckSizeNote()};



// Pre-game init
let deckQuantity = 10;
let opScore = 0;
let plScore = 0;
let playerHand = [];
let oppHand = [];
let playerPickedCard = 0;
let playerCardNumbers = [0,1,2,3,4];

let difficultyIndex = 0; // -1 - hard; 0 - medium; 1 - easy;
let colorTheme = 0; // 0 - light; 1 - dark; 
retrieveSettings();
updateTheme(colorTheme);

highlightDifficultyButton();
highlightDeckSizeButton();

// Play
function playGame() {
  setDeck(deckQuantity);
  splitCards();
  updateScoreboard();
  updateFlagImages();
  removeModal();
  showMessage("Pick a card from above and guess");
}