let title = document.title;
console.log(title);

title = "Modifying the DOM";
console.log(title);

let bgColor = (document.body.style.backgroundColor = "#FF69B4");

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

bgColor = document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
console.log(bgColor);

for (const i of document.body.childNodes) {
  console.log(i);
}
