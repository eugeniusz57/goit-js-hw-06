const listEl = document.querySelectorAll('#categories .item');
const h2El = document.querySelectorAll('.item h2');

console.log('Number of categories: ', listEl.length);

h2El.forEach(elem => {
    console.log('Category : ', `${ elem.textContent}`)
    console.log('Elements : ', `${elem.nextElementSibling.children.length}`);
})