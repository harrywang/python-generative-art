/**
 * changing the color circle by moving the mouse.
 *
 * MOUSE
 * position x          : saturation
 * position y          : brightness
 *
 * KEYS
 * 1-5                 : number of segments
 * s                   : save png
 */

var segmentCount = 24; // # of segments in the color wheel, press number 1, ... 5 to change this
var radius = 300; // size of the wheel

function setup() {
  createCanvas(800, 800); // size of the canvas
  noStroke(); // disables drawing the stroke (outline)
}

function draw() {

  colorMode(HSB, 360, width, height);
  background(360, 0, height);

  var angleStep = 360 / segmentCount;

  // see https://p5js.org/reference/#/p5/beginShape
  beginShape(TRIANGLE_FAN); // see explanation below
  vertex(width / 2, height / 2);  // center vertex

  // loop to generate the vertices needed for TRIANGLE_FAN, see the notes below for details
  for (var angle = 0; angle <= 360; angle += angleStep) {
    
    // width / 2 is the center of screen x 
    // a figure is shown below to illustrate how vx and vy are calculated
    var vx = width / 2 + cos(radians(angle)) * radius;
    var vy = height / 2 + sin(radians(angle)) * radius;
    vertex(vx, vy);  // specify the next vertex based on the angle

    // hue=angle, saturation = mouse x, brightness = mouse y
    fill(angle, mouseX, mouseY);
  }

  endShape();
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  switch (key) {
  case '1':
    segmentCount = 360;
    break;
  case '2':
    segmentCount = 45;
    break;
  case '3':
    segmentCount = 24;
    break;
  case '4':
    segmentCount = 12;
    break;
  case '5':
    segmentCount = 6;
    break;
  }
}
