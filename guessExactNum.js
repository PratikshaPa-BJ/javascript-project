// Generate random number
let randomNum = Math.floor(Math.random() * 100) + 1;

// Select elements
const submit = document.querySelector("#sub");
const userInput = document.querySelector("#guessField");
const previousGuess = document.querySelector(".prevGuess");
const guessRemaining = document.querySelector(".guessRemain");
const lowOrHigh = document.querySelector(".lowHigh");
const startOver = document.querySelector(".result");

// Game state
let prevGuessArr = [];
let attemptsLeft = 10;
let playGame = true;

// Create button once
const button = document.createElement("button");

// Event listener
submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (!playGame) return;

  const inputVal = parseInt(userInput.value);
  validateGuess(inputVal);
});

// Validate guess
function validateGuess(inputVal) {
  if (isNaN(inputVal)) {
    alert("Please enter a valid number");
    return;
  }

  if (inputVal < 1 || inputVal > 100) {
    alert("Enter number between 1 and 100");
    return;
  }

  if (prevGuessArr.includes(inputVal)) {
    alert("You already guessed this number!");
    return;
  }

  // Store guess
  prevGuessArr.push(inputVal);
  displayGuess(inputVal);

  // Check win first
  if (inputVal === randomNum) {
    displayMsg("🎉 You guessed it right!");
    endGame();
    return;
  }

  attemptsLeft--;

  if (attemptsLeft === 0) {
    displayMsg(`❌ Game Over! Number was ${randomNum}`);
    endGame();
    return;
  }

  checkGuess(inputVal);
}

// Check high or low
function checkGuess(inputVal) {
  if (inputVal < randomNum) {
    displayMsg("📉 Too low!");
  } else {
    displayMsg("📈 Too high!");
  }
}

// Display guesses
function displayGuess(inputVal) {
  userInput.value = "";
  previousGuess.innerHTML += `${inputVal} `;
  guessRemaining.innerHTML = attemptsLeft - 1;
}

// Display message
function displayMsg(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

// End game
function endGame() {
  userInput.disabled = true;
  submit.disabled = true;

  button.id = "newGame";
  button.innerHTML = `<h3>Start New Game</h3>`;
  button.classList.add("button");

  startOver.appendChild(button);

  playGame = false;
  newGame();
}

// Start new game
function newGame() {
  const newBtn = document.querySelector("#newGame");

  newBtn.addEventListener("click", function () {
    // Reset everything
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);

    prevGuessArr = [];
    attemptsLeft = 10;

    previousGuess.innerHTML = "";
    guessRemaining.innerHTML = "10";
    lowOrHigh.innerHTML = "";

    userInput.disabled = false;
    submit.disabled = false;
    userInput.value = "";

    if (startOver.contains(button)) {
      startOver.removeChild(button);
    }

    playGame = true;
  });
}
