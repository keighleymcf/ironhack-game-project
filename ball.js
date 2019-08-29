class Ball {
  constructor() {
    this.ball;
    this.level = 0;

    // ball characteristics
    this.ballSize = ballSize;
    this.ballColor;
    this.ambientLight = 80;
    this.ballWeight = 1;
    this.ballX = ballX;
    this.ballZ = ballZ;
    // Y values defined in setup function because of jumping

    // ball physics
    this.gravity = 0.2;
    this.velocity = 0;
    this.jumpCount = 0;

    // activator to send ball away
    this.ballDisappearActive = false;
  }

  setup() {
    this.ballColor = color(239, 242, 245);

    //ball coordinates
    this.ballY = ballY;
    this.originalY = this.ballY;
    this.apex = 0;
  }

  draw() {
    fill(this.ballColor);
    noStroke();
    ambientLight(this.ambientLight);
    directionalLight(255, 255, 255, 200, 200, -300);
    translate(this.ballX, this.ballY, this.ballZ);
    this.ball = sphere(this.ballSize, 64, 64);

    //activate functionalities based on level
    if (this.level === 0) {
      this.sizeBall();
    } else if (this.level === 1) {
      this.colorBall();
    } else if (this.level === 2) {
      this.weightBall();
    } else if (this.level === 3) {
      this.disappearBall();
    }
  }

  // functions for levels

  // 0 set size
  sizeBall() {
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
  
    colorPicker.input(() => {
      this.ballColor = colorPicker.color();
      fill(this.ballColor);
    });
  }

  // 2 set ball weight
  weightBall = () => {
    // adjusting ball physics
    this.gravity = sliderGravity;
    this.velocity += this.gravity;
    this.ballY += this.velocity;

    // falling and bouncing
    if (this.ballY > this.originalY) {
      this.ballY = this.originalY;
      this.velocity = -this.apex;
      this.apex /= 1.5;
      this.jumpCount = 0;
    }
  };
  jump() {
    // tossing the ball up
    if (this.jumpCount < 1) {
      this.velocity = -8;
      this.apex = 6;
    }
  }

  // 3 send ball away
  disappearBall() {
    if (this.ballDisappearActive === true) {
      this.ballZ -= 0.4 - this.ballZ * 0.035;
      this.ballX += 0.2 + this.ballX * 0.035;
      this.ballY -= 0.2 - this.ballY * 0.035;
    }
  }
}
