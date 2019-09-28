import Player from "./player";
import Board from "./board";
import Move from "./move";

class State {
  board: Board;
  players: Player[];
  currentPlayerIndex: number;

  constructor(board = new Board()) {
    this.board = board;
    this.players = [new Player("human"), new Player("computer")];
    this.currentPlayerIndex = 0;
  }

  isAiPlayer(): boolean {
    return this.currentPlayerIndex === 1;
  }

  /**
   * TODO: Implement this method:
   * Return a list of possible moves based on the current player.
   */
  getMoves(): Move[] {}

  /**
   * TODO: Implement this method:
   * This move is used for the minimax algorith to recurse through the game states.
   * In order for other recursive calls to not modify the other states by reference,
   * this method should duplicate the state and then return that new state.
   * @param move The move to be applied
   */
  testMove(move: Move): State {}

  /**
   * TODO: Implement this method:
   * This move will be applied to the state when a move is chosen by a player. Therefore,
   * this move is permanently applied.
   * @param move The move to be applied
   */
  applyMove(move: Move): void {}

  /**
   * TODO: Implement this method:
   * This method determines if the state is at a "game over", in other words, if a player
   * has won or the game is in a drawn state and cannot continue.
   */
  isTerminal(): boolean {}

  /**
   * TODO: Implement this method:
   * This method returns a score that represents a numerical measurement of the favorability
   * of a position from the point of view of the maximizing player. For example, in
   * Tic Tac Toe, a won state for the maximizing player, (let's say X), can return 1; a draw
   * will return 0; and a won state for O returns -1.
   */
  computeHeuristic(): number {}

  /**
   * TODO: Optionally implement this method:
   * Print the state in a readable way. Can be used for debugging purposes.
   */
  print(): void {}

  getNextPlayerIndex(): number {
    return (this.currentPlayerIndex + 1) % this.players.length;
  }
}

export default State;
