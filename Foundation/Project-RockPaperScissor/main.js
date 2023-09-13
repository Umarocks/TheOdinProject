document.addEventListener("DOMContentLoaded", function () {
  const stringArray = ["rock", "paper", "scissor"];
  let computerScore = 0;
  let playerScore = 0;

  function getComputerChoice() {
    const computerRockSelection = document.querySelector(".computerSide .rock");
    computerRockSelection.style.backgroundColor = "aliceblue";

    const computerPaperSelection = document.querySelector(
      ".computerSide .paper"
    );
    computerPaperSelection.style.backgroundColor = "aliceblue";

    const computerScissorSelection = document.querySelector(
      ".computerSide .scissor"
    );
    computerScissorSelection.style.backgroundColor = "aliceblue";

    const max = 3;
    const computerChoice = Math.floor(Math.random() * max);
    console.log("Computer Selected " + stringArray[computerChoice]);
    const computerChoiceindex = ".computerSide ." + stringArray[computerChoice];
    const computerSelectionColor = document.querySelector(computerChoiceindex);
    computerSelectionColor.style.backgroundColor = "Blue";

    return computerChoice;
  }

  function playerSideColor(playerSelectionIndex) {
    const playerRockSelection = document.querySelector(".playerSide .rock");
    playerRockSelection.style.backgroundColor = "aliceblue";
    const playerPaperSelection = document.querySelector(".playerSide .paper");
    playerPaperSelection.style.backgroundColor = "aliceblue";
    const playerScissorSelection = document.querySelector(
      ".playerSide .scissor"
    );
    playerScissorSelection.style.backgroundColor = "aliceblue";

    if (playerSelectionIndex == 0) {
      const playerSelectionToColor =
        document.querySelector(".playerSide .rock");
      playerSelectionToColor.style.backgroundColor = "Red";
    } else if (playerSelectionIndex == 1) {
      const playerSelectionToColor =
        document.querySelector(".playerSide .paper");
      playerSelectionToColor.style.backgroundColor = "Red";
    } else if (playerSelectionIndex == 2) {
      const playerSelectionToColor = document.querySelector(
        ".playerSide .scissor"
      );
      playerSelectionToColor.style.backgroundColor = "Red";
    }
  }
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
    playerSideColor(playerSelectionIndex);
    Result(computerChoice, playerSelectionIndex);
    const playerScoreDOM = document.querySelector("#playerScore");
    playerScoreDOM.textContent = "Score:" + playerScore;
    const computerScoreDOM = document.querySelector("#computerScore");
    computerScoreDOM.textContent = "Score:" + computerScore;

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
