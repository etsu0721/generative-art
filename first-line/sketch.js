function setup() {
  createCanvas(400, 400);
  background(255, 236, 217);
}

function draw() {
  strokeWeight(4);  // Specify line thinkness
  line(200, 50, 200, 350); // Draw line
  noLoop(); // Keep code from continuously executing
  //save('my-first-line.jpg'); // save still sketch
}
