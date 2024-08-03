function getComputerChoice(){
let computerChoice = "";
let computerChoiceNumber = Math.floor(Math.random() * 3) + 1;

if(computerChoiceNumber === 1){
    return computerChoice = "Rock";
}
else if(computerChoiceNumber === 2){
    return computerChoice = "Paper"
}
else{
    return computerChoice = "Scissors"
}
}

function getHumanChoice(){
let humanChoice = prompt("What's your choice? (only valid values: Rock, Paper or Scissors): ");
return humanChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        function playRound(humanChoice, computerChoice){
            if(humanChoice === "Rock" && computerChoice === "Paper"){
                console.log("You lose! Paper beats Rock!");
                computerScore++;
            }
            else if(humanChoice === "Paper" && computerChoice === "Scissors"){
                console.log("You lose! Scissors beats Paper!");
                computerScore++;
            }
            else if(humanChoice === "Scissors" && computerChoice === "Rock"){
                console.log("You lose! Rock beats Scissors!");
                computerScore++;
            }
            else if(computerChoice === "Rock" && humanChoice === "Paper"){
                console.log("You win! Paper beats Rock!");
                humanScore++;
            }
            else if(computerChoice === "Paper" && humanChoice === "Scissors"){
                console.log("You win! Scissors beats Paper!");
                humanScore++;
            }
            else if(computerChoice === "Scissors" && humanChoice === "Rock"){
                console.log("You win! Rock beats Scissors!");
                humanScore++;
            }
            else{
                console.log("Draw!")
            }
        }
    }

    if(humanScore > computerScore){
        alert("Human Wins!")
    }
    else if(humanScore === computerScore){
        alert("Game Draw!")
    }
    else{
        alert("Computer Wins!")
    }
}

playGame();