// group members
let numerus = [`Unus`, `Duo`, `Tres`];

let art = document.querySelector(`article`);

// sections creation
for (const i of numerus) {
  let newSection = document.createElement(`section`);
  document.querySelector(`article`).appendChild(newSection);
}

// paragraphs creation + random colors and light
let sect = document.querySelectorAll(`section`);
for (let i = 0; i < sect.length; i++) {
  let newPara = document.createElement(`p`);
  sect[i].appendChild(newPara);
  let h = Math.floor(Math.random() * 360);
  let s = Math.floor(Math.random() * 100);
  let l = Math.floor(Math.random() * 100);
  if (l >= 50) {
    bgColorLight = `hsl(${h},${s}%,${l}%)`;
    bgColor = sect[i].style.backgroundColor = bgColorLight;
    sect[i].style.color = "#000000";
  } else if (l < 50) {
    bgColorDark = `hsl(${h},${s}%,${l}%)`;
    bgColor = sect[i].style.backgroundColor = bgColorDark;
    sect[i].style.color = "#ffffff";
  }
  console.log(bgColor);
}

// text creation
let p = document.querySelectorAll(`p`);
for (let i = 0; i < p.length; i++) {
  let newText = document.createTextNode(numerus[i]);
  p[i].appendChild(newText);
}

// randomize the order of the section
let myarticl = document.getElementById(`articl`);
art.id = `articl`;
for (let i = 0; i < sect.length; i++) {
  sect[i].id = i;
  let x = document.getElementById(i);
  let y = document.getElementById(i - 1);
  let z = document.getElementById(i - 2);
  let w = document.getElementById(i + 1);
  let v = document.getElementById(i + 2);
  if (i == 0) {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
    }
    if (random == 1) {
      myarticl.insertBefore(x, w);
    }
    if (random == 2) {
      myarticl.insertBefore(x, v);
    }
  }
  if (i == 1) {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
    }
    if (random == 1) {
      myarticl.insertBefore(x, y);
    }
    if (random == 2) {
      myarticl.insertBefore(x, w);
    }
  }
  if (i == 2) {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
    }
    if (random == 1) {
      myarticl.insertBefore(x, y);
    }
    if (random == 2) {
      myarticl.insertBefore(x, z);
    }
  }
}
