let list = document.querySelector(`ol`);

list.insertBefore(list.children[4], list.children[0]);

let myMain = document.querySelector(`main`);

let heading2 = document.querySelectorAll(`h2`);
console.log(heading2);
myMain.children[1].appendChild(heading2[2]);
myMain.children[2].querySelector(`div`).appendChild(heading2[1]);

myMain.children[2].remove();
