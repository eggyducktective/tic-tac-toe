# Tic Tac Toe Game

For our first solo project, we are building a simple Tic Tac Toe game using Javascript, jQuery, HTML and CSS.  

Playable from: http://www.annasworkshop.com/tic-tac-toe/

![alt text](https://github.com/eggyducktective/tic-tac-toe/blob/master/img/cat-git.jpg)

## Getting Started

You are able to fork this:

```
git clone git@github.com:eggyducktective/tic-tac-toe.git

```

## Prerequisites

You will need to install your favourite web browser to play this fun game.

## Running the tests

There are no tests unfortunately. But I hope you'll have an amazing time.

## How I created this

I did HTML/CSS first, created a game board and drafted out what I wanted the page to look like.

Once happy with the layout, I started to work on the game logic.
Tried to work out how to put Xs and Os on the board.
Since the 3x3 board has 9 slots, with different ID (0 to 8). I decided to create an array with 9 empty strings to store the moves.

The game needs to know whose turn it is, I created a global variable to store this. And a function to switch turn between X and O

Check for the winning combination based on the position of the the moves, and return the last move, to find out who wins or if it is a tie.

I found my first bug, as one could keep on playing over a move. To fix this, I needed to get the ID of the square, and store it into a variable.
Then check if that square is occupied, if not, a move can be made into that square.

Also need to store the move count into a variable and increment it till the end of the game (there shouldn’t be more than 9 moves).

Created a checkforwin function to decide who wins the game. This uses the return value of the gameboard array.
I used Javascript alert to do this.

I then created a reset button using jQuery so that the players could keep on playing. This requires resetting everything, the gameboard array back to empty, etc.,
Needed to iterate over all the slots to change the value to none.

Now that I got the reset button working. I wanted to make the alert appear nicer, rather than just the JS alert popup.

I created a div and hid it, then used jQuery to show it once the game finishes. The div will show the winner accordingly.

My next step is to store the score somewhere, so that you can see how many games you have won.

To do this, I created 2 divs for the 2 players. Then within the checkforwin function, increment the winner, and keep the loser’s score the same.

I found another bug: After the game finishes, player can still click on the board. In order to fix this, I needed to create a boolean variable to check if the game is over or not.

My last step is to create an AI player. With the limit amount of time left, my AI player is actually quite … “dumb” (who only picks a random slot rather than tries to actually win :O )

My game is up and running now. Hopefully you’ll all enjoy it.

## Deployment

Deployed on Github pages.

## Contributing

Feel free to join the Tic Tac Toe revolution by forking me and creating a pull request.

## Authors

Yours truly, Anna Tran - https://github.com/eggyducktective

## Acknowledgments

* Google is a great resource.
* Saw movie.
* Thank the evil AI for taking part in this brilliant game where its chance of winning is not really that great...
