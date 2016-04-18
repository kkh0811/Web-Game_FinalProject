/*
###############################################################################################
The name of source file : player.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Giho Kim
Last Modified date: 18 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 2.0
##############################################################################################
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER CLASS ++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, textureAtlas, "master");
            this._weaponNum = 0;
            this._weaponLimit = 3000;
            this._flagSpacebarRepeat = false;
            this._isDead = false;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - this.height * 0.5;
            this._leftBounds = this.width * 0.5;
            this._rightBounds = 400;
            this.x = this.regX;
            // keyborad event
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
            /*
                        
                        // added enemies to the scene
                        for (var weapon: number = 0; weapon < this._weaponNum; weapon++) {
                            this._weapons[weapon] = new objects.Weapon();
                            this.addChild(this._weapons[weapon]);
                        }
                        */
        }
        //PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }
            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
        };
        // press keyborad
        Player.prototype._onControlDown = function (e) {
            switch (e.which) {
                case KEYCODE_LEFT:
                    controls.left = true;
                    break;
                case KEYCODE_RIGHT:
                    controls.right = true;
                    break;
                case KEYCODE_UP:
                    controls.up = true;
                    break;
                case KEYCODE_DOWN:
                    controls.down = true;
                    break;
                case KEYCODE_SPACEBAR:
                    controls.spacebar = true;
                    break;
            }
        };
        // release keyborad
        Player.prototype._onControlUp = function (e) {
            switch (e.which) {
                case KEYCODE_LEFT:
                    controls.left = false;
                    break;
                case KEYCODE_RIGHT:
                    controls.right = false;
                    break;
                case KEYCODE_UP:
                    controls.up = false;
                    break;
                case KEYCODE_DOWN:
                    controls.down = false;
                    break;
                case KEYCODE_SPACEBAR:
                    controls.spacebar = false;
                    break;
            }
        };
        // PUBLIC MEHTODS
        Player.prototype.update = function (control) {
            if (control.down == true) {
                this.y += 5;
            }
            else if (control.up == true) {
                this.y -= 5;
            }
            else if (control.left == true) {
                this.x -= 5;
            }
            else if (control.right == true) {
                this.x += 5;
            }
            else if (control.spacebar == true) {
            }
            this._checkBounds();
        };
        return Player;
    })(createjs.Sprite);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map