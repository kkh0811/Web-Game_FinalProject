/*
###############################################################################################
The name of source file : boss.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Sisi Li
Last Modified date: 16 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 2.0
###############################################################################################
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Boss Class +++++++++++++++++++++++
    var Boss = (function (_super) {
        __extends(Boss, _super);
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function Boss() {
            _super.call(this, "boss");
            this._speed.x = 2.5; //Forest SPEED
            this._reset(this._rightBounds);
            this.name = "boss";
            this.soundString = "bgmcrush";
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        //  METHODS +++++++++++++++++++++++
        Boss.prototype._checkBounds = function () {
            // check outside the viewport
            if (this.y < this.height * 0.5) {
                this._vertical = true;
            }
            else if (this.y > config.Screen.HEIGHT - this.height * 0.5) {
                this._vertical = false;
            }
        };
        // reset the enemy offscreen
        Boss.prototype._reset = function (value) {
            this.x = config.Screen.WIDTH - this.width * 0.5;
            this.y = Math.floor(Math.random() * 480);
            this._speed.y = 3;
            this._vertical = false;
        };
        Boss.prototype.update = function () {
            //change the direction
            if (this._vertical) {
                this.y += this._speed.y;
            }
            else {
                this.y -= this._speed.y;
            }
            this._checkBounds();
        };
        return Boss;
    })(objects.GameObject);
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map