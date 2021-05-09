// Initial circle position
let x = 50;
let y = -25;
let offset_cir = false;

function setup() {
  createCanvas(400, 400);
  background(249, 246, 238); // Background: Bone White
}

function draw() {
  for (y; y <= height + 50; y += 51) {// for height of canvas,
    if (offset_cir) {// if circles should be offset
      draw_cirles(0, 101, y);
      offset_cir = false; // Turn off offset for next iteration
    }
    else {// otherwise circles should not be offset
      draw_cirles(50, 101, y);
      offset_cir = true; // Turn on offset for next iteration
    }
  }
  noLoop();
  //save('pillow-random-colors-filled.png')
}

function draw_cirles(x_start, x_inc, y) {
  for (x = x_start; x <= width + 50; x += x_inc) {
    //stroke(53, 57, 53); // Circle border: Onyx 
    //noFill(); // Circle fill: no fill
    fill(random(255), random(255), random(255)); // Circle fill: random RGB colors
    stroke(random(255), random(255), random(255)); // Circle border: random RGB colors
    strokeWeight(4);
    circle(x, y, 100);
  }
}
