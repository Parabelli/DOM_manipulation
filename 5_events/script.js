/* obj.addEventListener(`click`, (event) => {
  console.log(event);
}); */

document.body.style.fontFamily = `Arial,Helvetica,sans-serif`;
let flexAction = (document.querySelector(
  `.actionsquare-wrapper`
).style.display = `flex`);
let flexDisplay = (document.querySelector(
  `.displayedsquare-wrapper`
).style.display = `flex`);
const color1 = () => {
  let color = document.querySelectorAll(`.green`);
  for (let i = 0; i < color.length; i++) {
    let r = 19;
    let g = 255;
    let b = 6;
    color[i].style.backgroundColor = `rgb(${r},${g},${b})`;
    color[i].style.width = `47px`;
    color[i].style.minWidth = `47px`;
    color[i].style.height = `47px`;
    color[i].style.minHeight = `47px`;
    color[i].style.margin = `47px`;
  }
};
const color2 = () => {
  let color = document.querySelectorAll(`.violet`);
  for (let i = 0; i < color.length; i++) {
    let r = 233;
    let g = 0;
    let b = 244;
    color[i].style.backgroundColor = `rgb(${r},${g},${b})`;
    color[i].style.width = `47px`;
    color[i].style.minWidth = `47px`;
    color[i].style.height = `47px`;
    color[i].style.minHeight = `47px`;
    color[i].style.margin = `47px`;
  }
};
const color3 = () => {
  let color = document.querySelectorAll(`.orange`);
  for (let i = 0; i < color.length; i++) {
    let r = 243;
    let g = 167;
    let b = 6;
    color[i].style.backgroundColor = `rgb(${r},${g},${b})`;
    color[i].style.width = `47px`;
    color[i].style.minWidth = `47px`;
    color[i].style.height = `47px`;
    color[i].style.minHeight = `47px`;
    color[i].style.margin = `47px`;
  }
};
color1();
color2();
color3();

// click ////////////////////////////////////////
click = 0;
let startTime = performance.now();

// new div + list //
const newColor1 = () => {
  if (document.querySelectorAll(`.displayedsquare`).length < 10) {
    let endTime = performance.now();
    let timeElapsed = (endTime - startTime) / 1000;
    let newColor = document.createElement(`div`);
    newColor.classList.add(`displayedsquare`, `green`);
    document.querySelector(`.displayedsquare-wrapper`).appendChild(newColor);
    //
    document.createElement(`li`);
    let newList = document.createElement(`li`);
    let text = document.createTextNode(
      `[${timeElapsed}s] Created a new green square`
    );
    let ul = document.querySelector(`ul`);
    ul.appendChild(newList);
    ul.children[click].appendChild(text);
    click++;
  }
};
//
const newColor2 = () => {
  if (document.querySelectorAll(`.displayedsquare`).length < 10) {
    let endTime = performance.now();
    let timeElapsed = (endTime - startTime) / 1000;
    let newColor = document.createElement(`div`);
    newColor.classList.add(`displayedsquare`, `violet`);
    document.querySelector(`.displayedsquare-wrapper`).appendChild(newColor);
    //
    document.createElement(`li`);
    let newList = document.createElement(`li`);
    let text = document.createTextNode(
      `[${timeElapsed}s] Created a new violet square`
    );
    let ul = document.querySelector(`ul`);
    ul.appendChild(newList);
    ul.children[click].appendChild(text);
    click++;
  }
};
//
const newColor3 = () => {
  if (document.querySelectorAll(`.displayedsquare`).length < 10) {
    let endTime = performance.now();
    let timeElapsed = (endTime - startTime) / 1000;
    let newColor = document.createElement(`div`);
    newColor.classList.add(`displayedsquare`, `orange`);
    document.querySelector(`.displayedsquare-wrapper`).appendChild(newColor);
    //
    document.createElement(`li`);
    let newList = document.createElement(`li`);
    let text = document.createTextNode(
      `[${timeElapsed}s] Created a new orange square`
    );
    let ul = document.querySelector(`ul`);
    ul.appendChild(newList);
    ul.children[click].appendChild(text);
    click++;
  }
};

