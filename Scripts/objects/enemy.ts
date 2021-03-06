/*
###############################################################################################
The name of source file : enemy.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Giho Kim
Last Modified date: 11 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 2.0
###############################################################################################
*/

module objects {
    // Enemy Class +++++++++++++++++++++++
    export class Enemy extends objects.SpriteGameObjects {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        
        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor() {
            super("enemy");
            this._speed.x = 2.5; //Forest SPEED
            this._reset(this._rightBounds);
            this.name = "enemy";
            this.soundString = "bgmcrush";
        }
       
        
        //  METHODS +++++++++++++++++++++++
        public _checkBounds(value: number): void {
            // has outside the viewport
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the enemy offscreen
        public _reset(value: number): void {   
            this._speed.x = Math.round((Math.random() * 5) + 3);
            this._speed.y = Math.round((Math.random() * 5) + 5);
            this.x = value;
            if (this.y < this._topBounds) {
                this.y = Math.floor((Math.random() * this._bottomBounds) + this._topBounds)
                //this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = Math.floor((Math.random() * this._bottomBounds) + this._topBounds)
                //this.y = this._bottomBounds;
            }
            //this.y = Math.floor((Math.random() * this._bottomBounds) + this._topBounds);
        }



        public update(): void {
            // scroll the enemy 5 px per frame
            this.x -= this._speed.x;
            //this.y -= this._speed.y;
            this._checkBounds((-config.Screen.WIDTH) * 2);
        }
    }
}