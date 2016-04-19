/*
################################################################################################
The name of source file : level3_play.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Giho Kim
Last Modified date: 18 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 2.0
################################################################################################
*/

// Level3_Play SCENE
module scenes {
    export class Level3_Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sky: objects.Sky;
        private _enemies: objects.Enemy[];
        private _level2_enemies: objects.Level2_Enemy[];
        private _boss: objects.Boss;
        private _bonus: objects.Bonus;
        private _bonusImage: createjs.Bitmap;
        private _ruby: objects.Ruby;
        private _rubyImage: createjs.Bitmap;
        private _enemyCount: number;
        private _level2_enemyCount: number;
        private _bossCount: number;
        private _bossAttackCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _weapon: objects.Weapon;
        private _bossAttack: objects.bossAttack[];
        private _flagSpacebarRepeat: boolean = false;
        

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
            scoreValue = 1000;
            
            // Add background music
            createjs.Sound.play("backMusic").loop = -1;
            createjs.Sound.volume = 20;
            
            //Set Enemy Count
            this._enemyCount = 0;
            this._level2_enemyCount = 0;
            this._bossCount = 1;
            this._bossAttackCount = 2;
            
            //Instantiate Enemy array 
            this._enemies = new Array<objects.Enemy>();
            
            //Instantiate Level2_Enemy array 
            this._level2_enemies = new Array<objects.Level2_Enemy>();
            
            //Instantiate attack array from the boss
            this._bossAttack = new Array<objects.bossAttack>();
                            
            // added sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            
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
            
            // added Boss to the secne
            this._boss = new objects.Boss();
            this.addChild(this._boss);
            
            // added Attack from the Boss to the scene
            for (var count: number = 0; count < this._bossAttackCount; count++) {
                this._bossAttack[count] = new objects.bossAttack(this._boss);
                this.addChild(this._bossAttack[count]);
                this._bossAttack[count]._setup(this._boss.x, this._boss.y);
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
            this._scoreLabel = new objects.Label("Score:", "40px Candara Bold Italic", "#FF0000", 425, 0, false);
            this.addChild(this._scoreLabel);
            
            // Added Bonus image
            this._bonusImage = new createjs.Bitmap(assets.getResult("bonus"));
            this._bonusImage.x = 25;
            this._bonusImage.y = 5;
            this.addChild(this._bonusImage);
            
            // Added Ruby image
            this._rubyImage = new createjs.Bitmap(assets.getResult("ruby"));
            this._rubyImage.x = 380;
            this._rubyImage.y = 5;
            this.addChild(this._rubyImage);         
           
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            /*
            if (controls.spacebar == true && !this._flagSpacebarRepeat) {
                if (!this._flagSpacebarRepeat) {
                    console.log("test");
                    this._weapon = new objects.Weapon();
                    this.addChild(this._weapon);
                    this._weapon._setup(this._player.x, this._player.y);
                    this._flagSpacebarRepeat = true;

                }

                setTimeout(() => this._flagSpacebarRepeat = false, 3500);
            }

            if (this._flagSpacebarRepeat) {
                this._weapon.update();
            }
            */
            this._sky.update();
            this._bonus.update();
            this._ruby.update();
            this._player.update(controls);
            
            this._boss.update();
            
             // update boss attack
            this._bossAttack.forEach(attack => {
                attack.update();
                this._collision.check(attack);
                
            });

            this._enemies.forEach(enemy => {
                enemy.update();
                this._collision.check(enemy);
                //this._collision.Weaponcheck(this._weapon,enemy)
            });

            this._level2_enemies.forEach(level2_enemy => {
                level2_enemy.update();
                this._collision.check(level2_enemy);
            });

            this._collision.check(this._bonus);
            this._collision.check(this._ruby);
            this._updateScore();
            if (scoreValue >= 1500) {
                //Change to Level3 
                createjs.Sound.stop();
                scene = config.Scene.WINNER;
                changeScene();
            }

        }
    }
}