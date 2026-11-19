// functions
function addWordToDOM () {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.textContent = randomWord;
};

function updateScore () {
  score++;
  scoreEl.textContent = score;
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

text.addEventListener("input", function (e) {
  if (e.target.value === randomWord) {
    updateScore();
    addWordToDOM();
    time += 5;
    timeEl.textContent = `${time}s`;
    this.value = "";
  }
})

// calling functions to see output for testing
addWordToDOM();
// updateScore();
