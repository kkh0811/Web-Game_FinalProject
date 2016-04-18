/*
###############################################################################################
The name of source file : Ruby.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Giho Kim
Last Modified date: 15 April 2016
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
    // Ruby Class +++++++++++++++++++++++
    var Ruby = (function (_super) {
        __extends(Ruby, _super);
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function Ruby() {
            _super.call(this, "ruby");
            this._reset(this._rightBounds);
            this.name = "ruby";
            this.soundString = "bgmGetheart";
        }
        // PRIVATE METHODS +++++++++++++++++++++++
        Ruby.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the Bonus offscreen
        Ruby.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 2;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds + this._topBounds);
        };
        Ruby.prototype.update = function () {
            // scroll the Ruby left the screen
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds((-config.Screen.WIDTH) * 2);
        };
        return Ruby;
    })(objects.GameObject);
    objects.Ruby = Ruby;
})(objects || (objects = {}));
//# sourceMappingURL=ruby.js.map