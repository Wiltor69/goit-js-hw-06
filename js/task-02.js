const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i++){
  const navItemEl = document.createElement('li');
 navItemEl.classList.add('item');
  navItemEl.textContent = ingredients[i];
  ingredientsRef.append(navItemEl); 
}
