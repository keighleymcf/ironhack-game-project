class Ball {
  constructor() {
    this.ball;
    this.level = 0;
    this.ballSize = ballSize;
    this.ballX = ballX;
    this.ballY = ballY;
    this.ballColor;
    this.ballWeight = 1;
    this.instruction = ballSizeInstructions;
    this.rollover = false;
    this.dragging = false;
    //this.ballColor = ballColor;
    this.ballLeftEdge = this.ballX - this.ballSize + WIDTH / 2;
    this.ballRightEdge = this.ballX + this.ballSize + WIDTH / 2;
    this.ballBottomEdge = this.ballY - this.ballSize + HEIGHT / 2;
    this.ballTopEdge = this.ballY + this.ballSize + HEIGHT / 2;
  }

  setup() {
    textAlign(CENTER, CENTER);
    textSize(28);
    this.ballColor = color(239, 242, 245);
    //  this.weightSlider();

    //ball coordinates
  }

  draw() {
    // add gradient "glowing" border later? or make gradient in background

    // create ball
    fill(this.ballColor);
    noStroke();
    ambientLight(80);
    directionalLight(255, 255, 255, 200, 200, -300);
    //translate(this.ballX, this.ballY);
    this.ball = sphere(this.ballSize, 64, 64);
    // if (
    //   mouseX > ballLeftEdge &&
    //   mouseX < ballRightEdge &&
    //   mouseY > ballBottomEdge &&
    //   mouseY < ballTopEdge
    // ) {
    //   console.log("YES", ballBottomEdge);
    // } else {
    //   console.log("no");
    // }
    this.moveBall();

    //activate functionalities
    if (this.level === 0) {
      this.sizeBall();
    } else if (this.level === 1) {
      this.colorBall();
    } else if (this.level === 2) {
      this.weightBall();
    }
  }

  // Instructions and button
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

    if (keyIsDown(38) && this.ballSize <= HEIGHT * 0.4) {
      // up arrow
      this.ballSize += 3;
    } else if (keyIsDown(40) && this.ballSize >= HEIGHT * 0.05) {
      //down arrow
      this.ballSize -= 3;
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

  //drag and place ball with mouse
  moveBall() {
    //var x, y, w, h;          // Location and size
    // var offsetX, offsetY;
    if (
      mouseX > this.ballLeftEdge &&
      mouseX < this.ballRightEdge &&
      mouseY > this.ballBottomEdge &&
      mouseY < this.ballTopEdge
    ) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
    console.log("rollover", this.rollover);
    console.log("draggin", this.dragging);

    // Adjust location if being dragged
    if (this.dragging) {
      this.ballX = mouseX - WIDTH / 2;
      this.ballY = mouseY - WIDTH / 2;
      this.ball.translate(this.ballX, this.ballY);
    }
  }

  // set surface texture
  // p5 shininess()
}

function mousePressed() {
  // Did I click on the rectangle?
  if (this.rollover) {
    this.dragging = true;
    console.log("dragging");
    // If so, keep track of relative location of click to corner of rectangle
    // offsetX = x-mouseX;
    // offsetY = y-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  this.dragging = false;
  console.log("release");
}
