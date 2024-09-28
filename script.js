let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.getElementById(`cell-${index}`).textContent = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkResult() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            displayMessage(`Player ${board[a]} wins!`);
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        displayMessage("It's a draw!");
        gameActive = false;
    }
}

function displayMessage(message) {
    document.getElementById("message").textContent = message;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.getElementById("message").textContent = "";
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).textContent = "";
    }
}
