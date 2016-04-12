var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
#################################################################################################
The name of source file : end.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Giho Kim
Last Modified date: 11 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 1.6
#################################################################################################
*/
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            //Set High Score Value
            if (scoreValue > highScoreValue) {
                highScoreValue = scoreValue;
            }
            //Add background
            this._backgroundImage = new createjs.Bitmap(assets.getResult("endback"));
            this._backgroundImage.x = 0;
            this.addChild(this._backgroundImage);
            //Add GameOver Label
            this._endLabel = new objects.Label("Game Over", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y + 30, true);
            this.addChild(this._endLabel);
            //Add Score Label 
            this._scoreLabel = new objects.Label("Score:", "40px Candara Bold Italic", "#FFFFFF", 290, 124, false);
            this.addChild(this._scoreLabel);
            //Add HighScore Label 
            this._highscoreLabel = new objects.Label("High Score:", "40px Candara Bold Italic", "#FF4A4A", 190, 204, false);
            this.addChild(this._highscoreLabel);
            // add the RestartButton to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X - 10, config.Screen.CENTER_Y + 175, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        End.prototype.update = function () {
            this._scoreLabel.text = "" + Math.round(scoreValue);
            this._highscoreLabel.text = "High Score : " + Math.round(highScoreValue);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // ReStart Button click event handler
        End.prototype._restartButtonClick = function (event) {
            // Add restart sound
            createjs.Sound.play("bgmrestart");
            // Switch to the Play Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return End;
    })(objects.Scene);
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map