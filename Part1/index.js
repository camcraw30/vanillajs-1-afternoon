var board = []

function play(clickedId) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);
        if (playerSpan.innerText === "X"){
            playerSpan.innerText = "O";
            clickedElement.innerText = "X";
            board[clickedId] =  "X";
        } else {
            playerSpan.innerText = "X";
            clickedElement.innerText = "O";
            board[clickedId] =  "O";
        }
    console.log(board);
    }

var topLeft = board[0];
var topCenter = board[1];
var topRight = board[2];
var middleLeft = board[3];
var middleCenter = board[4];
var middleRight = board[5];
var bottomLeft = board[6];
var bottomMiddle = board[7];
var bottomRight = board[8];

if (topRight !== undefined && topRight === topCenter && topRight === topRight){
    alert(`${topLeft} is the winner`);
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
    alert(`${middleLeft} is the winner`);
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
    alert(`${bottomLeft} is the winner`);
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    alert(`${topLeft} is the winner`);
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
    alert(`${topCenter} is the winner`);
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    alert(`${topRight} is the winner`);
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
    alert(`${topLeft} is the winner`);
}
if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight){
    alert(`${bottomLeft} is the winner`);
}
let boardFull = true;
for (let i=0; i <= 8; i++) {
    if (board[i] === undefined){
        boardFull = false;
    }
    if (boardFull === true){
    alert("Cat's game, there is no winner");
    }
}