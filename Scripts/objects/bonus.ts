/*
#######################################################################################
The name of source file : bonus.ts
The information of author :  Giho Kim #300738697
Last Modified by: Giho Kim
Last Modified date: 29 March 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 1.0
#######################################################################################
*/

module objects {
    // Bonus Class +++++++++++++++++++++++
    export class Bonus extends objects.SpriteGameObjects {

        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor() {
            super("bonus");
            this._reset(this._rightBounds);
            this.name = "bonus";
            this.soundString = "bgmGetheart";
        }
        
        // PRIVATE METHODS +++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // has outside the viewport
            if(this.x <= value)
            {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the Bonus offscreen
        public _reset(value:number):void {
            this._speed.x = Math.floor(Math.random()*5) +2;
            this._speed.y = Math.floor(Math.random()*4) -2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds + this._topBounds);
        }
        
        public update():void {
            // scroll the Bonus left the screen
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds((-config.Screen.WIDTH)*2);
        }
    }
}