function computerPlay() {
    let n = Math.floor((Math.random() * 3))

    return (
        (n == 0) ? 'Rock' : (n == 1) ? 'Paper' : 'Scissors'
    )

}


