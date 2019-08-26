class Ball {
  constructor() {
    this.ball;
    this.ballSize = ballSize;
    this.instruction = ballSizeInstructions;
    this.level = 0;
    //this.ballColor = ballColor;
  }

  setup() {
    textAlign(CENTER, CENTER);
    textSize(28);
  }

  draw() {
    // add gradient "glowing" border later? or make gradient in background
    fill(color(239, 242, 245));
    //noStroke();
    this.sizeBall();
  }

  showInstructions(instructionText) {
    push();
    fill("red");
    text(instructionText, instructionX, instructionY);
    pop();
  }

  createButton(input) {
    // add fill matching styling of landing page start button
    push();
    strokeWeight(3);
    stroke(102, 103, 134);
    rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);
    noStroke();
    fill("red");
    text(input, btnTextX, btnTextY);
    pop();
  }

  // functions for levels

  sizeBall() {
    this.showInstructions(ballSizeInstructions);

    this.createButton(ballSizeBtnText);
    circle(WIDTH / 2, HEIGHT / 2, ballSize);

    if (
      keyIsDown(32) &&
      ballSize <= HEIGHT * 0.6 /*&& sizeSetComplete === false*/
    ) {
      // space bar
      circle(WIDTH / 2, HEIGHT / 2, (ballSize += 5));
      console.log("space");
    } else if (keyIsDown(40) && ballSize >= HEIGHT * 0.05) {
      //down arrow
      // need to clear old circles
      circle(WIDTH / 2, HEIGHT / 2, (ballSize -= 5));
      console.log("down");
    }
    // click button to set size and move on to color picker
  }

  //let sizeSetComplete = false
  //function clickSizeSetCompleteBtn() {
}

/* ADD FUNCTION LATER to reduce size of ball!!
    else if (keyIsDown(40)) {
      //down arrow
      fill(color(255, 255, 255));
      strokeWeight(2);
      stroke(color(23, 45, 6));
      circle(WIDTH / 2, HEIGHT / 2, (ballSize += 5));
      ballSize -= 5;
      console.log("down");
    } */
