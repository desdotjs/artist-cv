const colors = [
  "rgb(6, 193, 0)",
  "rgb(75, 68, 255)",
  "rgba(255, 247, 27, 1)",
  "rgb(242, 137, 0)",
  "rgb(216, 0, 0)",
  "rgb(38, 191, 255)",
  "rgb(198, 38, 255)"
];

let storedIndex = localStorage.getItem("colors");

let index = storedIndex === null ? 0 : Number(storedIndex);
// check whether storedIndex is null. if it is, start index at 0. if it isn’t, turn storedIndex into a number and assign it to index

document.body.style.backgroundColor = colors[index];
// document.body.style.backgroundColor is used in vanilla JS - "canvas" is a p5 thing

index++;

if (index >= colors.length) index = 0;

localStorage.setItem("colors", index);
