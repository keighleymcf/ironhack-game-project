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

// ball characteristics
let ballSize = 0;
// let ballColor = color(239, 242, 245); // color function not recognized

//instruction dimensions
let instructionX = WIDTH / 2;
let instructionY = HEIGHT * 0.1;

// instruction texts
let ballSizeInstructions =
  "Press the space bar to increase the object's size. \nPress the down arrow to decrease its size.";

//button dimensions
let buttonHeight = 80;
let buttonWidth = 400;
let buttonX = (WIDTH - buttonWidth) / 2;
let buttonY = HEIGHT * 0.85;
let btnTextX = buttonX + buttonWidth / 2;
let btnTextY = buttonY + buttonHeight / 2;
let btnCLickableSurfaceWidth = buttonX + buttonWidth;
let btnClickableSurfaceHeight = buttonY + buttonHeight;

//button texts
let ballSizeBtnText = "Set the object's size";
