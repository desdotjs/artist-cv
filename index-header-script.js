
const headerArt = []

function preload() {

    

}

let storedIndex = localStorage.getItem("headerArt");

let index = storedIndex === null ? 0: Number(storedIndex);

index++;

if (index >= headerArt.length) index = 0;

localStorage.setItem("headerArt", index);

