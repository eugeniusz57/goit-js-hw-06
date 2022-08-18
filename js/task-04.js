const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');
let counterValue = 0;

increment.addEventListener('click', onClickIncrement);
decrement.addEventListener('click', onClickDecrement);

function onClickIncrement() {
    counterValue += 1;
    value.textContent = counterValue;
};

function onClickDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;
};

