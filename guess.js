const guessBtn = document.getElementById("guess-btn");
const userInput = document.getElementById("user-guess");
const feedback = document.getElementById("feedback");
const attemptsSpan = document.getElementById("attempts");
const msgContainer = document.querySelector(".msg-container");
const msg = document.getElementById("msg");
const newBtn = document.getElementById("new-btn");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessBtn.addEventListener("click", () => {
  const userGuess = Number(userInput.value);
  attempts++;
  attemptsSpan.innerText = attempts;

  if (userGuess === randomNumber) {
    feedback.innerText = `🎉 Correct! The number was ${randomNumber}.`;
    msg.innerText = "You won!";
    msgContainer.classList.remove("hide");
  } else if (userGuess < randomNumber) {
    feedback.innerText = "📈 Too low! Try again.";
  } else if (userGuess > randomNumber) {
    feedback.innerText = "📉 Too high! Try again.";
  }

  userInput.value = "";
});

newBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsSpan.innerText = 0;
  feedback.innerText = "";
  msgContainer.classList.add("hide");
});
