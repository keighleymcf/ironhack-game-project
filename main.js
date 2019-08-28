// var started = false;

var slider;
var sliderGravity;
let newBall = new Ball();
let font;

function preload() {
  font = loadFont("assets/font/Lato/Lato-Regular.ttf");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT, WEBGL);
  canvas.parent("canvas-container"); // append canvas here? would be nice to have margin so canvas isnt stuck at top
  textFont(font);
  newBall.setup();

  // gravity slider
  slider = createSlider(1, 9, 0.2);
  slider.position(200, halfHeight);
  slider.style("width", "150px");
}

function draw() {
  clear();
  background(color("rgba(0, 0, 0, 0.5)"));
  sliderGravity = slider.value() * 0.1;
  newBall.draw();
}

// show instructions in levels

if (newBall.level === 0) {
  document.querySelector(
    "#instruction-container"
  ).innerText = ballSizeInstructions;
}

// mouse press functions need to be located in main.js to avoid problems with drawing
function mousePressed() {
  if (/*newBall.level === 3 && */ newBall.rollover) {
    newBall.dragging = true;
  }
}

// function clickBtn() {
//   newBall.level++;
//   console.log(newBall.level);
// };

function mouseReleased() {
  // Quit dragging
  newBall.dragging = false;
}

function keyPressed() {
  // bounce ball to experience "weight"
  if (keyCode === 32) {
    newBall.jump();
  }
}

function doubleClicked() {
  // send ball away
  newBall.ballDisappearActive = true;
}

function keyPressed() {
  // bounce ball to experience "weight"
  if (keyCode === 32) {
    // space
    newBall.jump();
  }
  if (keyCode === 78) {
    // n key
    resetGame();
  }
}

/*
function resetGame() {
  newBall = new Ball();
  console.log("new");
}*/
