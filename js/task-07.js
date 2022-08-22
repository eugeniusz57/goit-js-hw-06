const inputRange = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

inputRange.addEventListener('input', onInputChange);

function onInputChange(event){
    const fontSize = event.currentTarget.value;
    span.style.fontSize = `${fontSize}px `;
    console.log('Font-size : ', fontSize,'px');
}
