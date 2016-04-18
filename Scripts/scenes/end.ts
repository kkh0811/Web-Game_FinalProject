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
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endLabel: objects.Label;
        private _highscoreLabel: objects.Label;
        private _exitButton: objects.Button;
        private _restartButton: objects.Button;
        private _backgroundImage: createjs.Bitmap;
        private _scoreLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS ++++++++++++++++++++
        
        
        // Start Method
        public start(): void {
            
            //Set High Score Value
            if(scoreValue > highScoreValue){
                highScoreValue = scoreValue;
            }
            
            //Add background
            this._backgroundImage = new createjs.Bitmap(assets.getResult("endback"));
            this._backgroundImage.x = 0;
            this.addChild(this._backgroundImage);
            
            //Add GameOver Label
            this._endLabel = new objects.Label(
                "Game Over", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y+30, true);
            this.addChild(this._endLabel);
            
            //Add Score Label 
            this._scoreLabel = new objects.Label("Score:", "40px Candara Bold Italic", "#FFFFFF", 290, 124, false);
            this.addChild(this._scoreLabel);
            
            //Add HighScore Label 
            this._highscoreLabel = new objects.Label("High Score:", "40px Candara Bold Italic", "#FF4A4A", 190, 204, false);
            this.addChild(this._highscoreLabel);
            
            // add the RestartButton to the OVER scene
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X - 175,
                config.Screen.CENTER_Y + 175, true);
            this.addChild(this._restartButton);
           
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            
            // add the ExitButton to the MENU scene
            this._exitButton = new objects.Button(
                "ExitButton",
                config.Screen.CENTER_X + 140,
                config.Screen.CENTER_Y + 175, true);
            this.addChild(this._exitButton);
            
            // Exit Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._scoreLabel.text = "" + Math.round(scoreValue);
            this._highscoreLabel.text = "High Score : " + Math.round(highScoreValue);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // ExitButton click event handler
        private _exitButtonClick(event: createjs.MouseEvent) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Close the game
            window.open('', '_self', '');
            window.close();
        }
        
        // ReStart Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Add restart sound
            createjs.Sound.play("bgmrestart");
            // Switch to the Play Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
    }
}