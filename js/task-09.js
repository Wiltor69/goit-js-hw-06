function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {

bodyEl: document.querySelector('body'),
buttonEl: document.querySelector('.change-color'),
colorChangeEl: document.querySelector('.color'),
  
}
ref.buttonEl.addEventListener('click', (event) => {
  ref.bodyEl.style.backgroundColor = getRandomHexColor();
  ref.colorChangeEl.textContent = getRandomHexColor();
});