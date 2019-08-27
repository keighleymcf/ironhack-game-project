class Ball {
  constructor() {
    this.ball;
    this.level = 0;
    this.ballSize = ballSize;
    this.ballColor;
    this.ballWeight = 1;
    this.instruction = ballSizeInstructions;
    //this.ballColor = ballColor;
  }

  setup() {
    textAlign(CENTER, CENTER);
    textSize(28);
    this.ballColor = color(239, 242, 245);
    //  this.weightSlider();
  }

  draw() {
    // add gradient "glowing" border later? or make gradient in background
    fill(this.ballColor);
    noStroke();
    ambientLight(80);
    directionalLight(255, 255, 255, 200, 200, -300);

    this.ball = sphere(ballSize, 64, 64);

    if (this.level === 0) {
      this.sizeBall();
    } else if (this.level === 1) {
      this.colorBall();
    } else if (this.level === 2) {
      this.weightBall();
    }
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

  // set size
  sizeBall() {
    this.showInstructions(ballSizeInstructions);
    this.createBtn(ballSizeBtnText);

    if (keyIsDown(38) && ballSize <= HEIGHT * 0.4) {
      // up arrow
      ballSize += 3;
    } else if (keyIsDown(40) && ballSize >= HEIGHT * 0.05) {
      //down arrow
      ballSize -= 3;
    }
  }

  // set color
  colorBall() {
    this.showInstructions(ballColorInstructions);
    this.createBtn(ballColorBtnText);
    this.colorPicker();
  }

  colorPicker() {
    let colorPicker = createColorPicker(color("white"));
    colorPicker.position(pickerX, pickerY);

    colorPicker.input(() => {
      this.ballColor = colorPicker.color();
      fill(this.ballColor);
    });
  }

  // set weight

  weightBall() {
    this.showInstructions(ballWeightInstructions);
    this.createBtn(ballWeightBtnText);
    // if mousePressed() {
    //   this.ball.position = (mouseX, mouseY);
    // }
    // this.weightSlider();
  }

  weightSlider() {
    let slider = createSlider(0, 255, 100);
    slider.position(100, 100);
    slider.style("width", "80px");
  }

  // set surface texture
  // p5 shininess()
}
