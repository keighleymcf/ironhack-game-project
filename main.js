console.log("console fdiosfjdosfjdosj");
const game = new Game();

function preload() {}

function setup() {
  drawCanvas(800, 800);
  landingPage.setup();
}

function draw() {
  landingPage.draw();
}

function start() {
  const landing = document.getElementsByClassName("landing")[0];
  landing.style.visibility = "hidden";
}
