"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadLine = require("readline");
var state_1 = require("./state");
var move_1 = require("./move");
var Game = /** @class */ (function () {
    function Game() {
        this.state = new state_1.default();
    }
    /**
     * TODO: Implement this method:
     * This is the main entry point for the program. It should accept user input that
     * symbolizes a move and then respond with an AI move.
     */
    Game.prototype.play = function () {
        var _this = this;
        var readline = ReadLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.setPrompt("Enter your move> ");
        // this.state.print();
        readline.on("line", function (line) {
            // TODO: Process line into Move
            var move = new move_1.default(_this.state.players[0]);
            _this.state.applyMove(move);
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
