var slider;
var sliderGravity;
let colorPicker;
let newBall = new Ball();
let font;
document.querySelector("#picker-label").style.visibility = "hidden";
document.querySelector("#slider-label").style.visibility = "hidden";
document.querySelector("#restart-btn").style.display = "none";

function preload() {
  font = loadFont("assets/font/Lato/Lato-Regular.ttf");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT, WEBGL);
  canvas.parent("canvas-container"); // append canvas here? would be nice to have margin so canvas isnt stuck at top
  textFont(font);
  newBall.setup();
  setLevel();

  //
  colorPicker = createColorPicker(color("white"));
  colorPicker.position(pickerX, pickerY);

  // gravity slider
  slider = createSlider(1, 9, 0.2);
  slider.position(sliderX, sliderY);
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
  // size level
  if (newBall.level === 0) {
    console.log("level0");
    document.querySelector(
      "#instruction-container"
    ).innerHTML = ballSizeInstructions;
  } else if (newBall.level === 1) {
    // activate color level
    console.log("level1");
    document.querySelector(
      "#instruction-container"
    ).innerHTML = ballColorInstructions;
    document.querySelector("#picker-label").style.visibility = "visible";
  } else if (newBall.level === 2) {
    // activate weight level
    console.log("level2");
    document.querySelector(
      "#instruction-container"
    ).innerHTML = ballWeightInstructions;
    document.querySelector("#slider-label").style.visibility = "visible";
    document.querySelector("#picker-label").style.visibility = "hidden";
  } else if (newBall.level === 3) {
    // activate send away level
    console.log("level3");
    document.querySelector(
      "#instruction-container"
    ).innerHTML = ballDisappearInstructions;
    document.querySelector("#slider-label").style.visibility = "hidden";
    document.querySelector("#game-btn").style.display = "none";
    document.querySelector("#restart-btn").style.display = "flex";
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
