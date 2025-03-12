function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length); // Random index for the choices
  return choices[randomIndex];
}



function getHumanChoice() {
  let choice = prompt("Is it rock, paper or scissors?");

  // Convert the choice to lowercase to make it case-insensitive
  choice = choice.toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    return "invalid";
  }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "invalid") {
    return "Invalid choice, please try again.";
  }

  if (humanChoice === computerChoice) {
    return "It's a draw!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}`;
  }
}

function game() {
  let roundNumber = 1;

  while (roundNumber <= 5) {
    console.log(`\nRound ${roundNumber}`);

    const humanSelection = getHumanChoice();
  
  if (humanSelection === "invalid") {
    console.log("Invalid choice.");
    continue;
  }

  const computerSelection = getComputerChoice();
  const roundResult = playRound(humanSelection, computerSelection);
  console.log(roundResult);
  console.log(
    `Current score: You - ${humanScore}, Computer - ${computerScore}`
  );

  roundNumber++;
}

// Declare the winner at the end of 5 rounds
if (humanScore > computerScore) {
  console.log(
    `\nYou win the game! Final score: You - ${humanScore}, Computer - ${computerScore}`
  );
} else if (humanScore < computerScore) {
  console.log(
    `\nYou lose the game. Final score: You - ${humanScore}, Computer - ${computerScore}`
  );
} else {
  console.log(
    `\nIt's a tie game! Final score: You - ${humanScore}, Computer - ${computerScore}`
  );
}
}
game();
