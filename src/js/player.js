"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.index = Player.COUNTER;
        Player.COUNTER++;
    }
    Player.COUNTER = 0;
    return Player;
}());
exports.default = Player;
