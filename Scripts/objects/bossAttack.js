/*
###############################################################################################
The name of source file : bossAttack.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Sisi Li
Last Modified date: 16 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 1.7
###############################################################################################
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // bossAttack Class
    var bossAttack = (function (_super) {
        __extends(bossAttack, _super);
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function bossAttack(boss) {
            _super.call(this, "bomb");
            this.name = "bomb";
            this._boss = boss;
        }
        // public methods++++++++++++++++++++++++++++
        // check if bomb offscreen
        bossAttack.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._setup(this._boss.x, this._boss.y);
            }
        };
        bossAttack.prototype._setup = function (playerX, playerY) {
            this.x = playerX;
            this.y = playerY;
            this._speed.x = Math.floor(Math.random() * -15);
            this._speed.y = Math.floor(Math.random() * 4) - 2;
        };
        bossAttack.prototype.update = function () {
            this.y += this._speed.y;
            this.x -= this._speed.x++;
            this._checkBounds(this._leftBounds);
        };
        return bossAttack;
    })(objects.GameObject);
    objects.bossAttack = bossAttack;
})(objects || (objects = {}));
//# sourceMappingURL=bossAttack.js.map