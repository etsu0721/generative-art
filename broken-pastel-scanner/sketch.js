let x = 0; // position on x-axis
let inc = 1; // increment value
var r; // red RGB value
var g; // green RGB value
var b; // blue RGB value
function setup() {
  createCanvas(400, 400);
  background(255, 255, 255);
  r = random(200, 255);
  g = random(200, 255);
  b = random(200, 255);
}

function draw() {
  strokeWeight(3)
  x += inc; // increment x
  if (x > width) { // if x goes beyond width, resample color and start x over at 0
    r = random(200, 255);
    g = random(200, 255);
    b = random(200, 255);
    x = 0;
  }
  fill(r ,g, b); // set fill color for shape
  rect(0, 0, x, height); // fill area to the left of x
  line(x, 0, x, height); // draw verticle line at x
}

function mousePressed() {
  inc += 0.1;
  noLoop(); // pause continuous execution
}

function mouseReleased() {
  loop(); // resume continuous execution
}