// coloring the div //

document
  .querySelector(`.actionsquare.green`)
  .addEventListener(`click`, newColor1);
document.querySelector(`.actionsquare.green`).addEventListener(`click`, color1);
//
document
  .querySelector(`.actionsquare.violet`)
  .addEventListener(`click`, newColor2);
document
  .querySelector(`.actionsquare.violet`)
  .addEventListener(`click`, color2);
//
document
  .querySelector(`.actionsquare.orange`)
  .addEventListener(`click`, newColor3);
document
  .querySelector(`.actionsquare.orange`)
  .addEventListener(`click`, color3);

// mouse over ////////////////////////////////////

const mouseOver1 = () => {
  let bigSquare = document.querySelector(`.actionsquare.green`);
  bigSquare.style.width = `77px`;
  bigSquare.style.height = `77px`;
  bigSquare.style.margin = `32px`;
};
//
const mouseOut1 = () => {
  let bigSquare = document.querySelector(`.actionsquare.green`);
  bigSquare.style.width = `47px`;
  bigSquare.style.height = `47px`;
  bigSquare.style.margin = `47px`;
};
////
const mouseOver2 = () => {
  let bigSquare = document.querySelector(`.actionsquare.violet`);
  bigSquare.style.width = `77px`;
  bigSquare.style.height = `77px`;
  bigSquare.style.margin = `32px`;
};
//
const mouseOut2 = () => {
  let bigSquare = document.querySelector(`.actionsquare.violet`);
  bigSquare.style.width = `47px`;
  bigSquare.style.height = `47px`;
  bigSquare.style.margin = `47px`;
};
////
const mouseOver3 = () => {
  let bigSquare = document.querySelector(`.actionsquare.orange`);
  bigSquare.style.width = `77px`;
  bigSquare.style.height = `77px`;
  bigSquare.style.margin = `32px`;
};
//
const mouseOut3 = () => {
  let bigSquare = document.querySelector(`.actionsquare.orange`);
  bigSquare.style.width = `47px`;
  bigSquare.style.height = `47px`;
  bigSquare.style.margin = `47px`;
};

// BIG square / small square

document
  .querySelector(`.actionsquare.green`)
  .addEventListener(`mouseover`, mouseOver1);
document
  .querySelector(`.actionsquare.green`)
  .addEventListener(`mouseout`, mouseOut1);
document
  .querySelector(`.actionsquare.violet`)
  .addEventListener(`mouseover`, mouseOver2);
document
  .querySelector(`.actionsquare.violet`)
  .addEventListener(`mouseout`, mouseOut2);
document
  .querySelector(`.actionsquare.orange`)
  .addEventListener(`mouseover`, mouseOver3);
document
  .querySelector(`.actionsquare.orange`)
  .addEventListener(`mouseout`, mouseOut3);

// keypress //////////////////////////////////////////

// randomize page color on keypress space //

document.body.addEventListener("keydown", (random) => {
  if (random.isComposing || random.key !== ` `) {
    return;
  }
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  bgColor = document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  //
  document.createElement(`li`);
  let newList = document.createElement(`li`);
  let text = document.createTextNode(`Spacebar pressed, the color was changed`);
  let ul = document.querySelector(`ul`);
  ul.appendChild(newList);
  ul.children[click].appendChild(text);
  click++;
});

// delete logs on keypress i //
document.body.addEventListener("keydown", (del) => {
  if (del.isComposing || del.key !== `i`) {
    return;
  }
  let list = document.querySelectorAll(`li`);
  let i = 0;
  while (i < list.length) {
    list[i].remove();
    i++;
    click--;
  }
});

// delete generated square on keypress s //
document.body.addEventListener("keydown", (del) => {
  if (del.isComposing || del.key !== `s`) {
    return;
  }
  let square = document.querySelectorAll(`.displayedsquare`);
  for (let i = 0; i < square.length; i++) {
    square[i].remove();
  }
});
