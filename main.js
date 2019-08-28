// var started = false;
const newBall = new Ball();
let font;

function preload() {
  font = loadFont("assets/font/Lato/Lato-Regular.ttf");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT, WEBGL);
  // canvas.parent(".canvasContainer"); // append canvas here? would be nice to have margin so canvas isnt stuck at top
  textFont(font);
  newBall.setup();
}

function draw() {
  clear();
  background(color("rgba(0, 0, 0, 0.5)"));
  newBall.draw();
}

// mouse press functions need to be located in main.js to avoid problems with drawing
function mousePressed() {
  if (/*newBall.level === 3 && */ newBall.rollover) {
    newBall.dragging = true;
  }
}

function mouseReleased() {
  // Quit dragging
  newBall.dragging = false;
}

function keyPressed() {
  // bounce ball to experience "weight"
  if (keyCode === 32) {
    newBall.velocity = -8;
  }
}

function doubleClicked() {
  // send ball away
  newBall.ballDisappearActive = true;
}
