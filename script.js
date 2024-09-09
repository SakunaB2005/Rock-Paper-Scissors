const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("displayResult");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoices){

    const computerChoices = choices[Math.floor(Math.random() * 3)]; // 0, 1, 2
    let result = "";

    if(playerChoices === computerChoices){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoices){
            case "rock" :
                result = (computerChoices === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "paper" :
                result = (computerChoices === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "scissors" :
                result = (computerChoices === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER : ${playerChoices}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoices}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "yellowText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
            break;

        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
            break;

        case "IT'S A TIE!":
            resultDisplay.classList.add("yellowText");
            break;
   
    }
}