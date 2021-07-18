/**
 * random walker
 */

 // use mouse locations or draw the first position in the center


let walkers = [];

function setup () {

  createCanvas(720, 720);
  const x = random(width);
  const y = random(height);
  for (let i = 0; i < 20; i++) {
    walkers.push(new Walker(x, y));
  }
  noStroke();
  draw();
}

function mouseClicked () {
  for (let i = 0; i < 20; i++) {
    walkers.push(new Walker(mouseX, mouseY));
  }
}

class Walker {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.velocityX = random(-2, 2);
    this.velocityY = random(-2, 2);
    this.draw();
  }
  // check whether the walker is within the boundaries
  isOut () {
    return (this.x < 0 || this.x > width || this.y < 0 || this.y > height);
  }
  velocity () {
    this.velocityX += map(noise(this.x * 0.005, this.y * 0.005, millis() * 0.001), 0, 1, -1, 1);
    this.velocityY += map(noise(this.y * 0.005, this.x * 0.005, millis() * 0.001), 0, 1, -1, 1);
  }
  move () {  
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
  draw () {
    fill(0, 80);
    circle(this.x, this.y, 5, 5);
  }
}

function draw () {
  walkers.forEach(walker => {
    if (!walker.isOut()) {
      walker.velocity();
      walker.move();
      walker.draw();
    }
  });
}