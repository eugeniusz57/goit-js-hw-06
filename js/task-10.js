
const refs ={
  input: document.querySelector('input'),
  butttonCreate: document.querySelector('button[data-create]'),
  butttonDestroy: document.querySelector('button[data-destroy]'),
  boxesContainer: document.querySelector('#boxes')
}

let divs = [];

refs.butttonCreate.addEventListener('click', onClickButttonCreate);
refs.butttonDestroy.addEventListener('click', onClickButttonDestroyBoxes);

function onClickButttonCreate(event){
  const amount = refs.input.value;

  createBoxes(amount);
}


function createBoxes(amount){
  for (let index = 1, size = 30;  index <= amount; index++, size +=10) {
    divs.push(size);
  }
  const makeListElements = divs => {
    return divs.map( div => {
      const divEl = document.createElement('div');
      divEl.textContent = `${div}px`;
      divEl.style.width = `${div}px`;
      divEl.style.height = `${div}px`;
      divEl.style.backgroundColor = getRandomHexColor() ;
      return divEl;
    });
    };
    
    const elements = makeListElements(divs);

    refs.boxesContainer.append(...elements);
    divs = [];//CLEAR ARRAY DIVS
    refs.input.value = "";// CLEAR INPUT
};

function  onClickButttonDestroyBoxes(){
  divs = [];//CLEAR ARRAY DIVS
  refs.boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
