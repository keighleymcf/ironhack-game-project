// var started = false;
const newBall = new Ball();
// let font; // import google font??

function preload() {
  //font = loadFont("https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  // canvas.parent("canvasContainer"); // append canvas here? would be nice to have margin so canvas isnt stuck at top
  newBall.setup();
}

function draw() {
  clear();
  background(color("black"));
  newBall.draw();
}

// function start() {
//   setTimeout(function() {
//     const landing = document.querySelector(".landing");
//     landing.style.visibility = "hidden";
//     started = true;
//     loop();
//     console.log(started);
//     // const canvasContainer = document.querySelector(".canvasContainer");
//     // canvasContainer.style.visibility = "visible";
//   }, 1000);
// }
