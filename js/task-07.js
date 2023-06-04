// const counter = {
//     counterValue: 16,
//     increment() {
        
//         this.counterValue += 1;
//     },
//     decrement() {
        
//         this.counterValue -= 1;
//     },
// };

const inputEl = document.querySelector('#font-size-control');
const valueEl = document.querySelector('#text');
inputEl.addEventListener('input', function () {
    valueEl.style.fontSize = inputEl.value + "px";
    
});









