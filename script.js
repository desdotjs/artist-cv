// color array
const colors = [
  "rgb(6, 193, 0)",
  "rgb(75, 68, 255)",
  "rgb(255, 250, 68)",
  "rgb(242, 137, 0)",
  "rgb(230, 20, 20)",
  "rgb(38, 191, 255)",
  "rgb(198, 38, 255)"
];

let currentColor; // current background color

// grabbing color from file cabinet (local storage)
function getNextColor() {
  let storedIndex = localStorage.getItem("colors");
  let index = storedIndex === null ? 0 : Number(storedIndex);

  const color = colors[index];

  // incrementing
  index++;
  if (index >= colors.length) index = 0;

  localStorage.setItem("colors", index);

  return color;
}

function setup() {
  const cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');

  currentColor = getNextColor();
}

function draw() {
  background(currentColor);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
