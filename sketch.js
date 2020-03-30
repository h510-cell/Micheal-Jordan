var Sun; 
var planet1;
var planet2;
var planet3;
var planet4;
function setup() {
  createCanvas(680, 400);
  frameRate(30);
  textAlign(CENTER);
}

function draw() {
  background(color(0,0,255));
 var Sun = circle(100,200,200,200)
 var planet1 = circle(300,200,50,50)
 var planet2 = circle(400,200,50,50);
 var planet3 = circle(500,200,50,50);
 var planet4 = circle(600,200,50,50);
  circle.debug = true;
}
