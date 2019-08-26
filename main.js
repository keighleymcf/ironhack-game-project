// var started = false;
const newBall = new Ball();
// let font; // import google font??

function preload() {
  //font = loadFont("https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  // canvas.parent(".canvasContainer");
  // canvas.parent("canvasContainer"); // append canvas here? would be nice to have margin so canvas isnt stuck at top
  newBall.setup();
}

function draw() {
  clear();
  background(color("rgba(0, 0, 0, 0.5)"));
  newBall.draw();
}
