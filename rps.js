const choices = document.querySelectorAll(".choice");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const newGameBtn = document.querySelector("#new-btn");

let userScore = 0;
let compScore = 0;


const resetRound = () => {
  msg.innerText = "New Game Started! Make your choice.";
  msgContainer.classList.remove("hide");

  
  setTimeout(() => {
    msgContainer.classList.add("hide");
  }, 2000);
};


const playRound = (userChoice) => {
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
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    playRound(userChoice);
  });
});


newGameBtn.addEventListener("click", resetRound);
