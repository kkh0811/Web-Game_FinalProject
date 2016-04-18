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

module objects {
    // PLAYER CLASS ++++++++++++
    export class Player extends createjs.Sprite {
        // PRIVATE INSTANCE VARIABLE
        private _topBounds: number;
        private _bottomBounds: number;
        private _leftBounds: number;
        private _rightBounds: number;
        private _weaponNum: number = 0;
        private _weaponLimit: number = 3000;
        private _flagSpacebarRepeat: boolean = false;
        private _weapons: objects.Weapon[]; 
        
        



        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        public _isDead: boolean = false;

        constructor() {
            super(textureAtlas, "master");

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
        private _checkBounds(): void {
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
        }
        
        
        // press keyborad
        private _onControlDown(e): void {
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
        }

        // release keyborad
        private _onControlUp(e): void {
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
        }
        
        
        

        // PUBLIC MEHTODS
        public update(control): void {
            if (control.down == true) {
                this.y += 5;
            } else if (control.up == true) {
                this.y -= 5;
            } else if (control.left == true) {
                this.x -= 5;
            } else if (control.right == true) {
                this.x += 5;
            } else if (control.spacebar == true) {
                
            }
            this._checkBounds();
        }
    }
}
