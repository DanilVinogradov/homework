
const valueEl = document.getElementById('value');
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const resetBtn = document.querySelector('.reset');

let counter = 0;


function updateDisplay() {
  valueEl.textContent = counter;
  if (counter > 0) {
    valueEl.style.color = 'green';
  } else if (counter < 0) {
    valueEl.style.color = 'red';
  } else {
    valueEl.style.color = '#222';
  }
}


decreaseBtn.addEventListener('click', () => {
  counter--;
  updateDisplay();
});


increaseBtn.addEventListener('click', () => {
  counter++;
  updateDisplay();
});


resetBtn.addEventListener('click', () => {
  counter = 0;
  updateDisplay();
});


updateDisplay();