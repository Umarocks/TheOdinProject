function getComputerChoice(){
    const max = 3;
    const computerChoice = Math.floor(Math.random() * max);
    console.log("Computer Selected " + stringArray[computerChoice]);
    return(computerChoice);
}

function getPlayerChoice(){
    let playerSelection = prompt("Please select any number from 1:rock 2:paper 3:scissor");
    playerSelection=playerSelection.toLowerCase();
    // console.log(playerSelection)
    const playerSelectionIndex = stringArray.indexOf(playerSelection);
    // console.log(playerSelectionIndex);
    console.log("Player Selected " + stringArray[playerSelectionIndex])
    return(playerSelectionIndex)
}

function Result(computerChoice,playerSelectionIndex){
        if(computerChoice==0 ){//rock 
            if(playerSelectionIndex==0 ){//rock
                console.log("The Game Ended in a Draw");
            }
            else if(playerSelectionIndex==1){ //paper
                console.log("You Won! YAY");
            }
            else{ //scissor
                console.log("Computer Won :(");
            }
        }
        else if(computerChoice==1){ //paper
            if(playerSelectionIndex==0){ //rock
                console.log("Computer Won :(");
            }
            else if(playerSelectionIndex==1){ //paper
                console.log("The Game Ended in a Draw");
            }
            else{ //scissor
                console.log("You Won! YAY");
            }
        }
        else if(computerChoice==2){ //scissor
            if(playerSelectionIndex==0){ //rock
                console.log("You Won! YAY");
            }
            else if(playerSelectionIndex==1){ //paper
                console.log("Computer Won :(");
            }
            else{ //scissor
                console.log("The Game Ended in a Draw");
            }
        }
}

function playRound(){
    Result(getComputerChoice(),getPlayerChoice());
    console.log("Game End")
}
const stringArray = ["rock","paper","scissor"]


