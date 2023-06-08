/* obj.addEventListener(`click`, (event) => {
  console.log(event);
}); */

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
    color[i].style.minWidth = `47px`;
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
    color[i].style.minWidth = `47px`;
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
    color[i].style.minWidth = `47px`;
    color[i].style.minHeight = `47px`;
    color[i].style.margin = `47px`;
  }
};
color1();
color2();
color3();

// click ////////////////////////////////////////

// new div //

const newColor1 = () => {
  let newColor = document.createElement(`div`);
  newColor.classList.add(`displayedsquare`, `green`);
  document.querySelector(`.displayedsquare-wrapper`).appendChild(newColor);
};
const newColor2 = () => {
  let newColor = document.createElement(`div`);
  newColor.classList.add(`displayedsquare`, `violet`);
  document.querySelector(`.displayedsquare-wrapper`).appendChild(newColor);
};
const newColor3 = () => {
  let newColor = document.createElement(`div`);
  newColor.classList.add(`displayedsquare`, `orange`);
  document.querySelector(`.displayedsquare-wrapper`).appendChild(newColor);
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

// list //

// mouse over ////////////////////////////////////