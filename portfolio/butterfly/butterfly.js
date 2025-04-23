var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "begin";
var gameState = "L1";
var img;
var img2;
var img3

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('https://fairiesnstardust.github.io/images/new.png');
  img2 = loadImage('https://fairiesnstardust.github.io/images/garden.png');
  img3 = loadImage('https://fairiesnstardust.github.io/images/net.png');
}
function setup() {
 createCanvas (600,600);
 textAlign(CENTER);
 textSize(20);
}


function draw() {
 background(img2)
 if (gameState == "L1" ){
 levelOne();
 }
 if (gameState == "L2" ){
 levelTwo();
 }
  if (gameState == "L3" ){
 levelThree();
 }
  if (gameState == "Win" ){
 levelWin();
 }

 text(("Score:" + score), width/2, 40);
} // end of draw

function levelOne() {
  //cursor("https://fairiesnstardust.github.io/images/net.png", 0, 0);
  text ("Level 1", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize){
    ballx = random (width);
    bally = random(height) ;
    score = score + 1;
  }
  if (score >= 5) {
    gameState = "L2" ;
}
  line(ballx + ballSize/2 ,bally + ballSize/2 ,mouseX,mouseY);
  //ellipse (ballx, bally, ballSize, ballSize);
  image(img, ballx, bally, ballSize, ballSize);
} // end of level 1

function levelTwo() {
  text ("Level 2", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random (width);
    bally = random(height) ;
    score = score + 1;
  }
  if (score >= 10) {
    gameState = "L3";
}
  // line(ballx,bally,mouseX,mouseY);
  //ellipse(ballx, bally, ballSize, ballSize);
    image(img, ballx, bally, ballSize, ballSize);
} // end of level 2

function levelThree() {
  text ("Level 3", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random (width-5);
    bally = random(height-5) ;
    score = score + 1;
    ballSize = ballSize - 4
  }
  if (score >= 20) {
    gameState = "Win"
}
  // line(ballx,bally,mouseX,mouseY);
  //ellipse(ballx, bally, ballSize, ballSize);
    image(img, ballx, bally, ballSize, ballSize);
} // end of level 2

function levelWin (){
  background(random (255))
  text (" You Win!", width/2, height/2);
  
  if (mouseIsPressed){
    score=0;
    gameState= "L1";
    ballSize=40;
  }
}
