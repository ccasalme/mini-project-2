let wins = 0, losses = 0, ties = 0;
let choiceCount = { R: 0, P: 0, S: 0 };

function getComputerChoice() {
  const choices = ["R", "P", "S"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound() {
  let userChoice = prompt("Enter R, P, or S:").toUpperCase();
  while (!["R", "P", "S"].includes(userChoice)) {
    userChoice = prompt("Invalid choice. Enter R, P, or S:").toUpperCase();
  }
  
  choiceCount[userChoice]++;
  const computerChoice = getComputerChoice();
  
  if (userChoice === computerChoice) {
    ties++;
    alert("It's a tie!");
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    alert("You win!");
  } else {
    losses++;
    alert("You lose!");
  }
}

function playGame() {
  let playAgain = true;
  while (playAgain) {
    playRound();
    playAgain = confirm("Do you want to play again?");
  }
  
  alert(
    `Final Stats:
    Wins: ${wins}
    Losses: ${losses}
    Ties: ${ties}
    Choices: R - ${choiceCount.R}, P - ${choiceCount.P}, S - ${choiceCount.S}`
  );
}

// Run playGame() only after the page has loaded
window.onload = function() {
  setTimeout(playGame, 10000);
};
