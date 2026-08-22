let humanScore = 0
let computerScore = 0

// Buttons
const rockButton = document.querySelector(".rock-btn")
const paperButton = document.querySelector(".paper-btn")
const scissorsButton = document.querySelector(".scissors-btn")

rockButton.addEventListener("click",() => playRound("rock", getComputerChoice()))
paperButton.addEventListener("click",() => playRound("paper", getComputerChoice()))
scissorsButton.addEventListener("click",() => playRound("scissors", getComputerChoice()))


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
        console.log("Draw!")

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++
        console.log("You Lose!")

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++
        console.log("You Win!")

    // Paper Section
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++
        console.log("You Win!")

    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Draw!")

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++
        console.log("You Lose!")

    // Scissors Section
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++
        console.log("You Lose!")

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++
        console.log("You Win!")

    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("Draw!")
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



