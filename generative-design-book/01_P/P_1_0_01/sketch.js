/**
 * changing colors and size by moving the mouse
 *
 * MOUSE
 * position x          : size
 * position y          : color
 *
 * KEYS
 * s                   : save png
 */

function setup() {
  createCanvas(720, 720);
  // noCursor(); //show cursor

  colorMode(HSB, 360, 100, 100); // use hsb with max values for h, s, b
  rectMode(CENTER); // http://processingjs.org/reference/rectMode_/
  noStroke(); // disables drawing the stroke (outline)
}

function draw() {
  background(mouseY / 2, 100, 100); // values for H, S, B

  fill(360 - mouseY / 2, 100, 100); // sets the color used to fill shapes
  rect(360, 360, mouseX + 1, mouseX + 1); // location: x, y, and size:width, length
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
