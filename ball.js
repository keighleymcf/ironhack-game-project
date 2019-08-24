class Ball {
  constructor() {
    this.ball;
  }
  setup() {
    //   text("click to create a ball");
  }

  draw() {
    fill(color(255, 255, 255));
    ball = circle(WIDTH / 2, HEIGHT / 2, 100);
  }
}
