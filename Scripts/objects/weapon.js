/*
###############################################################################################
The name of source file : weapon.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Giho Kim
Last Modified date: 11 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 1.6
###############################################################################################
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Weapon Class +++++++++++++++++++++++
    var Weapon = (function (_super) {
        __extends(Weapon, _super);
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function Weapon() {
            _super.call(this, "beak");
            this._weaponSpeed = 5;
            this._beAttacked = false;
            this.name = "beak";
        }
        //  METHODS +++++++++++++++++++++++
        Weapon.prototype._checkBounds = function () {
            // has outside the viewport
            if (this.x > 700 + this.width) {
                config.Game.bulletFlag = false;
                this._beAttacked = true;
            }
        };
        // reset the enemy offscreen
        Weapon.prototype._reset = function () {
            //  this._dx = this._weaponSpeed;
        };
        Weapon.prototype._setup = function (playerX, playerY) {
            this.x = playerX;
            this.y = playerY;
            this._dx = this._weaponSpeed;
        };
        Weapon.prototype.update = function () {
            this.x += 3;
            this._checkBounds();
        };
        return Weapon;
    })(objects.GameObject);
    objects.Weapon = Weapon;
})(objects || (objects = {}));
//# sourceMappingURL=weapon.js.map