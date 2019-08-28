
  //drag and place ball with mouse
  moveBall() {
    // ensure mouse is over ball (see coordinates in constructor function)
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

    // Adjust location if being dragged
    if (this.dragging) {
      this.ballX = mouseX - WIDTH / 2;
      this.ballY = mouseY - halfHeight; // There were problems recognizing the value of WIDTH/2, so saved it in a variable
      this.ballLeftEdge = this.ballX - this.ballSize + WIDTH / 2;
      this.ballRightEdge = this.ballX + this.ballSize + WIDTH / 2;
      this.ballBottomEdge = this.ballY - this.ballSize + HEIGHT / 2;
      this.ballTopEdge = this.ballY + this.ballSize + HEIGHT / 2;
    }
  }

  // start over button
      /*
      let startOverBtn = createButton(startOverBtnText);
      startOverBtn.size(buttonWidth, buttonHeight);
      //btn.parent(".canvasContainer");
      startOverBtn.position(CENTER, CENTER);
      startOverBtn.style("background-color", "white");
      startOverBtn.mouseClicked(resetGame());
      // setTimeout(this.createBtn(startOverBtnText), 5000);
      */



// alternative disappear funciton by changing ballsize
/*
if (this.ballDisappearActive === true) {
  if (this.ballSize >= 15) {
    this.ballSize -= 1.5 - this.ballY * 0.01;
    this.ballX += 1 + this.ballX * 0.035;
    this.ballY -= 1 - this.ballY * 0.035;
  } else if (this.ballSize >= 0) {
    this.ballSize -= 0.1 - this.ballY * 0.01;
    this.ballX += 0.3 + this.ballX * 0.035;
    this.ballY -= 0.3 - this.ballY * 0.035;
  }*/

