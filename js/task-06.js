const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInput);


function onInput(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
    }
    else {
        inputEl.classList.add('invalid');
    }
}