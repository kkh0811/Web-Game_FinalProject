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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Level3_Play SCENE
var scenes;
(function (scenes) {
    var Level3_Play = (function (_super) {
        __extends(Level3_Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level3_Play() {
            _super.call(this);
            this._flagSpacebarRepeat = false;
        }
        //PRIVATE METHODS
        /**
        * @method _updateScore
        * @return void
        */
        Level3_Play.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + Math.round(scoreValue);
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level3_Play.prototype.start = function () {
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
            this._enemies = new Array();
            //Instantiate Level2_Enemy array 
            this._level2_enemies = new Array();
            //Instantiate attack array from the boss
            this._bossAttack = new Array();
            // added sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            // added player to the secne
            this._player = new objects.Player();
            this.addChild(this._player);
            // Add playing sound
            createjs.Sound.play("bgmplaying").loop = -1;
            // added enemies to the scene
            for (var enemy = 0; enemy < this._enemyCount; enemy++) {
                this._enemies[enemy] = new objects.Enemy();
                this.addChild(this._enemies[enemy]);
            }
            // added Level2_enemies to the scene
            for (var level2_enemy = 0; level2_enemy < this._level2_enemyCount; level2_enemy++) {
                this._level2_enemies[level2_enemy] = new objects.Level2_Enemy();
                this.addChild(this._level2_enemies[level2_enemy]);
            }
            // added Boss to the secne
            this._boss = new objects.Boss();
            this.addChild(this._boss);
            // added Attack from the Boss to the scene
            for (var count = 0; count < this._bossAttackCount; count++) {
                this._bossAttack[count] = new objects.bossAttack(this._boss);
                this.addChild(this._bossAttack[count]);
                this._bossAttack[count]._setup(this._boss.x, this._boss.y);
            }
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
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
        };
        // PLAY Scene updates here
        Level3_Play.prototype.update = function () {
            var _this = this;
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
            this._bossAttack.forEach(function (attack) {
                attack.update();
                _this._collision.check(attack);
            });
            this._enemies.forEach(function (enemy) {
                enemy.update();
                _this._collision.check(enemy);
                //this._collision.Weaponcheck(this._weapon,enemy)
            });
            this._level2_enemies.forEach(function (level2_enemy) {
                level2_enemy.update();
                _this._collision.check(level2_enemy);
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
        };
        return Level3_Play;
    })(objects.Scene);
    scenes.Level3_Play = Level3_Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3_play.js.map