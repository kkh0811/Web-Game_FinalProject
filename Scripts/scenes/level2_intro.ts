/*
###############################################################################################
The name of source file : level2_intro.ts
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

// Level2_Intro Scene
module scenes {
    export class Level2_Intro extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _arctic: objects.Arctic;
        private _level2Label: objects.Label;
        private _newEnemy: createjs.Bitmap;
        private _contentLabel: objects.Label;
        private _startButton: objects.Button;
        private _backgroundImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            // added background to the scene
            this._arctic = new objects.Arctic();
            this.addChild(this._arctic);
            
            //Add LEVEL2 Label
            this._level2Label = new objects.Label(
                "LEVEL 2", "60px Consolas",
                "#FF4A4A",
                config.Screen.CENTER_X, config.Screen.CENTER_Y-150, true);
            this.addChild(this._level2Label);
            
            //Add CONTENTs Label
            this._contentLabel = new objects.Label(
                "        Fight and Kill\n\nAgainst powerful new enemies! ", "30px Consolas",
                "#FFFFFF",
                config.Screen.CENTER_X, config.Screen.CENTER_Y-60, true);
            this.addChild(this._contentLabel);
            
            // Added new enemy image
            this._newEnemy = new createjs.Bitmap(assets.getResult("enemytwo"));
            this._newEnemy.x = 260;
            this._newEnemy.y = 230;
            this.addChild(this._newEnemy);
               
            // add the Start button to the Level2_Play scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X - 10,
                config.Screen.CENTER_Y + 175, true);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // Level2_Intro Background updates here
        public update(): void {
            this._arctic.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // PlayButton click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Switch to the Level2_Play Scene
            scene = config.Scene.LEVEL2_PLAY;
            changeScene();
        }

    }
}