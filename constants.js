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
let WIDTH = 600;
let HEIGHT = 500;
let halfHeight = HEIGHT / 2;
let halfWidth = WIDTH / 2;

// ball characteristics
let ballSize = 10;
let ballX = 0;
let ballY = 0;
let ballZ = 0;

// instruction texts
let ballSizeInstructions =
  "<h2>How big is the object?</h2>  <p>Press the up arrow to increase the object's size.</p><p>Press the down arrow to decrease its size.</p>";
let ballColorInstructions =
  "<h2>What color is the object?</h2>  <p>Choose the object's color using the picker on the left.</p>";
let ballWeightInstructions =
  "<h2>How heavy is the object?</h2>  <p>Set the object's weight using the slider. <p>Press space to toss the object up and experience its weight.</p>";
let ballDisappearInstructions =
  "<h2>When you are ready, double click to send the ball away.</h2>";

//button texts
let ballSizeBtnText = "Set the object's size";
let ballColorBtnText = "Set the object's color";
let ballWeightBtnText = "Set the object's weight";
let startOverBtnText = "Start a new visualisation";

// color picker position
let pickerX = innerWidth * 0.3;
let pickerY = innerHeight * 0.5 - innerHeight * 0.06;

//slider position
let sliderX = innerWidth * 0.3;
let sliderY = innerHeight * 0.5 + innerHeight * 0.06;
