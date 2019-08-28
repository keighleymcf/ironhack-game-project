/*
Colors
dark eggplant: rgb(58,53,73)
dark purple: rgb(47,49,92)
white-smoke: rgb(239,242,245) // used for default ball color
pale purple: rgb(102,103,134)
blue-black: rgb(6,9,19)
medium purple: rgb(54,62,101)
dark teal: rgb(33,51,77)
dark dark purple: rgb(33,34,68)
white
*/

// canvas dimensions
let WIDTH = 1100;
let HEIGHT = 650;
let halfHeight = HEIGHT / 2;

// ball characteristics
let ballSize = 10;
let ballX = 0;
let ballY = 0;
let ballZ = 0;
// let ballLeftEdge = ballX - ballSize + WIDTH / 2;
// let ballRightEdge = ballX + ballSize + WIDTH / 2;
// let ballBottomEdge = ballY - ballSize + HEIGHT / 2;
// let ballTopEdge = ballY + ballSize + HEIGHT / 2;

// let ballColor = color(239, 242, 245); // color function not recognized

// instruction texts
let ballSizeInstructions =
  "Press the up arrow to increase the object's size. \nPress the down arrow to decrease its size.";
let ballColorInstructions =
  "Choose the object's color using the picker on the left";
let ballWeightInstructions =
  "Set the object's weight using the slider. \nDrag the object with the mouse to position it, \nand press space to drop it.";
let ballDisappearInstructions =
  "When you are ready, double click to send the ball away.";

//button dimensions
let buttonHeight = 80;
let buttonWidth = 400;
let buttonX = WIDTH / 2;
let buttonY = HEIGHT * 0.85;

//button texts
let ballSizeBtnText = "Set the object's size";
let ballColorBtnText = "Set the object's color";
let ballWeightBtnText = "Set the object's weight";
let startOverBtnText = "Start a new visualisation";

// color picker
let pickerX = WIDTH * 0.3;
let pickerY = HEIGHT / 2;
