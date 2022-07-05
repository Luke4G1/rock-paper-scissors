function computerPlay() {
    let n = Math.floor((Math.random() * 3))

    return (
        (n == 0) ? 'Rock' : (n == 1) ? 'Paper' : 'Scissors'
    )

}


function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

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