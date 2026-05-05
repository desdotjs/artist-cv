const colors = [
  "rgb(94, 238, 89)",
  "rgb(255, 107, 210)",
  "rgb(96, 90, 255)",
  "rgb(255, 250, 95)",
  "rgb(255, 166, 50)",
  "rgb(227, 65, 65)",
  "rgb(63, 195, 251)",
  "rgb(204, 74, 252)"
];

let storedIndex = localStorage.getItem("colors");

let index = storedIndex === null ? 0 : Number(storedIndex);
// check whether storedIndex is null. if it is, start index at 0. if it isn’t, turn storedIndex into a number and assign it to index

document.body.style.backgroundColor = colors[index];
// document.body.style.backgroundColor is used in vanilla JS - "canvas" is a p5 thing

index++;

if (index >= colors.length) index = 0;

localStorage.setItem("colors", index);

