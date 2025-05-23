var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var initials ='nch'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('leaf.png');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://fairiesnstardust.github.io/images/leaf.png');
  img2 = loadImage('https://fairiesnstardust.github.io/images/flower.png');
  img3 = loadImage('https://fairiesnstardust.github.io/images/sunflower.png');
  img4 = loadImage('https://fairiesnstardust.github.io/images/purplee.png');
  img5 = loadImage('https://fairiesnstardust.github.io/images/grass.png');
  img6 = loadImage('https://fairiesnstardust.github.io/images/rose.png');
  img7 = loadImage('https://fairiesnstardust.github.io/images/sky.jpg');
  img8 = loadImage('https://fairiesnstardust.github.io/images/butterfly.png');
  img9 = loadImage('https://fairiesnstardust.github.io/images/blubutter.png');
  img10 = loadImage('https://fairiesnstardust.github.io/images/lily.png');
  img11 = loadImage('https://fairiesnstardust.github.io/images/poppy.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(img7);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    strokeWeight(03);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool

    strokeWeight(08);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool

    strokeWeight(08)
    stroke(34, 139, 34);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {

    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
    stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(200, 20, 20);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {

    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'l' || toolChoice == 'L') { // g places the image we pre-loaded
    image(img, mouseX- 30, mouseY -45, 50, 50);
  } else if (toolChoice == 'f' || toolChoice == 'F') { // g places the image we pre-loaded
    image(img2, mouseX- 25, mouseY -25, 50, 50);
  } else if (toolChoice == 's' || toolChoice == 'S') { // g places the image we pre-loaded
    image(img3, mouseX- 25, mouseY -25, 50, 50);
  } else if (toolChoice == 'u' || toolChoice == 'U') { // g places the image we pre-loaded
    image(img4, mouseX- 25, mouseY -25, 50, 50);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img5, mouseX- 25, mouseY -25, 50, 50);
  } else if (toolChoice == 'r' || toolChoice == 'R') { // g places the image we pre-loaded
    image(img6, mouseX- 25, mouseY -25, 50, 50);
  } else if (toolChoice == 'o' || toolChoice == 'O') { // g places the image we pre-loaded
    image(img8, mouseX- 25, mouseY -25, 50, 50);
  } else if (toolChoice == 'b' || toolChoice == 'B') { // g places the image we pre-loaded
    image(img9, mouseX- 25, mouseY -25, 50, 50);
  } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    image(img10, mouseX- 25, mouseY -25, 50, 50);
  } else if (toolChoice == 'y' || toolChoice == 'Y') { // g places the image we pre-loaded
    image(img11, mouseX- 25, mouseY -25, 50, 50);
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(img7); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
