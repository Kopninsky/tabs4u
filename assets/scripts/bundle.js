const content = document.querySelector('.content');
let tabs = [];

for (let i = 0; i < content.children.length; i++) {
  tabs.push(content.children[i])
}

console.log(tabs);

const buttonOne = tabs[1].lastElementChild;
const buttonTwo = tabs[2].lastElementChild;
const textOne = buttonOne.previousElementSibling;
const textTwo = buttonTwo.previousElementSibling;

let toggler = (btn, text, URL) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    text.classList.toggle('red_colored');
    btn.classList.toggle('red_colored__btn');
    btn.classList.toggle('black_colored__btn');
    xhr.open('GET', URL, true);
    xhr.send();
    xhr.addEventListener('load', () => {
      text.innerText = xhr.responseText;
    })
  })
}

toggler(buttonOne, textOne, './assets/text.txt');
toggler(buttonTwo, textTwo, './assets/text.txt');