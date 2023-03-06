// Starting from what we worked with in our HTML

let playerText = document.getElementById("playerText")
let resetBtn = document.getElementById("resetBtn")

let boxes = Array.from(document.getElementsByClassName("box"))

// console.log(boxes)

// creating players
// creating at the start of the game who is playing
const player1 = "O"
const player2 = "X"
let currentPlayer = player1

//creating so one player can't steal a spot the other player has already chosen
let squares = Array(9).fill(null)

// console.log(squares)

const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", boxClicked))
}

function boxClicked(e) {
    const id = e.target.id

    if(!squares[id]){
        squares[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(checkWinner() !==false) {
            playerText = `${currentPlayer} has won!`

            // console.log(winnerWinner)

        }

        currentPlayer = currentPlayer === player1 ? player2: player1
        
    }
    checkWinner()
}

// function checkWinner() {
//     console.log("Checking for winner...")
    let winningCombo = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7] ]
    // for (let index = 0; index < winningCombo.length; index++) {
    //     console.log(index, "winning combo 1st loop", winningCombo[index]);
    //     // second loop - Begin
    //     for (let index2 = 0; index2 < winningCombo[index].length;index2++) {
    //         console.log("winning combo 2nd loop", winningCombo[index][index2]);
    //         // comparison of combinations to squares that have been played

    //     }
    // }
// }
function checkWinner() {
    for (const condition of winningCombo) {
        let[a, b, c] = condition
        

        if(squares[a] && (squares[a] == squares[b] && squares[a] == squares[c])) {
            return [a,b,c]
        }
    }  
    return false
}


resetBtn.addEventListener("click", reset)

function reset() {
    squares.fill(null)

    boxes.forEach(box => {
        box.innerText = ""
    })

    playerText = "Tic Tac Toe"

    currentPlayer = player1
}

startGame()
