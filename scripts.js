const getComputerChoice = () => {
    const arr = [
        "rock",
        "paper",
        "scissors"
    ];
    return arr[Math.floor(Math.random() * arr.length)]
};

const getHumanChoice = () => prompt("Rock, paper or scissors?");

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`);
        return 0;
    } else {
        console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`);
        return 1;
    }
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        const winner = playRound(humanSelection, computerSelection) 
        if (winner === 0) {
            humanScore++
        } else if (winner === 1) {
            computerScore++
        }
    }
    if (humanScore > computerScore) {
        alert("Game over! You win!")
    } else if (computerScore > humanScore) {
        alert("Game over! You lose!")
    } else {
        alert("Game over! It's a tie!")
    }
}

playGame();