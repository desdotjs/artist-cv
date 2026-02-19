
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

// CALLING BUILT IN CANVAS API

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// getContext is a method that belongs to canvas
// getElementID is a method that belongs to document - "hey browser, get me the element with the id of "canvas" (technically you could name it poopfart and it would still work)

// canvas.width  = window.innerWidth // window is a global object built-in the browser
// canvas.height = window.innerHeight // property that belongs to window

// STORING IMAGES AS THEIR OWN OBJECTS

// const cowieImg = new Image();

// cowieImg.src = 'w31rdgr1wr1d-static/cowie.png';

// cowieImg.onload = () => {
// anonymous function is a function without a variable function such as onload
//   draw();
//   console.log("cowie is ready! ^_^")

// };

// const textboxImg = new Image();

// textboxImg.src = 'w31rdgr1wr1d-static/textbox.png';

// textboxImg.onload = () => {
  
//   draw();
//   console.log("cowie has thoughts to share!")

// };

// textboxImg.onload = () => { // empty parathesis = "this function has no parameters" (since... onload has no)

//     console.log("cowie has thoughts to share!")

// }

// variable.property = (parameters) => { body }


// onload is an event-handling property on the image object
// . means access a property or method that belongs to this thing


// AUDIO FILES OBJECT STORAGE

const soundFiles = {

    'a': new Audio('w31rdgr1wr1d-static/ah.wav'),
    'b': new Audio('w31rdgr1wr1d-static/buh.wav'),
    'c': new Audio('w31rdgr1wr1d-static/kuh.wav'),
    'd': new Audio('w31rdgr1wr1d-static/duh.wav'),
    'e': new Audio('w31rdgr1wr1d-static/eh.wav'),
    'f': new Audio('w31rdgr1wr1d-static/fuh.wav'),
    'g': new Audio('w31rdgr1wr1d-static/guh.wav'),
    'h': new Audio('w31rdgr1wr1d-static/huh.wav'),
    'i': new Audio('w31rdgr1wr1d-static/ee.wav'),
    'j': new Audio('w31rdgr1wr1d-static/juh.wav'),
    'k': new Audio('w31rdgr1wr1d-static/kuh.wav'),
    'l': new Audio('w31rdgr1wr1d-static/luh.wav'),
    'm': new Audio('w31rdgr1wr1d-static/mmm.wav'),
    'n': new Audio('w31rdgr1wr1d-static/nnn.wav'),
    'o': new Audio('w31rdgr1wr1d-static/oh.wav'),
    'p': new Audio('w31rdgr1wr1d-static/puh.wav'),
    'q': new Audio('w31rdgr1wr1d-static/kwuh.wav'),
    'r': new Audio('w31rdgr1wr1d-static/err.wav'),
    's': new Audio('w31rdgr1wr1d-static/sss.wav'),
    't': new Audio('w31rdgr1wr1d-static/tuh.wav'),
    'u': new Audio('w31rdgr1wr1d-static/uh.wav'),
    'v': new Audio('w31rdgr1wr1d-static/vuh.wav'),
    'w': new Audio('w31rdgr1wr1d-static/wuh.wav'),
    'x': new Audio('w31rdgr1wr1d-static/kss.wav'),
    'y': new Audio('w31rdgr1wr1d-static/yuh.wav'),
    'z': new Audio('w31rdgr1wr1d-static/zzz.wav'),

}


document.addEventListener('DOMContentLoaded', () => {
// document is a built-in object in browsers that represents the webpage.
// addEventListener is a method that listens for a specific event (in this case, 'DOMContentLoaded') and runs a function when that event occurs. The function is defined as an arrow function () => { ... } which will execute when the DOM content is fully loaded.
// typically unecessary if script is going to live in <body> but good practice to ensure script doesnt run before page is loaded

    console.log('page loaded! ^_^');

});

// parenthesis is for a single expression only. "=>" can only read one thing. () => (expression)
// brackets are for a statement
// eventListeners almost always need a bracket

// KEYBOARD EVENT LISTENER

document.addEventListener('keydown', (event) => {
  
  const key = event.key.toLowerCase() // store the key that was pressed in a variable, and make it lowercase to match our soundFiles keys

  if (soundFiles[key]) {
    soundFiles[key].currentTime = 0
    soundFiles[key].play()
  }

})

// function draw() { 

  // drawImage built-in canvas api method that draws an image on the canvas
  // takes in parameters of (image, x, y)
  // draw function, just like p5.js!

//   ctx.drawImage(cowieImg, 100, 100);
//   ctx.drawImage(textboxImg, 200, 200);


// }

// jake lamb said ditch canvas :-(
