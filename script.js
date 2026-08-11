let humanScore = 0
let computerScore = 0


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

function getHumanChoice() {
    let promptChoice = prompt("What's going to be your next move? Enter: Rock, Paper, or Scissors").toLowerCase().trim()
    return promptChoice
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

    // 5 Rounds
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    // Handling who's gonna be the winner
    if (humanScore > computerScore) {
        console.log("The human wins!")
    } else if (computerScore > humanScore) {
        console.log("The machine wins!")
    } else {
        console.log("There's no winner. Draw!")
    }

    console.log(`Human: ${humanScore}`)
    console.log(`Machine: ${computerScore}`)
}

playGame()

