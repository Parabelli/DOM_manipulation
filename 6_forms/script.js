let firstname = document.querySelector(`#firstname`);
firstname.addEventListener("keyup", (event) => {
  if (event.key < `a` || event.key > `z`) {
    return;
  }

  let text = document.createTextNode(event.key);
  document.getElementById(`display-firstname`).appendChild(text);
});
let age = document.querySelector(`#age`);
let count = 0;
age.addEventListener("keyup", (event) => {
  if (event.isComposing || event.key < `0` || event.key > `9`) {
    return;
  }
  count += event.key;
  if (count > 17) {
    document.getElementById(`a-hard-truth`).style.visibility = `visible`;
  }
});

let input = document.body.children[1].children[2].querySelectorAll(`input`);
input.forEach((i) => {
  i.addEventListener(`keyup`, (event) => {
    if (event.key < `a` || event.key > `z`) {
      return;
    }
    let pwd = document.getElementById(`pwd`).value;
    let pwdconfirm = document.getElementById(`pwd-confirm`).value;
    let min = 6;
    if (pwd.length < min) {
      i.style.borderColor = `red`;
    }
    if (pwd.length >= min) {
      i.style.borderColor = `white`;
    }
    if (pwdconfirm !== pwd) {
      i.style.borderColor = `red`;
    }
    if (pwdconfirm === pwd) {
      i.style.borderColor = `white`;
      i = document.body.children[1].children[2].querySelector(`input`);
      i.style.borderColor = `white`;
    }
  });
});

document.querySelector(`#toggle-darkmode`).addEventListener(`change`, () => {
  if (document.querySelector(`toggle-darmode`).value == `light`) {
    document.body.style.backgroundColor = `white`;
    document.body.style.color = `black`;
  }
  if (document.querySelector(`toggle-darmode`).value == `dark`) {
    document.body.style.backgroundColor = `black`;
    document.body.style.color = `white`;
  }
});
