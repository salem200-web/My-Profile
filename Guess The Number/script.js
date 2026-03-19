let secretNumber;
let attempts;
let maxAttempts;
let previousGuesses = [];
let playerName = "";
let musicPlaying = false;

function saveName() {
    playerName = document.getElementById("playerName").value.trim();
    if (!playerName) {
        alert("Please enter your name!");
        return;
    }
    document.getElementById("nameSection").classList.add("hidden");
    document.getElementById("gameSection").classList.remove("hidden");
    document.getElementById("welcomeText").textContent = `Welcome ${playerName} 🎮`;
}

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    maxAttempts = parseInt(document.getElementById("difficulty").value);
    attempts = 0;
    previousGuesses = [];

    document.getElementById("gameArea").classList.remove("hidden");
    document.getElementById("restartBtn").classList.add("hidden");
    document.getElementById("result").textContent = "";
    document.getElementById("previous").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("info").textContent = "I picked a number between 1 and 100!";
    updateAttempts();
    document.getElementById("guessInput").focus();
}

function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("result").textContent = "Enter a valid number (1-100)!";
        return;
    }

    attempts++;
    previousGuesses.push(guess);

    let distance = Math.abs(guess - secretNumber);
    let hint = "";
    if (distance > 30) hint = "Very Cold ❄️";
    else if (distance >= 10) hint = "Cold 🧊";
    else if (distance >= 5) hint = "Hot 🔥";
    else hint = "Very Hot 🔥🔥";

    if (guess < secretNumber) hint += " ↑ Try Higher";
    else if (guess > secretNumber) hint += " ↓ Try Lower";

    document.getElementById("result").textContent = hint;
    document.getElementById("previous").textContent = "Previous guesses: " + previousGuesses.join(", ");
    updateAttempts();
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();

    if (guess === secretNumber) {
        document.getElementById("result").textContent = `🎉 Congrats ${playerName}! You guessed it in ${attempts} attempts!`;
        endGame();
    } else if (attempts >= maxAttempts) {
        document.getElementById("result").textContent = `❌ Game Over ${playerName}! The number was ${secretNumber}`;
        endGame();
    }
}

function updateAttempts() {
    document.getElementById("attemptsLeft").textContent = `Attempts left: ${maxAttempts - attempts}`;
}

function endGame() {
    document.getElementById("restartBtn").classList.remove("hidden");
    document.getElementById("guessInput").disabled = true;
}

function toggleMusic() {
    let music = document.getElementById("bgMusic");
    let btn = document.getElementById("musicBtn");
    if (!musicPlaying) {
        music.play();
        btn.textContent = "🔇 Music Off";
        musicPlaying = true;
    } else {
        music.pause();
        btn.textContent = "🔊 Music On";
        musicPlaying = false;
    }
}