document.addEventListener("DOMContentLoaded", function () {

  const stringArray = ["rock", "paper", "scissor"];
  let computerScore = 0;
  let playerScore = 0;
  
  function getComputerChoice() {
    const max = 3;
    const computerChoice = Math.floor(Math.random() * max);
    console.log("Computer Selected " + stringArray[computerChoice]);
    return computerChoice;
  }
  
  //  function getPlayerChoice() {
  //   // let playerSelection = prompt("Please select any number from 1:rock 2:paper 3:scissor");
  //   let playerSelection;
  //   document.addEventListener("click", function () {
  //     var rockClick = document.querySelector(".playerSide .rock");
  //     var paperClick = document.querySelector(".playerSide .paper");
  //     var scissorClick = document.querySelector(".playerSide .scissor");
  //     rockClick.addEventListener("click", function () {
  //       playerSelection = "rock";
  //     });
  //     paperClick.addEventListener("click", function () {
  //       playerSelection = "paper";
  //     });
  //     scissorClick.addEventListener("click", function () {
  //       playerSelection = "scissor";
  //     });
      
  //     const playerSelectionIndex = stringArray.indexOf(playerSelection);
  //     console.log("Player Selected " + stringArray[playerSelectionIndex]);
  //     return playerSelectionIndex;
  //   });
  // }
  function getPlayerChoice() {
    return new Promise((resolve) => {
      var rockClick = document.querySelector(".playerSide .rock");
      var paperClick = document.querySelector(".playerSide .paper");
      var scissorClick = document.querySelector(".playerSide .scissor");
  
      rockClick.addEventListener("click", () => {
        resolve("rock");
      });
  
      paperClick.addEventListener("click", () => {
        resolve("paper");
      });
  
      scissorClick.addEventListener("click", () => {
        resolve("scissor");
      });
    });
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
      }
    }
  }
  
  async function playRound() {
    let playerChoice = await getPlayerChoice();
    const playerSelectionIndex = stringArray.indexOf(playerChoice);
    let computerChoice = getComputerChoice();
    Result(computerChoice, playerSelectionIndex);
    console.log("Score:computer-" + computerScore + " player-" + playerScore);
  }
  
  async function game() {
    for (i = 0; i < 5; i++) {
      await playRound();
    }
    if (computerScore > playerScore) {
      console.log("Computer Won! Better Luck Next Time");
    } else {
      console.log("You Won! YAY!");
    }
    console.log("Game End");
  }
  
  game();
  
});
