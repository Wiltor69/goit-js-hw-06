
const categorEl = document.querySelectorAll('.item');

console.log('Number of categories: ', categorEl.length);

 
categorEl.forEach(el => {
    console.log('Category: ',el.firstElementChild.textContent);
    console.log('Elements: ', el.lastElementChild.children.length);
});
