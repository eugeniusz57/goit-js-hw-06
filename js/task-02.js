const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const makeListElements = options => {
return options.map( option => {
  const itemEl = document.createElement('li');
  itemEl.textContent = option;
  itemEl.classList.add('item');
  return itemEl;
});
};

const elements = makeListElements(ingredients);

listEl.append(...elements);