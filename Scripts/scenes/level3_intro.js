/*
###############################################################################################
The name of source file : level3_intro.ts
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Level2_Intro Scene
var scenes;
(function (scenes) {
    var Level3_Intro = (function (_super) {
        __extends(Level3_Intro, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level3_Intro() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level3_Intro.prototype.start = function () {
            // added background to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            //Add LEVEL3 Label
            this._level3Label = new objects.Label("LEVEL 3", "60px Consolas", "#FF4A4A", config.Screen.CENTER_X, config.Screen.CENTER_Y - 170, true);
            this.addChild(this._level3Label);
            // Added Boss image
            this._newEnemy = new createjs.Bitmap(assets.getResult("boss"));
            this._newEnemy.x = 230;
            this._newEnemy.y = 190;
            this.addChild(this._newEnemy);
            //Add CONTENTs Label
            this._contentLabel = new objects.Label("Get 1500 Scores to Win! ", "30px Consolas", "#FFFFFF", config.Screen.CENTER_X, config.Screen.CENTER_Y - 90, true);
            this.addChild(this._contentLabel);
            // add the Start button to the Level2_Play scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X - 10, config.Screen.CENTER_Y + 175, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Level2_Intro Background updates here
        Level3_Intro.prototype.update = function () {
            this._sky.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PlayButton click event handler
        Level3_Intro.prototype._startButtonClick = function (event) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Switch to the Level3_Play Scene
            scene = config.Scene.LEVEL3_PLAY;
            changeScene();
        };
        return Level3_Intro;
    })(objects.Scene);
    scenes.Level3_Intro = Level3_Intro;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3_intro.js.map