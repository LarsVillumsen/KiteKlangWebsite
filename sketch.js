function setup() {
  // Create a canvas
  inputCanvas = createCanvas(500, 500);
}

// Draw on the canvas when mouse is pressed
function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
