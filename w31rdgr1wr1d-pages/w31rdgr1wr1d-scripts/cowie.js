
// AUDIO FILES OBJECT STORAGE

const soundFiles = {

  'a': new Audio('w31rdgr1wr1d-static/cowie-static/ah.wav'),
  'b': new Audio('w31rdgr1wr1d-static/cowie-static/buh.wav'),
  'c': new Audio('w31rdgr1wr1d-static/cowie-static/kuh.wav'),
  'd': new Audio('w31rdgr1wr1d-static/cowie-static/duh.wav'),
  'e': new Audio('w31rdgr1wr1d-static/cowie-static/eh.wav'),
  'f': new Audio('w31rdgr1wr1d-static/cowie-static/fuh.wav'),
  'g': new Audio('w31rdgr1wr1d-static/cowie-static/guh.wav'),
  'h': new Audio('w31rdgr1wr1d-static/cowie-static/huh.wav'),
  'i': new Audio('w31rdgr1wr1d-static/cowie-static/ee.wav'),
  'j': new Audio('w31rdgr1wr1d-static/cowie-static/juh.wav'),
  'k': new Audio('w31rdgr1wr1d-static/cowie-static/kuh.wav'),
  'l': new Audio('w31rdgr1wr1d-static/cowie-static/luh.wav'),
  'm': new Audio('w31rdgr1wr1d-static/cowie-static/mmm.wav'),
  'n': new Audio('w31rdgr1wr1d-static/cowie-static/nnn.wav'),
  'o': new Audio('w31rdgr1wr1d-static/cowie-static/oh.wav'),
  'p': new Audio('w31rdgr1wr1d-static/cowie-static/puh.wav'),
  'q': new Audio('w31rdgr1wr1d-static/cowie-static/kwuh.wav'),
  'r': new Audio('w31rdgr1wr1d-static/cowie-static/err.wav'),
  's': new Audio('w31rdgr1wr1d-static/cowie-static/sss.wav'),
  't': new Audio('w31rdgr1wr1d-static/cowie-static/tuh.wav'),
  'u': new Audio('w31rdgr1wr1d-static/cowie-static/uh.wav'),
  'v': new Audio('w31rdgr1wr1d-static/cowie-static/vuh.wav'),
  'w': new Audio('w31rdgr1wr1d-static/cowie-static/wuh.wav'),
  'x': new Audio('w31rdgr1wr1d-static/cowie-static/kss.wav'),
  'y': new Audio('w31rdgr1wr1d-static/cowie-static/yuh.wav'),
  'z': new Audio('w31rdgr1wr1d-static/cowie-static/zzz.wav'),

}

const tc = document.querySelector("#text-container"); // container for text itself :P

document.addEventListener('DOMContentLoaded', () => {

  // document.getElementById().attribute = new value

  document.addEventListener('keydown', (event) => {

    const key = event.key.toLowerCase() // store the key that was pressed in a variable, and make it lowercase to match our soundFiles keys


    if (soundFiles[key]) {


      soundFiles[key].currentTime = 0
      soundFiles[key].play()

    }

    // if (event.key === "Backspace") {

    //   tc.textContent.slice(0, -1)

    // }

  })

});
