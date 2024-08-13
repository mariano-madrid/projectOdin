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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice){
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();

    let score = document.getElementById("score");

    if(humanSelection === "Rock" && computerSelection === "Paper"){
        computerScore++;
        score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
    }
    else if(humanSelection === "Paper" && computerSelection === "Scissors"){
        computerScore++;
        score.textContent = "Human Score: " + humanScore + "Computer Score:" + computerScore;
    }
    else if(humanSelection === "Scissors" && computerSelection === "Rock"){
        computerScore++;
        score.textContent = "Human Score: " + humanScore + "Computer Score:" + computerScore;
    }
    else if(computerSelection === "Rock" && humanSelection === "Paper"){
        humanScore++;
        score.textContent = "Human Score: " + humanScore + "Computer Score:" + computerScore;
    }
    else if(computerSelection === "Paper" && humanSelection === "Scissors"){
        humanScore++;
        score.textContent = "Human Score: " + humanScore + "Computer Score:" + computerScore;
    }
    else if(computerSelection === "Scissors" && humanSelection === "Rock"){
        humanScore++;
        score.textContent = "Human Score: " + humanScore + "Computer Score:" + computerScore;
    }
    else{
        score.textContent = "Human Score: " + humanScore + "Computer Score:" + computerScore;
    }

    if(humanScore === 5 || computerScore === 5){
        if(humanScore === 5){
            score.textContent = "Human Wins!";
        }
        if(computerScore === 5){
            score.textContent = "Computer Wins!"
        }
    }
}