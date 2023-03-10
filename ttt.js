// Starting from what we worked with in our HTML

let playerText = document.getElementById("playerText")
let resetBtn = document.getElementById("resetBtn")

// const board = ["", "", "", "", "", "", "", "", ""]

let boxes = Array.from(document.getElementsByClassName("box"))

const turnDisplay = document.getElementById('turn');

// console.log(boxes)

// creating players
// creating at the start of the game who is playing
const player1 = "X"
const player2 = "O"
let currentPlayer = player1

//creating so one player can't steal a spot the other player has already chosen
let squares = Array(9).fill(null)

// console.log(squares)

const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", boxClicked))
    
}

//clicking on the boxes and defining each player
// calling players out and showing who has been playing
function boxClicked(e) {
    const id = e.target.id

    if(!squares[id]){
        squares[id] = currentPlayer
        e.target.innerText = currentPlayer
       
        // this should be showing whos turn is playing - player 1s turn player 2s turn
        // will not implement for some reason, I tried redefining turnDisplay multiple times
        // tried doing it different ways but this is what I thought looked best but I can't seem to get it to run
        

        // I'm not sure if this is in the correct spot or not.... I'm guessing it needs to be somewhere different
        // but I can't figure out where, I tried it within function checkWinner as well and wouldn't run...

        if(checkWinner(id) !==false) {
            playerText.textContent = `${currentPlayer} has won!`
            // console.log(winnerWinner)
            // some kind of loop that shows the ids of game cells then removes every one of them 
        }
        currentPlayer = currentPlayer === player1 ? player2: player1
        turnDisplay.textContent = `${currentPlayer}'s turn`;
       
    }
}

function checkWinner(squareId) {
    console.log("Checking for winner...", squareId)
    let squareClick = document.getElementById(squareId)
    console.log(squareClick)
    squareClick.removeEventListener("click", () => console.log("removed click"))
    // so this whole thing  along with the checkWinner should be bringing up who is winning
    // I have reorganized it multiple times and tried doing some different methods and still can't get it to run
    // the for loops should be looping through and checking each combination each time you are clicking squares
    let winningCombo = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7] ]
    
    for (let index = 0; index < winningCombo.length; index++) {
        // console.log(index, "winning combo 1st loop", winningCombo[index]);
        // second loop - Begin
        // for (let index2 = 0; index2 < winningCombo[index].length;index2++) {
        //     console.log("winning combo 2nd loop", winningCombo[index][index2]);
        //     // comparison of combinations to squares that have been played

        // } 
        let firstIndex = winningCombo[index][0]
        let secondIndex = winningCombo[index][1]
        let thirdIndex = winningCombo[index][2]

        // console.log("checking")
        // console.log(squares[firstIndex])
        // console.log(squares[secondIndex])
        // console.log(squares[thirdIndex])

        if(squares[firstIndex] !== null && squares[firstIndex] === squares[secondIndex] && squares[secondIndex] === squares[thirdIndex]) {
            // console.log(squares[firstIndex] + "has won") 
            return true

        } 
    } 
    return false
}

// this then is showing the conditions of getting the winning combos
// function checkWinner() {
//     for (const condition of winningCombo) {
//         let[a, b, c] = condition
        

//         if(squares[a] && (squares[a] == squares[b] && squares[a] == squares[c])) {
//             return [a,b,c]
//         }
//     }  
//     return false
// }

//reseting the buttons :)
//reset to player1 being able to start again
// resets board and deletes all info that was previously put in and such
resetBtn.addEventListener("click", reset)

function reset() {
    squares.fill(null)

    boxes.forEach(box => {
        box.innerText = ""
    })
    let turn = document.getElementById("turn").innerHTML=""

    playerText.textContent = "Tic Tac Toe"

    currentPlayer = player1
    startGame()
}

startGame()
