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

module objects {
    // Boss Class +++++++++++++++++++++++
    export class Boss extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        private _vertical: boolean;

        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor() {
            super("boss");
            this._speed.x = 2.5; //Forest SPEED
            this._reset(this._rightBounds);
            this.name = "boss";
            this.soundString = "bgmcrush";

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

        }

        //  METHODS +++++++++++++++++++++++
        public _checkBounds(): void {
            // check outside the viewport


            if (this.y < this.height * 0.5) {
                this._vertical = true;
            }

            else if (this.y > config.Screen.HEIGHT - this.height * 0.5) {
                this._vertical = false;
            }

        }

        // reset the enemy offscreen
        public _reset(value: number): void {

            this.x = config.Screen.WIDTH - this.width * 0.5;
            this.y = Math.floor(Math.random() * 480);
            this._speed.y = 3;
            this._vertical = false;
        }



        public update(): void {
            //change the direction
            if (this._vertical) {
                this.y += this._speed.y;
            }
            else {
                this.y -= this._speed.y;
            }
            this._checkBounds();
        }
    }
}