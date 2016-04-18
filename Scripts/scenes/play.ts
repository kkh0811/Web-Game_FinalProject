/*
################################################################################################
The name of source file : play.ts
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

// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _forest: objects.Forest;
        private _enemies: objects.Enemy[];
        private _bonus: objects.Bonus;
        private _bonusImage: createjs.Bitmap;
        private _ruby:objects.Ruby;
        private _rubyImage: createjs.Bitmap;
        private _enemyCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        

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
            scoreValue = 0;
            
            // Add background music
            createjs.Sound.play("backMusic").loop = -1;
            createjs.Sound.volume = 20;
            
            //Set Enemy Count
            this._enemyCount = 4;
            
            //Instantiate Enemy array 
            this._enemies = new Array<objects.Enemy>();
                
            // added forest to the scene
            this._forest = new objects.Forest();
            this.addChild(this._forest);
            
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
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player)
            
            
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
            
            
            this._forest.update();
            this._bonus.update();
            this._ruby.update();
            this._player.update(controls);
            this._enemies.forEach(enemy => {
                enemy.update();
                this._collision.check(enemy);
                //scoreValue += 0.1;
            });
            this._collision.check(this._bonus);
            this._collision.check(this._ruby);
            this._updateScore();
            if (scoreValue >= 500) {
                //Change to Level2 
                createjs.Sound.stop();
                scene = config.Scene.LEVEL2_INTRO;
                changeScene();
            }


        }
    }
}