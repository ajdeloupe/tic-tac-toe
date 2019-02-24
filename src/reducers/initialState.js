export  const initialState = {
    squares: {
        topLeft: '',
        topCenter: '',
        topRight: '',
        middleLeft: '',
        middleCenter: '',
        middleRight: '',
        bottomLeft: '',
        bottomCenter: '',
        bottomRight: '',
    },
    status: {
        gameOver: false,
        winner: false,
        winningSquares: undefined
    },
    turn: "X",
    turnCount: 0
}