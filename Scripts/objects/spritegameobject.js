/*
################################################################################################
The name of source file : spritegameobject.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Giho Kim
Last Modified date: 11 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 1.6
################################################################################################
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // SpriteGameObjects Super Class +++++++++++++++++++++++
    var SpriteGameObjects = (function (_super) {
        __extends(SpriteGameObjects, _super);
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function SpriteGameObjects(spriteString) {
            _super.call(this, textureAtlas, spriteString);
            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.isColliding = false;
            this._topBounds = this.height;
            this._bottomBounds = config.Screen.HEIGHT - this.height;
            this._leftBounds = -this.width;
            this._rightBounds = config.Screen.WIDTH + this.width;
        }
        //  METHODS +++++++++++++++++++++++
        SpriteGameObjects.prototype._checkBounds = function (value) {
            var resetValue = 0;
            // check if x value has met the reset criteira
            if (this.x <= value) {
                this._reset(resetValue);
            }
        };
        // reset the Scene offscreen
        SpriteGameObjects.prototype._reset = function (value) {
            this.x = value;
        };
        SpriteGameObjects.prototype.update = function () {
            var boundValue = 0;
            // scroll the Scene 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(boundValue);
        };
        return SpriteGameObjects;
    })(createjs.Sprite);
    objects.SpriteGameObjects = SpriteGameObjects;
})(objects || (objects = {}));
//# sourceMappingURL=spritegameobject.js.map