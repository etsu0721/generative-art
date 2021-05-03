let x = 0; // position on x-axis
let inc = 3; // increment value
let r; // red RGB value
let g; // green RGB value
let b; // blue RGB value
let fps = 30; // frames per second
const capture_obj = new CCapture({ // canvas capture object
  framerate: fps,
  format: "webm",
  name: "broken-pastel-scanner",
  quality: 100,
  verbose: true,
});
let canvas_obj; // variable for canvas object

function setup() {
  canvas_obj = createCanvas(400, 400);
  frameRate(fps);
  background(255, 255, 255);
  r = random(200, 255);
  g = random(200, 255);
  b = random(200, 255);
}

function draw() {
  if (frameCount === 1) {
    capture_obj.start();
  }

  strokeWeight(3);
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

  capture_obj.capture(canvas_obj.canvas);
  
  if (frameCount === fps * 20) {
    capture_obj.stop();
    capture_obj.save();
    }
}

function mousePressed() {
  inc += 0.1;
  noLoop(); // pause continuous execution
}

function mouseReleased() {
  loop(); // resume continuous execution
}