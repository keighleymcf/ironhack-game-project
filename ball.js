class Ball {
  constructor() {
    this.ball;
    this.level = 0;
    this.ballSize = ballSize;
    this.ballX = ballX;
    // this.ballY = ballY;
    this.ballZ = ballZ;
    this.ballColor;
    this.ambientLight = 80;
    this.ballWeight = 1;
    this.gravity = 0.2;
    this.velocity = 0;
    this.jumpCount = 0;
    // this.originalY = this.ballY;

    this.instruction = ballSizeInstructions;
    this.ballLeftEdge = this.ballX - this.ballSize + WIDTH / 2;
    this.ballRightEdge = this.ballX + this.ballSize + WIDTH / 2;
    this.ballBottomEdge = this.ballY - this.ballSize + HEIGHT / 2;
    this.ballTopEdge = this.ballY + this.ballSize + HEIGHT / 2;

    this.rollover = false;
    this.dragging = false;
    this.ballDisappearActive = false;
  }

  setup() {
    textAlign(CENTER, CENTER);
    textSize(32);
    this.ballColor = color(239, 242, 245);
    //  this.weightSlider();
    this.ballY = ballY;
    this.originalY = this.ballY;

    //ball coordinates
  }

  draw() {
    // add gradient "glowing" border later? or make gradient in background

    // create moveable ball
    fill(this.ballColor);
    noStroke();
    ambientLight(this.ambientLight);
    directionalLight(255, 255, 255, 200, 200, -300);
    //this.moveBall();
    this.weightBall();
    translate(this.ballX, this.ballY, this.ballZ);
    this.ball = sphere(this.ballSize, 64, 64);

    //activate functionalities based on level
    if (this.level === 0) {
      showInstructions(ballSizeInstructions);
      this.sizeBall();
    } else if (this.level === 1) {
      this.colorBall();
    } else if (this.level === 2) {
      // this.weightBall();
    } else if (this.level === 3) {
      this.disappearBall();
    }
  }

  // Instructions and button FIX INSTRUCTIONS

  // functions for levels

  // 0 set size
  sizeBall() {
    //this.showInstructions(ballSizeInstructions);
    // this.createBtn(ballSizeBtnText);

    if (keyIsDown(38) && this.ballSize <= HEIGHT * 0.4) {
      // up arrow
      this.ballSize += 3;
    } else if (keyIsDown(40) && this.ballSize >= HEIGHT * 0.05) {
      //down arrow
      this.ballSize -= 3;
    }
  }

  // 1 set color
  colorBall() {
    showInstructions(ballColorInstructions);
    // this.createBtn(ballColorBtnText);
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

  // 2 set physics and set weight
  weightBall = () => {
    showInstructions(ballWeightInstructions);
    // this.createBtn(ballWeightBtnText);
    // this.weightSlider();
    this.velocity += this.gravity;
    this.ballY += this.velocity;

    if (this.ballY > this.originalY) {
      this.ballY = this.originalY;
      this.jumpCount = 0;
    }
  };

  jump() {
    if (this.jumpCount < 1) {
      this.velocity = -6;
      this.jumpCount++;
    }
  }
  /*
  weightSlider() {
    let slider = createSlider(0, 255, 100);
    slider.position(100, 100);
    slider.style("width", "80px");
  }*/

  // 3 disappear ball
  disappearBall() {
    showInstructions(ballDisappearInstructions);

    if (this.ballDisappearActive === true) {
      this.ballZ -= 0.4 - this.ballZ * 0.035;
      this.ballX += 0.2 + this.ballX * 0.035 /*pow(this.ballX, 0.3)*/;
      this.ballY -= 0.2 - this.ballY * 0.035;

      //this.ambientLight -= 2;
      // fix lighting if time
    }
  }
}
