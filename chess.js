const board = document.getElementById("board");
const newBtn = document.getElementById("new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.getElementById("msg");

// Chess pieces symbols
const pieces = {
  r: "♜",
  n: "♞",
  b: "♝",
  q: "♛",
  k: "♚",
  p: "♟",
  R: "♖",
  N: "♘",
  B: "♗",
  Q: "♕",
  K: "♔",
  P: "♙",
};

// Initial chessboard setup
let boardState = [
  ["r","n","b","q","k","b","n","r"],
  ["p","p","p","p","p","p","p","p"],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["P","P","P","P","P","P","P","P"],
  ["R","N","B","Q","K","B","N","R"]
];

// Render chessboard
function renderBoard() {
  board.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add((i + j) % 2 === 0 ? "white" : "black");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.innerText = pieces[boardState[i][j]] || "";
      board.appendChild(cell);
    }
  }
}

renderBoard();

// Reset game
newBtn.addEventListener("click", () => {
  boardState = [
    ["r","n","b","q","k","b","n","r"],
    ["p","p","p","p","p","p","p","p"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["P","P","P","P","P","P","P","P"],
    ["R","N","B","Q","K","B","N","R"]
  ];
  renderBoard();
  msgContainer.classList.add("hide");
});
