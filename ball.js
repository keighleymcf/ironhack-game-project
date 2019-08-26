class Ball {
  constructor() {
    this.ball;
    this.level = 0;
    this.ballSize = ballSize;
    this.ballColor;
    this.instruction = ballSizeInstructions;
    //this.ballColor = ballColor;
  }

  setup() {
    textAlign(CENTER, CENTER);
    textSize(28);
    this.ballColor = color(239, 242, 245);
  }

  draw() {
    // add gradient "glowing" border later? or make gradient in background
    fill(this.ballColor);
    //noStroke();

    this.ball = circle(WIDTH / 2, HEIGHT / 2, ballSize);

    if (this.level === 0) {
      this.sizeBall();
    } else if (this.level === 1) {
      this.colorBall();
    }
    //else if (this.level === 1) {
    //  this.colorBall();
    //}
  }

  showInstructions(instructionText) {
    push();
    fill("white");
    text(instructionText, instructionX, instructionY);
    pop();
  }

  createBtn(input) {
    // add fill matching styling of landing page start button
    let btn = createButton(input);
    btn.size(buttonWidth, buttonHeight);
    //btn.parent(".canvasContainer");
    btn.position(buttonX, buttonY);
    btn.style("background-color", "white");
    btn.mouseClicked(this.clickBtn);
  }

  clickBtn = () => {
    this.level++;
    console.log(this.level);
  };

  // functions for levels

  sizeBall() {
    this.showInstructions(ballSizeInstructions);
    this.createBtn(ballSizeBtnText);

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
  }

  colorBall() {
    this.showInstructions(ballColorInstructions);
    this.createBtn(ballColorBtnText);
    this.colorPicker();

    // colorPicker = <input class="jscolor" value="ab2567">;
  }

  colorPicker() {
    let colorPicker = createColorPicker(color("white"));
    colorPicker.position(pickerX, pickerY);

    colorPicker.input(() => {
      this.ballColor = colorPicker.color();
      console.log(this.ballColor);
      fill(this.ballColor);
      circle(WIDTH / 2, HEIGHT / 2, ballSize);
    });
  }
  //let sizeSetComplete = false
  //function clickSizeSetCompleteBtn() {
}
