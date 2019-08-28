// var started = false;
const newBall = new Ball();
let font; // import google font??

function preload() {
  //font = loadFont("https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT, WEBGL);
  // canvas.parent(".canvasContainer"); // append canvas here? would be nice to have margin so canvas isnt stuck at top
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
  if (keyCode === 32) {
    newBall.velocity = -8;
  }
}

function doubleClicked() {
  newBall.ballDisappearActive = true;
  console.log(newBall.ballDisappearActive);
}
