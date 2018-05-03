//check whose turn it is, X or O,

let whoseTurn = "X";
let AiTurn = "O";
let AiMode = true;


const nextTurn = function() {
  if (whoseTurn == "X") {
    whoseTurn = "O";
  } else {
    whoseTurn = "X";
  }
};


let scoreX = 0;
let scoreO = 0;


let gameOver = false;
let moveCount = 0;
let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Check for Winning condition:
// Horizontal: [0, 1, 2] [3, 4, 5] [6, 7, 8]
// Vertical: [0, 3, 6] [1, 4, 7] [2, 5, 8]
// Diagonal: [0, 4, 8] [2, 4, 6]

const checkForWin = function() {
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[2]) {
    return gameBoard[2];

  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[5]) {
    return gameBoard[5];

  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[8]) {
    return gameBoard[8];

  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[6]) {
    return gameBoard[6];

  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[7]) {
    return gameBoard[7];

  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[8]) {
    return gameBoard[8];

  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[8]) {
    return gameBoard[8];

  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[6]) {
    return gameBoard[6];

  } else {
    return false;
  }
}; //end of function


// let resetGame;
let tempSquares = {};

const testMove = function (){
  return Math.floor(Math.random()*9)
}

const AiMove = function () {
  const squareID = testMove();

  if ( $("#" + squareID).html() == "&nbsp;" || $("#" + squareID).html() == "") {
    $("#" + squareID).click();
  } else {
    AiMove();
  }
};

$(document).ready(function() {

  //add event handler for button
  const $button = $("#buttonPosition");
  $button.on("click", function() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    moveCount = 0;
    gameOver = false;
    whoseTurn = "X";
    for (let i = 0; i < gameBoard.length; i++) {
      tempSquares[`$square${i}`].html(""); //reset the squares
    }
    $("#alert").hide(); // reset alert board
  });


  for (let i = 0; i < gameBoard.length; i++) {
    tempSquares[`$square${i}`] = $(`#${i}`);
  } // end of loop


  //add event handler
  $(".square").click(function(event) {

    // check if square already occupied:
    // if square is already taken, return from this function early
    const boardIndex = $(this).attr("id");

    if ( gameBoard[boardIndex].length > 0 || gameOver  ) {
      return; //make sure players can't play over a move
    }

    // save the current move into the gameBoard array
    gameBoard[boardIndex] = whoseTurn;
    $(this).html(whoseTurn);
    moveCount++;


    const winner = checkForWin();
    if (winner !== false && winner !== "") {
      // if (gameBoard[boardIndex]) === "X" {
      //   declareWinner("You win");
      // } else {
      //   declareWinner("Computer wins");
      // }
      const players = {
        "X": "You win",
        "O": "Evil AI wins"
      }
      declareWinner(`${players[winner]}!!! &#9996;`);

      if (gameBoard[boardIndex] === "X") {
        scoreX++;
        scoreO;
        $("#X").text(`Your score: ${scoreX}`);
        $("#O").text(`Evil AI's score: ${scoreO}`);
      } else {
        scoreO++;
        scoreX;
        $("#O").text(`Evil AI's score: ${scoreO}`);
        $("#X").text(`Your score: ${scoreX}`);
      }
      gameOver = true;
      return;

    } else if (moveCount === gameBoard.length) {
      declareWinner("No one wins... &#9785;");
    } // end of if

    nextTurn();
    if ( whoseTurn === AiTurn && AiMode === true ) {
        AiMove();
    }



    // AI Player move here: something like AIMove();
    // nextTurn();  // human player's turn again

  }); // end of event handler

  const declareWinner = function(winner) {
    $("#alert").css("display", "block");
    $("#text").html(winner);
  }; // end of function

}); // end jQuery



//math random for AI Mathfloor[mathrandom]
