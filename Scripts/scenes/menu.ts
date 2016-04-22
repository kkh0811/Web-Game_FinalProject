/*
################################################################################################
The name of source file : menu.ts
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

// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playButton: objects.Button;
        private _instructionButton: objects.Button;
        private _exitButton: objects.Button;
        
        private _level1Button: objects.Button;
        private _level2Button: objects.Button;
        private _level3Button: objects.Button;
        
        private _backgroundImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            //Add background
            this._backgroundImage = new createjs.Bitmap(assets.getResult("MenuBackground"));
            this.addChild(this._backgroundImage);
            
            // add the PlayButton to the MENU scene
            this._playButton = new objects.Button(
                "PlayButton",
                config.Screen.CENTER_X - 215,
                config.Screen.CENTER_Y - 75, true);
            this.addChild(this._playButton);
            
            // Play Button event listener
            this._playButton.on("click", this._playButtonClick, this);
            
            // add the InstructionButton to the MENU scene
            this._instructionButton = new objects.Button(
                "InstructionButton",
                config.Screen.CENTER_X - 15,
                config.Screen.CENTER_Y - 75, true);
            this.addChild(this._instructionButton);
            
            // InstructionButton event listener
            this._instructionButton.on("click", this._instructionButtonClick, this);
            
            // add the ExitButton to the MENU scene
            this._exitButton = new objects.Button(
                "ExitButton",
                config.Screen.CENTER_X + 180,
                config.Screen.CENTER_Y - 75, true);
            this.addChild(this._exitButton);
            
            // Exit Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);
            
            // add the Level1 button to the MENU scene
            this._level1Button = new objects.Button(
                "Level1Button",
                config.Screen.CENTER_X - 215,
                config.Screen.CENTER_Y + 170, true);
            this.addChild(this._level1Button);
            
            // Level1 Button event listener
            this._level1Button.on("click", this._level1ButtonClick, this);
            
            // add the Level2 Button to the MENU scene
            this._level2Button = new objects.Button(
                "Level2Button",
                config.Screen.CENTER_X - 15,
                config.Screen.CENTER_Y  + 170, true);
            this.addChild(this._level2Button);
            
            // Level2 Button event listener
            this._level2Button.on("click", this._leve2ButtonClick, this);
            
            // add the Level3 Button to the MENU scene
            this._level3Button = new objects.Button(
                "Level3Button",
                config.Screen.CENTER_X + 180,
                config.Screen.CENTER_Y + 170, true);
            this.addChild(this._level3Button);
            
            // Level3 Button event listener
            this._level3Button.on("click", this._level3ButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // PlayButton click event handler
        private _playButtonClick(event: createjs.MouseEvent) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Switch to the Play Scene
            scene = config.Scene.LEVEL1_INTRO;
            changeScene();
        }
        
        // InstructionButton click event handler
        private _instructionButtonClick(event: createjs.MouseEvent) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
        
        // InstructionButton click event handler
        private _level1ButtonClick(event: createjs.MouseEvent) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Switch to the INTRO Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
        
        private _leve2ButtonClick(event: createjs.MouseEvent) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Switch to the INTRO Scene
            scene = config.Scene.LEVEL2_PLAY;
            changeScene();
        }
        
        private _level3ButtonClick(event: createjs.MouseEvent) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Switch to the INTRO Scene
            scene = config.Scene.LEVEL3_PLAY;
            changeScene();
        }
        
        // ExitButton click event handler
        private _exitButtonClick(event: createjs.MouseEvent) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Close the game
            window.open('', '_self', '');
            window.close();
        }

    }
}