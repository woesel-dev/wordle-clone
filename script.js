const WORDS = [
    "crane", "slate", "trace", "crate", "stone",
    "share", "shine", "those", "thing", "think",
    "plant", "place", "plane", "plate", "plain",
    "brain", "bread", "break", "brave", "brand",
    "light", "sight", "night", "right", "might",
    "house", "mouse", "found", "sound", "round"
];

const WORD_LENGTH = 5;
const MAX_GUESSES = 6;
const KEYBOARD_ROWS = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"]
];

// Pick a random word from the list as the secret target
let targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
let currentRow = 0;
let currentTile = 0;
let gameOver = false;
let letterStatus = {};

const board = document.getElementById("board");
const message = document.getElementById("message");
const playAgainBtn = document.getElementById("play-again");
const keyboardEl = document.getElementById("keyboard");

function createBoard(){
    for (let i = 0; i < MAX_GUESSES * WORD_LENGTH; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.id = "tile-" + i;
        board.appendChild(tile);
    }
}

function createKeyboard(){
    KEYBOARD_ROWS.forEach(row => {
        const rowEl = document.createElement("div");
        rowEl.classList.add("keyboard-row");
        row.forEach(key => {
            const keyEl = document.createElement("button");
            keyEl.classList.add("key");
            keyEl.dataset.key = key;
            if (key === "Enter" || key === "Backspace"){
                keyEl.classList.add("wide");
                keyEl.textContent = key === "Backspace" ? "Del" : "Enter";
            } else {
                keyEl.textContent = key;
            }
            keyEl.addEventListener("click", () => {
                handleInput(key);
            });
            rowEl.appendChild(keyEl);
        });
        keyboardEl.appendChild(rowEl);
    });
}

function getCurrentRowTiles(){
    const startIndex = currentRow * WORD_LENGTH;
    const tiles = [];
    for (let i = startIndex; i < startIndex + WORD_LENGTH; i++) {
        tiles.push(document.getElementById("tile-" + i));
    }
    return tiles;
}

function handleInput(key) {
    if (gameOver) return;

    if (key === "Enter") {
        if (currentTile === WORD_LENGTH) {
            checkGuess();
        }
        return;
    }

    if (key === "Backspace") {
        if (currentTile > 0) {
            currentTile--;
            const tiles = getCurrentRowTiles();
            tiles[currentTile].textContent = "";
            tiles[currentTile].classList.remove("filled");
        }
        return;
    }

    if (key.length === 1 && key >= "a" && key <= "z") {
        if (currentTile < WORD_LENGTH) {
            const tiles = getCurrentRowTiles();
            tiles[currentTile].textContent = key;
            tiles[currentTile].classList.add("filled");
            currentTile++;
        }
    }
}

function handleKeyPress(event) {
    handleInput(event.key);
}

function checkGuess(){
    // Get the current row's tiles and build the guess string
    const tiles = getCurrentRowTiles();
    const guess = tiles.map(tile => tile.textContent).join("");

    // Create arrays to track which letters have been matched
    const result = [];
    const targetLetters = targetWord.split("");
    const guessLetters = guess.split("");

    // First pass: mark exact matches (correct position)
    for (let i = 0; i < WORD_LENGTH; i++){
        if (guessLetters[i] === targetLetters[i]) {
            result[i] = "correct";
            targetLetters[i] = null;
            guessLetters[i] = null;
        }
    }

    // Second pass: mark present or absent letters
    for (let i = 0; i < WORD_LENGTH; i++){
        if (guessLetters[i] === null) continue;
        const index = targetLetters.indexOf(guessLetters[i]);
        if (index !== -1){
            result[i] = "present";
            targetLetters[index] = null;
        } else {
            result[i] = "absent";
        }
    }

    revealRow(tiles, result, guess);
}

function updateKeyboard(guess, result){
    const priority = {correct:3, present:2, absent:1};
    for(let i=0; i<guess.length; i++){
        const letter = guess[i];
        const status = result[i];
        const currentPriority = priority[letterStatus[letter]] || 0;
        if (priority[status] > currentPriority){
            letterStatus[letter] = status;
        }
    }

    document.querySelectorAll(".key").forEach(keyEl => {
        const key = keyEl.dataset.key;
        if (letterStatus[key]){
            keyEl.classList.remove("correct", "present", "absent");
            keyEl.classList.add(letterStatus[key]);
        }
    });
}

function revealRow(tiles, result, guess){
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add("reveal", result[index]);
        }, index * 300);
    });

    setTimeout(() => {
        updateKeyboard(guess, result);
        // Check for win: the guess matches the target word
        if (guess === targetWord){
            message.textContent = "You won!";
            gameOver = true;
            playAgainBtn.classList.remove("hidden");
        // Check for loss: all 6 attempts used up
        } else if (currentRow === MAX_GUESSES - 1){
            message.textContent = "The word was: " + targetWord.toUpperCase();
            gameOver = true;
            playAgainBtn.classList.remove("hidden");
        }
        currentRow++;
        currentTile = 0;
    }, WORD_LENGTH * 300);
}

// Reload the page to start a fresh game
playAgainBtn.addEventListener("click", () => {
    window.location.reload();
});

createBoard();
createKeyboard();

document.addEventListener("keydown", handleKeyPress);