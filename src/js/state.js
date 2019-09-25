"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var board_1 = require("./board");
var State = /** @class */ (function () {
    function State(board) {
        if (board === void 0) { board = new board_1.default(); }
        this.board = board;
        this.players = [new player_1.default("human"), new player_1.default("computer")];
        this.currentPlayerIndex = 0;
    }
    /**
     * TODO: Implement this method:
     * Return a list of possible moves based on the current player.
     */
    State.prototype.getMoves = function () { };
    /**
     * TODO: Implement this method:
     * This move is used for the minimax algorith to recurse through the game states.
     * In order for other recursive calls to not modify the other states by reference,
     * this method should duplicate the state and then return that new state.
     * @param move The move to be applied
     */
    State.prototype.testMove = function (move) { };
    /**
     * TODO: Implement this method:
     * This move will be applied to the state when a move is chosen by a player. Therefore,
     * this move is permanently applied.
     * @param move The move to be applied
     */
    State.prototype.applyMove = function (move) { };
    /**
     * TODO: Implement this method:
     * This method determines if the state is at a "game over", in other words, if a player
     * has won or the game is in a drawn state and cannot continue.
     */
    State.prototype.isTerminal = function () { };
    /**
     * TODO: Implement this method:
     * This method returns a score that represents a numerical measurement of the favorability
     * of a position from the point of view of the maximizing player. For example, in
     * Tic Tac Toe, a won state for the maximizing player, (let's say X), can return 1; a draw
     * will return 0; and a won state for O returns -1.
     */
    State.prototype.computeHeuristic = function () { };
    State.prototype.getNextPlayerIndex = function () {
        return (this.currentPlayerIndex + 1) % this.players.length;
    };
    return State;
}());
