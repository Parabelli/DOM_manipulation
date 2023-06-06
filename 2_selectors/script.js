let important = document.querySelectorAll(`.important`);
console.log(important);
console.log(important[1]);
for (let i = 0; i < important.length; i++) {
  important[i].title = `This is an important item`;
  console.log(important[i]);
}

let img = document.querySelectorAll(`img`);
for (let i = 0; i < img.length; i++) {
  if (img[i].className != "important") {
    img[i].style.display = "none";
  }
}

let p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  if (p[i].className != false) {
    console.log(p[i].textContent + `\nClass : ` + p[i].className);
  } else {
    console.log(p[i].textContent);
  }
}

const random = () => {
  let color = [0, 0, 0];
  for (let i = 0; i < color.length; i++) {
    color[i] = Math.floor(Math.random() * 255);
  }
  return `rgb(${color})`;
};

for (let i = 0; i < p.length; i++) {
  if (p[i].className != false) {
  } else {
    p[i].style.color = random();
  }
}
