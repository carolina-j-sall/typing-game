// Functions
// Gives one random word based on how many words in the array words + display word in DOM
function addWordToDOM () {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.textContent = randomWord;
};

// Increment score by 1 + display score in DOM
function updateScore () {
  score++;
  scoreEl.textContent = score;
};

// Decremt time by 1 + display time in DOM + clear at 0 + call gameOver function
function updateTime () {
  time--;
  timeEl.textContent = `${time}s`;
  if (time < 1 ) {
    clearInterval(timer);
    gameOver();
  };
};

// Shows 
function gameOver () {
    endgameEl.style.display = "flex";
    endgameEl.textContent = "Game over";
    createRestartButton();
};

function createRestartButton () {
  const createBtn = document.createElement("button");
  const textBtn = document.createTextNode("Restart game");
  createBtn.appendChild(textBtn);
  endgameEl.appendChild(createBtn);
  createBtn.addEventListener("click", function () {
    location.reload();
  })
};

// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

// Calling the function UpdateTime + run each 1s
const timer = setInterval(updateTime, 1000);

// Listen to input + if written word is the same as displayed word then call updateScore + addWordToDOM + add & display 5s to time + clear input field
text.addEventListener("input", function (e) {
  if (e.target.value === randomWord) {
    updateScore();
    addWordToDOM();
    time += 5;
    timeEl.textContent = `${time}s`;
    this.value = "";
  }
})

// Calling addWordToDOM to start the game + output 1 word from words array
addWordToDOM();

// calling functions to see output for testing
// addWordToDOM();
// updateScore();
// gameOver();
