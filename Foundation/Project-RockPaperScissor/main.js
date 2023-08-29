function getComputerChoice(){
    const max = 3;
    const computerChoice = Math.floor(Math.random() * max);
    console.log("Computer Selected " + stringArray[computerChoice]);
    return(stringArray[computerChoice]);
}

function getPlayerChoice(){
    const playerSelection = prompt("Please select any number from 1:rock 2:paper 3:scissor");
    if (playerSelection > 3) {
        throw new Error('Value should not be greater than 3');
      }
    console.log("Player Selected " + stringArray[playerSelection%3])
    return(playerSelection)
}

function Result(computerChoice,playerSelection){
    
}


const stringArray = ["rock","paper","scissor"]
Result(getComputerChoice(),getPlayerChoice())

