/*
##############################################################################################
The name of source file : game.ts
The information of author :  Giho Kim #300738697 , SiSi Li #300776374 and Liyi Chen #300756123
Last Modified by: Giho Kim
Last Modified date: 18 April 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 2.0
##############################################################################################
*/

/// <reference path = "_reference.ts" />

// global variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var game: createjs.Container;
var stats: Stats;
var textureAtlas: createjs.SpriteSheet;
var currentScene: objects.Scene;
var scene: number;

// Score and lives values
var livesValue: number;
var scoreValue: number;
var highScoreValue: number = 0;

// key values
var KEYCODE_LEFT: number = 37,
    KEYCODE_RIGHT: number = 39,
    KEYCODE_UP: number = 38,
    KEYCODE_DOWN: number = 40,
    KEYCODE_SPACEBAR: number = 32;

// Game Scenes
var menu: scenes.Menu;
var intro: scenes.Intro;
var level1_intro: scenes.Level1_Intro;
var play: scenes.Play;
var level2_intro: scenes.Level2_Intro;
var level2_play: scenes.Level2_Play;
var level3_intro: scenes.Level3_Intro;
var level3_play: scenes.Level3_Play;
var end: scenes.End;
var winner: scenes.Winner;

// Atlas image variables
var atlas = {
    "images": [
        "../../Assets/images/atlas.png"
    ],
    "frames": [
        [1, 1, 119, 120, 0, -1, 0],
        [122, 1, 100, 98, 0, 0, -1],
        [224, 1, 181, 86, 0, 0, 0],
        [407, 1, 181, 86, 0, 0, 0],
        [590, 1, 181, 86, 0, 0, 0],
        [773, 1, 181, 86, 0, 0, 0],
        [956, 1, 181, 86, 0, 0, 0],
        [1139, 1, 66, 67, 0, -2, -1],
        [1139, 70, 150, 50, 0, 0, 0],
        [1207, 1, 67, 63, 0, -1, -4],
        [1276, 1, 66, 63, 0, -2, -3],
        [1291, 66, 70, 55, 0, 0, -8],
        [1344, 1, 50, 45, 0, 0, 0]
    ],
    "animations": {
        "enemytwo": [0],
        "enemy": [1],
        "ExitButton": [2],
        "InstructionButton": [3],
        "PlayButton": [4],
        "RestartButton": [5],
        "StartButton": [6],
        "master3": [7],
        "BackButton": [8],
        "master4": [9],
        "master1": [10],
        "master2": [11],
        "bonus": [12],
        "master": {  // for shuffle images animation 
            "frames": [10, 11, 7],
            "speed": 0.2
        }
    }
}

// Add my assets
var assetData: objects.Asset[] = [
    // add images
    { id: "MenuBackground", src: "../../Assets/images/MenuBackground.png" },
    { id: "forest", src: "../../Assets/images/background2.png" },
    { id: "arctic", src: "../../Assets/images/background3.png" },
    { id: "sky", src: "../../Assets/images/background4.png" },
    //{ id: "mastercrushed", src: "../../Assets/images/crush.png" },
    { id: "boss", src: "../../Assets/images/boss.png" },
    { id: "bonus", src: "../../Assets/images/bonus.png" },
    { id: "ruby", src: "../../Assets/images/ruby.png" },
    { id: "endback", src: "../../Assets/images/GameEnd.png" },
    { id: "intro", src: "../../Assets/images/intro.png" },
    { id: "beak", src: "../../Assets/images/beak.png" },
    { id: "bomb", src: "../../Assets/images/bomb.png" },
    { id: "enemy", src: "../../Assets/images/enemy.png" },
    { id: "enemytwo", src: "../../Assets/images/enemytwo.png" },
    { id: "WinnerBackground", src: "../../Assets/images/Winner.png" },
    
    // Add music
    { id: "backMusic", src: "../../Assets/audio/backmusic.mp3" },
    { id: "bgmchicken", src: "../../Assets/audio/chicken.mp3" },
    { id: "bgmcrush", src: "../../Assets/audio/crush.mp3" },
    { id: "bgmdead", src: "../../Assets/audio/dead.mp3" },
    { id: "bgmEnemy", src: "../../Assets/audio/enemy.mp3" },
    { id: "bgmGetheart", src: "../../Assets/audio/getheart.mp3" },
    { id: "bgmrestart", src: "../../Assets/audio/heart.mp3" },
    { id: "bgmplaying", src: "../../Assets/audio/playing.mp3" },
];

function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init(): void {
    // instantiate textureAtlas
    textureAtlas = new createjs.SpriteSheet(atlas);
    
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INTRO:
            // show the INTRO scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.LEVEL1_INTRO:
            // show the LEVEL1_INTRO scene
            stage.removeAllChildren();
            level1_intro = new scenes.Level1_Intro();
            currentScene = level1_intro;
            console.log("Starting LEVEL1_INTRO Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.LEVEL2_INTRO:
            // show the LEVEL2_INTRO scene
            stage.removeAllChildren();
            level2_intro = new scenes.Level2_Intro();
            currentScene = level2_intro;
            console.log("Starting LEVEL2_INTRO Scene");
            break;
        case config.Scene.LEVEL2_PLAY:
            // show the LEVEL2_PLAY scene
            stage.removeAllChildren();
            level2_play = new scenes.Level2_Play();
            currentScene = level2_play;
            console.log("Starting LEVEL2_PLAY Scene");
            break;
        case config.Scene.LEVEL3_INTRO:
            // show the LEVEL3_INTRO scene
            stage.removeAllChildren();
            level3_intro = new scenes.Level3_Intro();
            currentScene = level3_intro;
            console.log("Starting LEVEL3_INTRO Scene");
            break;
        case config.Scene.LEVEL3_PLAY:
            // show the LEVEL3_PLAY scene
            stage.removeAllChildren();
            level3_play = new scenes.Level3_Play();
            currentScene = level3_play;
            console.log("Starting LEVEL3_PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
        case config.Scene.WINNER:
            // show the END scene
            stage.removeAllChildren();
            winner = new scenes.Winner();
            currentScene = winner;
            console.log("Starting WINNER Scene");
            break;
    }

    console.log(currentScene.numChildren);
}

window.onload = preload;