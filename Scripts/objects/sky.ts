/*
###############################################################################################
The name of source file : sky.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Giho Kim
Last Modified date: 13 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 2.0
###############################################################################################
*/

module objects {
    // Sky Class +++++++++++++++++++++++
    export class Sky extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++

        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor() {
            super("sky");
            this._speed.x = 1.5; //Sky SPEED
            this._reset(0);
            this.name = "sky";
        }
        
        //  METHODS +++++++++++++++++++++++
        public _checkBounds(value:number):void {
            //console.log(this.x);
            if(this.x <= value)
            {
                this._reset(0);
            }
        }
        
        // reset the sky offscreen
        public _reset(value:number):void {
            this.x = value;
        }
        
        public update():void {
            // scroll the sky 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(-1408);
        }
    }
}