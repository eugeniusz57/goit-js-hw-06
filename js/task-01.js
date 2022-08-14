const listEl = document.querySelectorAll('#categories .item');
const h2El1 = document.querySelectorAll('.item h2');
const itemEl = document.querySelectorAll('.item ul');
const itemEl1 = itemEl[0].querySelectorAll(' li');
const itemEl2 = itemEl[1].querySelectorAll(' li');
const itemEl3 = itemEl[2].querySelectorAll(' li');

console.log('Number of categories: ', listEl.length); 
console.log('Category : ', h2El1[0].textContent);
console.log('Elements : ', itemEl1.length);
console.log('Category : ', h2El1[1].textContent);
console.log('Elements : ', itemEl2.length);
console.log('Category : ', h2El1[2].textContent);
console.log('Elements : ', itemEl3.length);