/*
###############################################################################################
The name of source file : bossAttack.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Sisi Li
Last Modified date: 16 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 1.7
###############################################################################################
*/

module objects {
    // bossAttack Class
    export class bossAttack extends objects.GameObject {
        // private variables
        private _boss: objects.Boss;
        private _game: createjs.Container;

        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor( boss: objects.Boss) {
            super("bomb");
            this.name = "bomb";
            this._boss = boss;      
        }

        // public methods++++++++++++++++++++++++++++
        // check if bomb offscreen
        public _checkBounds(value: number): void {

            if (this.x <= value) {
                this._setup(this._boss.x, this._boss.y);
            }
        }


        public _setup(playerX, playerY): void {
            this.x = playerX;
            this.y = playerY;
            this._speed.x = Math.floor(Math.random() * -15);
            this._speed.y =  Math.floor(Math.random() * 4) - 2;
            
        }

        public update(): void {
            this.y += this._speed.y;
            this.x -= this._speed.x++;

            this._checkBounds(this._leftBounds);
        }
       
    }
}  