/*
###############################################################################################
The name of source file : sky.ts
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
    // Sky Class +++++++++++++++++++++++
    var Sky = (function (_super) {
        __extends(Sky, _super);
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function Sky() {
            _super.call(this, "sky");
            this._speed.x = 1.5; //Sky SPEED
            this._reset(0);
            this.name = "sky";
        }
        //  METHODS +++++++++++++++++++++++
        Sky.prototype._checkBounds = function (value) {
            //console.log(this.x);
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the sky offscreen
        Sky.prototype._reset = function (value) {
            this.x = value;
        };
        Sky.prototype.update = function () {
            // scroll the sky 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(-1408);
        };
        return Sky;
    })(objects.GameObject);
    objects.Sky = Sky;
})(objects || (objects = {}));
//# sourceMappingURL=sky.js.map