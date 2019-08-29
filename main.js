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
  setLevel();

  // gravity slider
  slider = createSlider(1, 9, 0.2);
  slider.position(200, halfHeight);
  slider.style("width", "150px");
  console.log(newBall.level);
}

function draw() {
  clear();
  background(color("rgba(0, 0, 0, 0.5)"));
  sliderGravity = slider.value() * 0.1;
  newBall.draw();
}

// show instructions in levels
function setLevel() {
  if (newBall.level === 0) {
    console.log("level0");
    document.querySelector(
      "#instruction-container"
    ).innerText = ballSizeInstructions;
  } else if (newBall.level === 1) {
    console.log("level1");
    document.querySelector(
      "#instruction-container"
    ).innerText = ballColorInstructions;
  } else if (newBall.level === 2) {
    console.log("level2");
    document.querySelector(
      "#instruction-container"
    ).innerText = ballWeightInstructions;
  } else if (newBall.level === 3) {
    console.log("level3");
    document.querySelector(
      "#instruction-container"
    ).innerText = ballDisappearInstructions;
  }
}


// change level on click
function clickBtn() {
  newBall.level++;
  setLevel();
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
  console.log("disappear");
}

function keyPressed() {
  // bounce ball to experience "weight"
  if (keyCode === 32) {
    // space
    newBall.jump();
  }
  // if (keyCode === 78) {
  //   // n key
  //   resetGame();
  // }
}

/*
function resetGame() {
  newBall = new Ball();
  console.log("new");
}*/
