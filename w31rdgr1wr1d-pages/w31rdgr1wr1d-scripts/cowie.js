
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

imagePaths = { // no loading yet - letting the script know where the images are

    textboxImg: 'w31rdgr1wr1d-static/textbox.png',
    cowie: 'w31rdgr1wr1d-static/cowie.png'

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
