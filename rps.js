const choices = document.querySelectorAll(".choice");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const newGameBtn = document.querySelector("#new-btn");

let userScore = 0;
let compScore = 0;
let gameOver = false;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (gameOver) return;

    const userChoice = choice.dataset.choice;
    const options = ["rock", "paper", "scissors"];
    const compChoice = options[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === compChoice) {
      result = "It's a Draw!";
    } else if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      result = "You Win!";
      userScore++;
    } else {
      result = "Computer Wins!";
      compScore++;
    }

    document.getElementById("user-score").innerText = userScore;
    document.getElementById("comp-score").innerText = compScore;

    msg.innerText = `You chose ${userChoice}, computer chose ${compChoice}. ${result}`;
    msgContainer.classList.remove("hide");
    gameOver = true;
  });
});

newGameBtn.addEventListener("click", () => {
  msgContainer.classList.add("hide");
  gameOver = false;
});
