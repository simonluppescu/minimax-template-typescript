"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadLine = require("readline");
var state_1 = require("./state");
var Game = /** @class */ (function () {
    function Game() {
        this.state = new state_1.default();
    }
    /**
     * TODO: Implement the rest of this method:
     * This is the main entry point for the program. It should accept user input that
     * represents a move and then respond with an AI move.
     */
    Game.prototype.play = function () {
        var _this = this;
        var readline = ReadLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.state.print();
        readline.setPrompt("Enter your move> ");
        readline.on("line", function (line) {
            var move = null; // TODO: Process line into Move
            _this.state.applyMove(move);
            _this.state.print();
            if (_this.state.isTerminal()) {
                console.log("Game over!");
                readline.close();
                return;
            }
            var aiMove = _this.getBestMove(_this.state);
            console.log("AI moves: " + aiMove + ".");
            _this.state.applyMove(aiMove);
            _this.state.print();
            if (_this.state.isTerminal()) {
                console.log("Game over!");
                readline.close();
            }
            else {
                readline.prompt();
            }
        });
    };
    Game.prototype.getBestMove = function (state) {
        var _this = this;
        var moves = state.getMoves();
        var bestMove;
        var bestScore = Number.MIN_SAFE_INTEGER;
        moves.forEach(function (currMove, _index) {
            var currScore = _this.minimax(state.testMove(currMove), 2);
            if (currScore > bestScore) {
                bestScore = currScore;
                bestMove = currMove;
            }
        });
        return bestMove;
    };
    Game.prototype.minimax = function (state, depth) {
        var _this = this;
        if (depth === 0 || state.isTerminal()) {
            return state.computeHeuristic();
        }
        var moves = state.getMoves();
        if (state.isAiPlayer()) {
            var max_1 = Number.MIN_SAFE_INTEGER;
            moves.forEach(function (currMove, _index) {
                max_1 = Math.max(max_1, _this.minimax(state.testMove(currMove), depth - 1));
            });
            return max_1;
        }
        else {
            var min_1 = Number.MAX_SAFE_INTEGER;
            moves.forEach(function (currMove, _index) {
                min_1 = Math.min(min_1, _this.minimax(state.testMove(currMove), depth - 1));
            });
            return min_1;
        }
    };
    return Game;
}());
