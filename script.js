const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result");
const choices = document.querySelectorAll(".choice");

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    playRound(userChoice);
  });
});

function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  const winner = getWinner(userChoice, computerChoice);

  if (winner === "user") {
    userScore++;
    resultText.textContent = `You Win! ${capitalize(userChoice)} beats ${capitalize(computerChoice)}.`;
  } else if (winner === "computer") {
    computerScore++;
    resultText.textContent = `You Lose! ${capitalize(computerChoice)} beats ${capitalize(userChoice)}.`;
  } else {
    resultText.textContent = `It's a draw! You both chose ${capitalize(userChoice)}.`;
  }

  updateScore();
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getWinner(user, computer) {
  if (user === computer) return "draw";

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "user";
  } else {
    return "computer";
  }
}

function updateScore() {
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
