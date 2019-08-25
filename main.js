console.log("console fdiosfjdosfjdosj");
const game = new Game();

function preload() {
  /* ??? font = loadFont("https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap")*/
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(color(255, 255, 255));
  game.setup();
}

function draw() {
  game.draw();
}

function start() {
  setTimeout(function() {
    const landing = document.getElementsByClassName("landing")[0];
    landing.style.visibility = "hidden";
  }, 1000);
}

// how to run setup only after click to start?
// why are two balls appearing?
