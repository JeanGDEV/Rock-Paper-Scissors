let humanScore = 0
let computerScore = 0

// Buttons
const rockButton = document.querySelector("#rock-btn")
const paperButton = document.querySelector("#paper-btn")
const scissorsButton = document.querySelector("#scissors-btn")

rockButton.addEventListener("click", playRound("rock", getComputerChoice()))
paperButton.addEventListener("click", playRound("paper", getComputerChoice()))
scissorsButton.addEventListener("click", playRound("scissors", getComputerChoice()))


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
        alert("Draw!")

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++
        alert("You Lose!")

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++
        alert("You Win!")

    // Paper Section
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++
        alert("You Win!")

    } else if (humanChoice == "paper" && computerChoice == "paper") {
        alert("Draw!")

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++
        alert("You Lose!")

    // Scissors Section
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++
        alert("You Lose!")

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++
        alert("You Win!")

    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        alert("Draw!")
    }

}



function playGame() {

    // Handling who's gonna be the winner
    if (humanScore > computerScore) {
        alert("The human wins!")
    } else if (computerScore > humanScore) {
        alert("The machine wins!")
    } else {
        alert("There's no winner. Draw!")
    }

    alert(`Result:
        Human: ${humanScore}
        Machine: ${computerScore}`)
}

playGame()

