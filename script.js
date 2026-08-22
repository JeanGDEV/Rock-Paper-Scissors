// Buttons
const rockButton = document.querySelector(".rock-btn")
const paperButton = document.querySelector(".paper-btn")
const scissorsButton = document.querySelector(".scissors-btn")

rockButton.addEventListener("click",() => playRound("rock", getComputerChoice()))
paperButton.addEventListener("click",() => playRound("paper", getComputerChoice()))
scissorsButton.addEventListener("click",() => playRound("scissors", getComputerChoice()))

// Elements from container-results

const resultMessage = document.querySelector("#result")
const winnerMessage = document.querySelector("#winner")

const humanScore = document.querySelector("#human-score")
const computerScore = document.querySelector("#computer-score")
let computerValue = 0
let humanValue = 0

// Choices Section

function getComputerChoice() {
    // 1 = Rock. 2 = Paper. 3 = Scissors
    let choice = Math.floor((Math.random() * 3)) + 1
    console.log(choice)
    if (choice == 1) {
        return "rock"
    } else if (choice == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Handling rounds

function playRound(humanChoice, computerChoice) {
    
    // Rock Section
    if (humanChoice == "rock" && computerChoice == "rock") {
        resultMessage.textContent = "Draw!"

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerValue++
        computerScore.textContent = computerValue
        resultMessage.textContent = "You Lose!"

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanValue++
        humanScore.textContent = humanValue
        resultMessage.textContent = "You Win!"

    // Paper Section
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanValue++
        humanScore.textContent = humanValue
        resultMessage.textContent = "You Win!"

    } else if (humanChoice == "paper" && computerChoice == "paper") {
        resultMessage.textContent = "Draw!"

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerValue++
        computerScore.textContent = computerValue
        resultMessage.textContent = "You Lose!"

    // Scissors Section
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerValue++
        computerScore.textContent = computerValue
        resultMessage.textContent = "You Lose!"

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanValue++
        humanScore.textContent = humanValue
        resultMessage.textContent = "You Win!"

    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        resultMessage.textContent = "Draw!"
    }
    showWinner()

}

function showWinner() {
    if (humanValue === 5 || computerValue === 5) {
        rockButton.disabled = true
        paperButton.disabled = true
        scissorsButton.disabled = true

        if (humanValue === 5) {
            winnerMessage.textContent = "The Human Wins!"
        } else {
            winnerMessage.textContent = "The Computer Wins!"
        }
    }
}