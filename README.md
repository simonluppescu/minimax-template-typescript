# Minimax Template (typescript)

Ever wanted to create an AI for a turn based game? This repo contains the code necessary to create a simple AI for a two-player game. Minimax is already implemented, so the remaining work is to implement the game state, such as the board, and related functions.

## Code

The code is split into distinct classes:

`Move`

This class contains the `Player` that is applying the move and any relevant info related to your game. For example, if you are making Tic Tac Toe, each `Move` instance might contain the coordinates on the grid where you're placing your move.

`Player`

This class is simple enough to not require any additional implementation. Feel free to add anything to this class if you desire.

`Board`

This is only an abstraction of the board. It does not need to keep track of Players or Moves. In Tic Tac Toe, the `Board` may consist of a 2D array. The required method `applyMove()` should change the board based on the data in the `Move`.

`State`

This class contains data for the game state, including the `Board`, all `Player`s, and the current `Player`. This class instance is passed to the minimax method and as it recurses, the `State` is updated with each `Move` it tests and switches the current `Player`.

`Game`

This class is the interface to the user to play the game. It initializes a `State` and contains a method `play()` that handles the user interaction to enter moves. In turn, this class handles the AI's responses with the `getBestMove()` method.

## What you need to do

Go through each of those five classes and look for all the `TODO:` and implement code as explained in them.
