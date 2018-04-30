// dance.style.right = "5px";
// dance.style.top = '70%';


// saw.style.right = "500px";
// saw.style.top = "10%";
//
//
//
// table.style.right ="650px";
// table.style.top = "20%";




//check whose turn it is, x and o,




let whoseTurn = "X";
const nextTurn = function () {
 if (whoseTurn == "X") {
   whoseTurn = "O";
 } else if (whoseTurn == "O") {
   whoseTurn = "X";
 }
};


const checkForWin = function () {

}


$(document).ready(function(){


//add event handler, append child

$(".square").click(function(){
  $(this).html(whoseTurn);
  nextTurn();
});







});
