
// AUDIO FILES OBJECT STORAGE

const soundFiles = {

  'a': new Audio('w31rdgr1wr1d-static/cowie/ah.wav'),
  'b': new Audio('w31rdgr1wr1d-static/cowie/buh.wav'),
  'c': new Audio('w31rdgr1wr1d-static/cowie/kuh.wav'),
  'd': new Audio('w31rdgr1wr1d-static/cowie/duh.wav'),
  'e': new Audio('w31rdgr1wr1d-static/cowie/eh.wav'),
  'f': new Audio('w31rdgr1wr1d-static/cowie/fuh.wav'),
  'g': new Audio('w31rdgr1wr1d-static/cowie/guh.wav'),
  'h': new Audio('w31rdgr1wr1d-static/cowie/huh.wav'),
  'i': new Audio('w31rdgr1wr1d-static/cowie/ee.wav'),
  'j': new Audio('w31rdgr1wr1d-static/cowie/juh.wav'),
  'k': new Audio('w31rdgr1wr1d-static/cowie/kuh.wav'),
  'l': new Audio('w31rdgr1wr1d-static/cowie/luh.wav'),
  'm': new Audio('w31rdgr1wr1d-static/cowie/mmm.wav'),
  'n': new Audio('w31rdgr1wr1d-static/cowie/nnn.wav'),
  'o': new Audio('w31rdgr1wr1d-static/cowie/oh.wav'),
  'p': new Audio('w31rdgr1wr1d-static/cowie/puh.wav'),
  'q': new Audio('w31rdgr1wr1d-static/cowie/kwuh.wav'),
  'r': new Audio('w31rdgr1wr1d-static/cowie/err.wav'),
  's': new Audio('w31rdgr1wr1d-static/cowie/huh.wav'),
  't': new Audio('w31rdgr1wr1d-static/cowie/tuh.wav'),
  'u': new Audio('w31rdgr1wr1d-static/cowie/uh.wav'),
  'v': new Audio('w31rdgr1wr1d-static/cowie/vuh.wav'),
  'w': new Audio('w31rdgr1wr1d-static/cowie/wuh.wav'),
  'x': new Audio('w31rdgr1wr1d-static/cowie/kuh.wav'),
  'y': new Audio('w31rdgr1wr1d-static/cowie/yuh.wav'),
  'z': new Audio('w31rdgr1wr1d-static/cowie/zzz.wav'),

}

const tc = document.querySelector("textarea"); // container for text itself :P

document.addEventListener('DOMContentLoaded', () => {

  // document.getElementById().attribute = new value

  document.addEventListener('keydown', (event) => {

    const key = event.key.toLowerCase() // store the key that was pressed in a variable, and make it lowercase to match our soundFiles keys


    if (soundFiles[key]) {


      soundFiles[key].currentTime = 0
      soundFiles[key].play()

    }

  })

});
