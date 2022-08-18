const buttonColor = document.querySelector('.change-color');
const span = document.querySelector('.color');

buttonColor.addEventListener('click', onChangeBgrColor);

function onChangeBgrColor(){
  const bgrColor = getRandomHexColor();
  span.textContent = `${bgrColor}`;
  document.body.style.backgroundColor  = `${bgrColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


