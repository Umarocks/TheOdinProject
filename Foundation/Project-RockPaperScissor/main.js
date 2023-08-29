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
                // console.log("The Game Ended in a Draw");
                // computerScore++;
                // playerScore++;
            }
            else if(playerSelectionIndex==1){ //paper
                // console.log("You Won! YAY");
                playerScore++;
            }
            else{ //scissor
                // console.log("Computer Won :(");
                computerScore++;
            }
        }
        else if(computerChoice==1){ //paper
            if(playerSelectionIndex==0){ //rock
                // console.log("Computer Won :(");
                computerScore++;
            }
            else if(playerSelectionIndex==1){ //paper
                // console.log("The Game Ended in a Draw");
                // computerScore++;
                // playerScore++;
            }
            else{ //scissor
                // console.log("You Won! YAY");
                playerScore++;
            }
        }
        else if(computerChoice==2){ //scissor
            if(playerSelectionIndex==0){ //rock
                // console.log("You Won! YAY");
                playerScore++;
            }
            else if(playerSelectionIndex==1){ //paper
                // console.log("Computer Won :(");
                computerScore++;
            }
            else{ //scissor
                // console.log("The Game Ended in a Draw");
                // computerScore++;
                // playerScore++;
            }
        }
}

function playRound(){
    Result(getComputerChoice(),getPlayerChoice());
    console.log("Score:computer-"+computerScore +" player-" + playerScore);
}

function game(){
    for(i=0;i<5;i++){
        playRound();
    }
    if(computerScore>playerScore){
        console.log("Computer Won! Better Luck Next Time");
    }    
    else{
        console.log("You Won! YAY!");
    }
    console.log("Game End")
}



const stringArray = ["rock","paper","scissor"]
let computerScore=0;
let playerScore=0;
game();

