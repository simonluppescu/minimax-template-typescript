import * as ReadLine from "readline";

import State from "./state";
import Move from "./move";

class Game {
  state: State;

  constructor() {
    this.state = new State();
  }

  /**
   * TODO: Implement the rest of this method:
   * This is the main entry point for the program. It should accept user input that
   * represents a move and then respond with an AI move.
   */
  play(): void {
    const readline = ReadLine.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.state.print();

    readline.setPrompt("Enter your move> ");
    readline.on("line", (line: string) => {
      const move = null; // TODO: Process line into Move

      this.state.applyMove(move);
      this.state.print();

      if (this.state.isTerminal()) {
        console.log("Game over!");
        readline.close();
        return;
      }

      const aiMove = this.getBestMove(this.state);
      console.log(`AI moves: ${aiMove}.`);
      this.state.applyMove(aiMove);
      this.state.print();

      if (this.state.isTerminal()) {
        console.log("Game over!");
        readline.close();
      } else {
        readline.prompt();
      }
    });
  }

  getBestMove(state: State): Move {
    const moves = state.getMoves();
    let bestMove: Move;
    let bestScore = Number.MIN_SAFE_INTEGER;
    moves.forEach((currMove, _index) => {
      const currScore = this.minimax(state.testMove(currMove), 2);
      if (currScore > bestScore) {
        bestScore = currScore;
        bestMove = currMove;
      }
    });

    return bestMove;
  }

  minimax(state: State, depth: number): number {
    if (depth === 0 || state.isTerminal()) {
      return state.computeHeuristic();
    }

    const moves = state.getMoves();
    if (state.isAiPlayer()) {
      let max = Number.MIN_SAFE_INTEGER;
      moves.forEach((currMove, _index) => {
        max = Math.max(max, this.minimax(state.testMove(currMove), depth - 1));
      });
      return max;
    } else {
      let min = Number.MAX_SAFE_INTEGER;
      moves.forEach((currMove, _index) => {
        min = Math.min(min, this.minimax(state.testMove(currMove), depth - 1));
      });
      return min;
    }
  }
}
