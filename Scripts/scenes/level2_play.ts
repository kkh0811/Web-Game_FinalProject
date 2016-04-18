/*
################################################################################################
The name of source file : level2_play.ts
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

// Level2_Play SCENE
module scenes {
    export class Level2_Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _arctic: objects.Arctic;
        private _enemies: objects.Enemy[];
        private _level2_enemies: objects.Level2_Enemy[];
        private _bonus: objects.Bonus;
        private _bonusImage: createjs.Bitmap;
        private _ruby: objects.Ruby;
        private _rubyImage: createjs.Bitmap;
        private _enemyCount: number;
        private _level2_enemyCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _weapon: objects.Weapon;
        private _gameobject: objects.GameObject;

        public _flagSpacebarRepeat: boolean = false;
        

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        //PRIVATE METHODS
        /**
        * @method _updateScore
        * @return void
        */
        private _updateScore(): void {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + Math.round(scoreValue);
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        public start(): void {   
            // Set score and lives value
            livesValue = 5;
            scoreValue = 500;
            
            // Add background music
            createjs.Sound.play("backMusic").loop = -1;
            createjs.Sound.volume = 20;
            
            //Set Enemy Count
            this._enemyCount = 4;
            this._level2_enemyCount = 2;
            
            //Instantiate Enemy array 
            this._enemies = new Array<objects.Enemy>();
            
            //Instantiate Level2_Enemy array 
            this._level2_enemies = new Array<objects.Level2_Enemy>();
                
            // added arctic to the scene
            this._arctic = new objects.Arctic();
            this.addChild(this._arctic);
            
            // added player to the secne
            this._player = new objects.Player();
            this.addChild(this._player);
 
            // Add playing sound
            createjs.Sound.play("bgmplaying").loop = -1;
            
            // added enemies to the scene
            for (var enemy: number = 0; enemy < this._enemyCount; enemy++) {
                this._enemies[enemy] = new objects.Enemy();
                this.addChild(this._enemies[enemy]);
            }
            
            // added Level2_enemies to the scene
            for (var level2_enemy: number = 0; level2_enemy < this._level2_enemyCount; level2_enemy++) {
                this._level2_enemies[level2_enemy] = new objects.Level2_Enemy();
                this.addChild(this._level2_enemies[level2_enemy]);
            }
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player)

            if (controls.spacebar == true) {



            }
            
            // added bonus to the scene
            this._bonus = new objects.Bonus();
            this.addChild(this._bonus);
            
            // added ruby to the scene
            this._ruby = new objects.Ruby();
            this.addChild(this._ruby);
            
            // added lives and score labels to the scene
            this._livesLabel = new objects.Label("Lives:", "40px Candara Bold Italic", "#FF0000", 80, 0, false);
            this.addChild(this._livesLabel);
            this._scoreLabel = new objects.Label("Score:", "40px Candara Bold Italic", "#FF0000", 445, 0, false);
            this.addChild(this._scoreLabel);
            
            // Added Bonus image
            this._bonusImage = new createjs.Bitmap(assets.getResult("bonus"));
            this._bonusImage.x = 25;
            this._bonusImage.y = 5;
            this.addChild(this._bonusImage);
            
            // Added Ruby image
            this._rubyImage = new createjs.Bitmap(assets.getResult("ruby"));
            this._rubyImage.x = 400;
            this._rubyImage.y = 5;
            this.addChild(this._rubyImage);
           
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            if (controls.spacebar == true && !this._flagSpacebarRepeat) {
                if (!this._flagSpacebarRepeat) {
                    this._weapon = new objects.Weapon();
                    this.addChild(this._weapon);
                    this._weapon._setup(this._player.x, this._player.y);
                    this._flagSpacebarRepeat = true;
                    
                }
                
                setTimeout(() => this._flagSpacebarRepeat = false, 3200);
                

            }

             if (this._flagSpacebarRepeat) {  
                this._weapon.update();
                

            }

            this._arctic.update();
            this._bonus.update();
            this._ruby.update();
            this._player.update(controls);


            this._enemies.forEach(enemy => {
                enemy.update();
                if(this._flagSpacebarRepeat){
                this._collision.Weaponcheck(this._weapon,enemy);
                }
                this._collision.check(enemy);
            });


            this._level2_enemies.forEach(level2_enemy => {
                level2_enemy.update();
                this._collision.check(level2_enemy);
            });

            this._collision.check(this._bonus);
            this._collision.check(this._ruby);
            this._updateScore();
            if (scoreValue >= 1000) {
                //Change to Level3 
                createjs.Sound.stop();
                scene = config.Scene.LEVEL3_INTRO;
                changeScene();
            }

        }
    }
}