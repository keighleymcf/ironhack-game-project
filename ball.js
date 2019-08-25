class Ball {
  constructor() {
    this.ball;
  }
  setup() {
    //   text("click to create a ball");
  }

  draw() {
    fill(color(0, 0, 0));
    if (mouseButton == LEFT) {
      circle(WIDTH / 2, HEIGHT / 2, 100);
      console.log("mouseclick"); // logging a million console logs but not showing ball, why??
    }
  }
}
