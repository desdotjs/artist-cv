
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

});

document.addEventListener('keydown', (event) => {
  
  const key = event.key.toLowerCase() // store the key that was pressed in a variable, and make it lowercase to match our soundFiles keys

  if (soundFiles[key]) {
    soundFiles[key].currentTime = 0
    soundFiles[key].play()
  }

})
