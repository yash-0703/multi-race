var canvas, backgroundImage;

var gameState = 0;

var playerCount;

var allPlayers;

var distance = 0;

var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1png ,car2png, car3png, car4png;
var trackjpg;
function preload(){
car1png= loadImage ("images/car1.png")
car2png= loadImage ("images/car2.png")
car3png= loadImage ("images/car3.png")
car4png= loadImage ("images/car4.png")
trackjpg= loadImage ("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 2, displayHeight-2);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState == 2 ){
    game.end()
  }
}

