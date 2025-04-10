function setup() {

  createCanvas(600,600);
  background(250) ;
}


function drawCrescent(cx, cy, outerR, innerR) {
  fill(17, 1, 0);  // hair color
noStroke();
  // Draw the outer circle (big moon)
  ellipse(cx, cy, outerR * 2, outerR * 2);

  // Draw the inner circle (cutout part)
  fill(250);  // Background color (black) to create the cutout
  ellipse(cx + outerR - innerR +2, cy, innerR * 2, innerR * 2);
}
function draw() {
  
   
   // Hair
  fill(17, 1, 0);
  ellipse(310, 320, 400, 450);
  //right curls
  fill(17, 1, 0);
  circle (330, 530, 70, 70);
  fill(17, 1, 0);
  circle (370, 515, 70, 70);
  fill(17, 1, 0);
  circle (410, 490, 70, 70);
  fill(17, 1, 0);
  circle (450, 450, 70, 70);
  fill(17, 1, 0);
  circle (480, 400, 70, 70);
  fill(17, 1, 0);
  circle (490, 350, 70, 70);
  fill(17, 1, 0);
  circle (495, 290, 70, 70);
  fill(17, 1, 0);
  circle (490, 230, 70, 70);
  fill(17, 1, 0);
  circle (465, 180, 70, 70);
  fill(17, 1, 0);
  circle (425, 140, 70, 70);
  fill(17, 1, 0);
  circle (380, 115, 70, 70);
  fill(17, 1, 0);
  circle (330, 100, 70, 70);
  //left curls
    fill(17, 1, 0);
  circle (290, 530, 70, 70);
  fill(17, 1, 0);
  circle (250, 525, 70, 70);
  fill(17, 1, 0);
  circle (210, 500, 70, 70);
  fill(17, 1, 0);
  circle (160, 450, 70, 70); 
  fill(17, 1, 0);
  circle (140, 400, 70, 70);
  fill(17, 1, 0);
  circle (120, 350, 70, 70);
  fill(17, 1, 0);
  circle (110, 290, 70, 70);
  fill(17, 1, 0);
  circle (120, 230, 70, 70);
  fill(17, 1, 0);
  circle (140, 180, 70, 70);
  fill(17, 1, 0);
  circle (160, 140, 70, 70);
  fill(17, 1, 0);
  circle (200, 115, 70, 70);
  fill(17, 1, 0);
  circle (250, 100, 70, 70);
  fill (17, 1, 0);
  circle (290, 100, 70, 70) ;
  fill(17, 1, 0)
  circle (250, 480 , 70, 70);
  strokeWeight(0);
  //head
  fill (196, 164, 132) ;
  circle(310,300,300,550) ;
  
  //left eyeliner
  fill (0) ;
  arc (240, 270, 80, 60, TWO_PI, PI) ;
  fill(0);
  rect(185, 260, 100, 10);
  
  //right eyeliner
  fill (0) ;
  arc (380, 270, 80, 60, TWO_PI, PI) ;
  fill(0);
  rect(335, 260, 100, 10);
  
 //left eye
  fill (250) ;
  arc (250, 270, 70, 60, TWO_PI, PI) ;
  fill (0)
  arc(250, 270, 30, 30, TWO_PI, PI);
  
  //right eye
  fill (250) ;
  arc (370, 270, 70, 60, TWO_PI, PI) ;
  fill(0) ;
  arc (370, 270, 30, 30, TWO_PI, PI) ;
  
  //toungue
  fill(230, 120, 130);
  arc(310, 350, 60, 80, 0, PI);
  
  //mouth
    fill (0);
    rect (250,350,120,5,30);

  //neck
    fill (196, 164, 132);
    rect (260,400,100,175);
    
  // shirt
  fill(50, 50, 50);
  rect(130, 490, 360, 100, 20);

  //bangs
  fill(17, 1, 0);
  circle (330, 150, 50, 50);
    fill(17, 1, 0);
  circle (330, 180, 50, 50);
    fill(17, 1, 0);
  circle (330, 210, 50, 50);
    fill(17, 1, 0);
  circle (330, 230, 50, 50);
  //
    fill(17, 1, 0);
  circle (280, 150, 50, 50);
    fill(17, 1, 0);
  circle (280, 180, 50, 50);
    fill(17, 1, 0);
  circle (280, 210, 50, 50);
    fill(17, 1, 0);
  circle (280, 230, 50, 50);
  //
      fill(17, 1, 0);
  circle (230, 150, 50, 50);
    fill(17, 1, 0);
  circle (230, 180, 50, 50);
    fill(17, 1, 0);
  circle (230, 210, 50, 50);
    fill(17, 1, 0);
  circle (230, 230, 50, 50);
  //
      fill(17, 1, 0);
  circle (180, 210, 50, 50);
    fill(17, 1, 0);
  circle (180, 230, 50, 50);
    fill(17, 1, 0);
  circle (180, 250, 50, 50);
    fill(17, 1, 0);
  circle (180, 280, 50, 50);
//
      fill(17, 1, 0);
  circle (380, 150, 50, 50);
    fill(17, 1, 0);
  circle (380, 180, 50, 50);
    fill(17, 1, 0);
  circle (380, 210, 50, 50);
    fill(17, 1, 0);
  circle (380, 230, 50, 50);
  //
        fill(17, 1, 0);
  circle (430, 210, 50, 50);
    fill(17, 1, 0);
  circle (430, 230, 50, 50);
    fill(17, 1, 0);
  circle (430, 250, 50, 50);
    fill(17, 1, 0);
  circle (430, 280, 50, 50);
}
