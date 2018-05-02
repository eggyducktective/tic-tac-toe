


//check whose turn it is, X or O,

let whoseTurn = "X";
const nextTurn = function () {
 if (whoseTurn == "X") {
   whoseTurn = "O";
 } else {
   whoseTurn = "X";
 }
};

let moveCount = 0;
let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Check for Winning condition:
// Horizontal: [0, 1, 2] [3, 4, 5] [6, 7, 8]
// Vertical: [0, 3, 6] [1, 4, 7] [2, 5, 8]
// Diagonal: [0, 4, 8] [2, 4, 6]

const checkForWin = function () {
 if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
   return gameBoard[2];
 } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
   return gameBoard[5];
 } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
   return gameBoard[8];
 } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
   return gameBoard[6];
 } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
   return gameBoard[7];
 } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
   return gameBoard[8];
 } else if (gameBoard[0] === gameBoard[4] && gameBoard[4]=== gameBoard[8]) {
   return gameBoard[8];
 } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
   return gameBoard[6];
 } else {
   return false;
 }
}; //end of function


let resetGame;
let tempSquares = {};
$(document).ready(function(){




//add event handler for button
const $button = $("#buttonPosition");
$button.on("click", function() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  moveCount = 0;
  whoseTurn = "X";
  for (let i = 0; i < gameBoard.length; i++) {
    tempSquares[`$square${i}`].html("");
  }
});


  for (let i = 0; i < gameBoard.length; i++) {
    tempSquares[`$square${i}`] = $(`#${i}`);
  }





//add event handler
$(".square").click(function( event ){

  // check if square already occupied:
  // if square is already taken, return from this function early
  const boardIndex = $(this).attr('id');
  if (gameBoard[boardIndex].length > 0) {
    return; //make sure players can't play over a move
  }

  // save the current move into the gameBoard array
  gameBoard[boardIndex] = whoseTurn;
  $(this).html(whoseTurn);
  moveCount++;


  const winner = checkForWin();
  if( winner !== false && winner !== "") {
    alert(`Player ${winner} wins`);
    return;
  } else if (moveCount === 9 ){
    alert ("No one wins");
  }
  nextTurn();


}); // end of event handler

}); // end jQuery





//reset function
