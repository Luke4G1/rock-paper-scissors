function computerPlay() {
    let n = Math.floor((Math.random() * 3))
    let choice
    if (n == 0) {
        choice = "rock"
    } else if (n == 1) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice
}


function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase()


    var result;

    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'rock') {
                result = `Draw`
            } else if (computerSelection == 'paper') {
                result = `You lose, ${computerSelection} beats ${playerSelection}`
            } else if (computerSelection == 'scissors') {
                result = `You win, ${playerSelection} beats ${computerSelection}`
            }
            break;
        case 'paper':
            if (computerSelection == 'paper') {
                result = `Draw`
            } else if (computerSelection == 'scissors') {
                result = `You lose, ${computerSelection} beats ${playerSelection}`
            } else if (computerSelection == 'rock') {
                result = `You win, ${playerSelection} beats ${computerSelection}`
            }
            break;
        case 'scissors':
            if (computerSelection == 'scissors') {
                result = `Draw`
            } else if (computerSelection == 'rock') {
                result = `You lose, ${computerSelection} beats ${playerSelection}`
            } else if (computerSelection == 'paper') {
                result = `You win, ${playerSelection} beats ${computerSelection}`
            }
            break;

        default:
            console.log('Choose a valid input')
    }

    return result

}

let i = 1

function game() {
    var playerChoice

    setTimeout(function play5Times() {
        playerChoice = prompt("Write your move")
        console.log(playRound(playerChoice, computerPlay()))
        i++
        if (i <= 5) {
            game()
        } else {
            i = 0;
            return
        }
    }, 3000)
}
game()