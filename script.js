const board = document.getElementById("board");
const cells = [];
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");
let currentPlayer = "X";
let isGameActive = true;
let moves = 0;

// Create the game board cells
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => handleCellClick(cell));
  cells.push(cell);
  board.appendChild(cell);
}

// Handle a cell click
function handleCellClick(cell) {
  if (!isGameActive || cell.textContent !== "") return;

  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer);

  moves++;

  if (checkWin() || moves === 9) {
    endGame();
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

// Check for a win
function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      cells[a].classList.add("win");
      cells[b].classList.add("win");
      cells[c].classList.add("win");
      message.textContent = `${currentPlayer} wins!`;
      return true;
    }
  }

  return false;
}

// End the game
function endGame() {
  isGameActive = false;
  resetButton.style.display = "block";
}

// Reset the game
resetButton.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("X", "O", "win");
  });

  currentPlayer = "X";
  isGameActive = true;
  moves = 0;
  message.textContent = "";
  resetButton.style.display = "none";
});
