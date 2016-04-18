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
    var Winner = (function (_super) {
        __extends(Winner, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Winner() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        Winner.prototype.start = function () {
            //Add background
            this._backgroundImage = new createjs.Bitmap(assets.getResult("WinnerBackground"));
            this._backgroundImage.x = 0;
            this.addChild(this._backgroundImage);
            // add the RestartButton to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X - 175, config.Screen.CENTER_Y + 175, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add the ExitButton to the MENU scene
            this._exitButton = new objects.Button("ExitButton", config.Screen.CENTER_X + 140, config.Screen.CENTER_Y + 175, true);
            this.addChild(this._exitButton);
            // Exit Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // ExitButton click event handler
        Winner.prototype._exitButtonClick = function (event) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Close the game
            window.open('', '_self', '');
            window.close();
        };
        // ReStart Button click event handler
        Winner.prototype._restartButtonClick = function (event) {
            // Add restart sound
            createjs.Sound.play("bgmrestart");
            // Switch to the Play Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return Winner;
    })(objects.Scene);
    scenes.Winner = Winner;
})(scenes || (scenes = {}));
//# sourceMappingURL=winner.js.map