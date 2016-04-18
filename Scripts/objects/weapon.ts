/*
###############################################################################################
The name of source file : weapon.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Giho Kim
Last Modified date: 18 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 2.0
###############################################################################################
*/

module objects {
    // Weapon Class +++++++++++++++++++++++
    export class Weapon extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        private _dx: number;
        private _weaponSpeed: number = 10;
        private _beAttacked: boolean = false;
        
        
        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor() {
            super("beak");
            this.name = "beak";
            this._speed.x = 10;
        }
        
        //  METHODS +++++++++++++++++++++++
        public _checkBounds():void {
            if(this.x > 700 + this.width)
            {
                config.Game.bulletFlag = false;
                this._beAttacked = true;
            }
        }
        
        // reset the weapon offscreen
        public _reset(value:number):void {           
            this.x = value;
            
        }
        
        public _setup(playerX,playerY):void {           
            this.x = playerX;
            this.y = playerY;   
            this._dx = this._weaponSpeed; 
            this._speed.x = 5;       
        }
        
        public update():void {            
            this.x += this._speed.x;
            this._checkBounds();
        }
    }
}