const buttons = document.querySelectorAll("button");
const results = document.querySelector(".round-result");
const humanScoreSpan = document.querySelector(".human-score");
const computerScoreSpan = document.querySelector(".computer-score");
let humanScore = 0;
let computerScore = 0;
let gameCount = 1;

humanScoreSpan.textContent = humanScore;
computerScoreSpan.textContent = computerScore;

const getComputerChoice = () => {
    const arr = [
        "rock",
        "paper",
        "scissors"
    ];
    return arr[Math.floor(Math.random() * arr.length)]
};

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        results.textContent = "It's a tie!"
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        results.textContent = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`;
        humanScore++;

    } else {
        results.textContent = `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`;
        computerScore++;
    }
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.value, getComputerChoice())
        if (gameCount >= 5) {
            if (humanScore > computerScore) {
                results.textContent = "Game over! You win!"
            } else if (computerScore > humanScore) {
                results.textContent = "Game over! You lose!"
            } else {
                results.textContent = "Game over! It's a tie!"
            }
            gameCount = 1;
            humanScore = 0;
            computerScore = 0;
        } else {
            humanScore.textContent = humanScore;
            computerScore.textContent = computerScore;
            gameCount++
        }
    })
})