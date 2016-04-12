/*
###############################################################################################
The name of source file : weapon.ts
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

module objects {
    // Weapon Class +++++++++++++++++++++++
    export class Weapon extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        private _dx: number;
        private _weaponSpeed: number = 5;
        private _beAttacked: boolean = false;
        
        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor() {
            super("beak");
            this.name = "beak";
            
                  
        }
        
        //  METHODS +++++++++++++++++++++++
        public _checkBounds():void {
            // has outside the viewport
            if(this.x > 700 + this.width)
            {
                config.Game.bulletFlag = false;
                this._beAttacked = true;
                
            //    game.removeChild(this);
            }
        }
        
        // reset the enemy offscreen
        public _reset():void {           
            
          //  this._dx = this._weaponSpeed;
            
        }
        
        public _setup(playerX,playerY):void {           
            this.x = playerX;
            this.y = playerY;
            this._dx = this._weaponSpeed;           
        }
        
        public update():void {            
            this.x += 3;
            this._checkBounds();
        }
    }
}