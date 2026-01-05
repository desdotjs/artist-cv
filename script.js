  // HTML = skeleton
  // DOM = nervous system
  // JavaScript = brain
  // CSS = skin & clothes

  // HTML = skeleton
  // DOM = nervous system
  // JavaScript = brain
  // CSS = skin & clothes

// cIndex = []; // color indexer

// original logic above was wrong; we aren't tracking multiple indexes, just ONE

cIndex = 0; // counting where we're at in our colors array

// array to store color info

let colors = ["rgb(6, 193, 0)", "rgb(75, 68, 255)", "rgb(255, 250, 68)", "rgb(242, 137, 0)", "rgb(230, 20, 20)", "rgb(38, 191, 255)", "rgb(198, 38, 255)"];

let currentColor; // define for draw function

function setup() {
  
  let cnv = createCanvas(windowWidth, windowHeight);
  
  // storing color info in array for CSS file to read
  // "how does the CSS file know to read the JS file?" well, im glad you asked!
  // theres a thing called a "DOM" aka a "document object model"
  // a DOM organizes file structures and how they are used / manipulated
  // the DOM is a built-in API (application programming interface) browsers have
  // an API is like a contract: "here's what you're allowed to access, here's how you change it, here's what happens if you do"
  // so, JS talks to the browser through the DOM (browser API) then the browser updates the CSS files
  
  // this setup is only READING localStorage
  
  let storedIndex = localStorage.getItem("colors");
  // localStorage: "hey browser, do you remember a value from colors?"
  // storing as a variable so we can read the logic once and reuse it multiple times

  cnv.position(0, 0);   // top-left corner
  cnv.style('z-index', '-1'); // push it behind everything
  
  if (storedIndex === null) {
  // if storedIndex is strictly equal to nothing, this is the first browser visit
    
    cIndex = 0;
    
  } else {
     
    cIndex = Number(storedIndex);
      
    // Number is a built-in js function that converts input into a numeric value
  }

  // now we EXECUTE color change every refresh

  currentColor = colors[cIndex]; // pick color for this load

  cIndex++; // incrementing for next refresh

  if (cIndex >= colors.length) {
    cIndex = 0; // wrap back to start
  } 

  localStorage.setItem("colors", cIndex); // save for next visit
}

function draw() {
  
  background(currentColor); // paint canvas with current color
  
}

function windowResized() {
    
  resizeCanvas(windowWidth, windowHeight);

}

// localStorage is built-in to most browsers. read here: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
