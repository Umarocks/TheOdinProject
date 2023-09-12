function getComputerChoice() {
  const max = 3;
  const computerChoice = Math.floor(Math.random() * max);
  console.log("Computer Selected " + stringArray[computerChoice]);
  return computerChoice;
}

function getPlayerChoice() {
  // let playerSelection = prompt("Please select any number from 1:rock 2:paper 3:scissor");
  playerSelection = playerSelection.toLowerCase();

  const playerSelectionIndex = stringArray.indexOf(playerSelection);

  console.log("Player Selected " + stringArray[playerSelectionIndex]);
  return playerSelectionIndex;
}

function Result(computerChoice, playerSelectionIndex) {
  if (computerChoice == 0) {
    //rock
    if (playerSelectionIndex == 0) {
      //rock
      // console.log("The Game Ended in a Draw");
      // computerScore++;
      // playerScore++;
    } else if (playerSelectionIndex == 1) {
      //paper

      playerScore++;
    } else {
      //scissor

      computerScore++;
    }
  } else if (computerChoice == 1) {
    //paper
    if (playerSelectionIndex == 0) {
      //rock

      computerScore++;
    } else if (playerSelectionIndex == 1) {
      //paper
      // console.log("The Game Ended in a Draw");
      // computerScore++;
      // playerScore++;
    } else {
      //scissor

      playerScore++;
    }
  } else if (computerChoice == 2) {
    //scissor
    if (playerSelectionIndex == 0) {
      //rock

      playerScore++;
    } else if (playerSelectionIndex == 1) {
      //paper

      computerScore++;
    } else {
      //scissor
      // console.log("The Game Ended in a Draw");
      // computerScore++;
      // playerScore++;
    }
  }
}

function playRound() {
  Result(getComputerChoice(), getPlayerChoice());
  console.log("Score:computer-" + computerScore + " player-" + playerScore);
}

function game() {
  for (i = 0; i < 5; i++) {
    playRound();
  }
  if (computerScore > playerScore) {
    console.log("Computer Won! Better Luck Next Time");
  } else {
    console.log("You Won! YAY!");
  }
  console.log("Game End");
}

document.addEventListener("DOMContentLoaded", function () {
  var rockClick = document.querySelector(".playerSide .rock");

  rockClick.addEventListener("click", function () {
    alert("rock clicked");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var paperClick = document.querySelector(".playerSide .paper");

  paperClick.addEventListener("click", function () {
    alert("paper clicked");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var scissorClick = document.querySelector(".playerSide .scissor");

  scissorClick.addEventListener("click", function () {
    alert("scissor clicked");
  });
});

const stringArray = ["rock", "paper", "scissor"];
let computerScore = 0;
let playerScore = 0;
game();
