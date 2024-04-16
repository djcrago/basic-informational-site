const button = document.querySelector('.btn');
const h1 = document.querySelector('h1');
const main = document.querySelector('main');

let updated = false;

button.addEventListener('click', () => {
  if (updated) {
    h1.style.backgroundColor = 'lightgray';
    main.style.backgroundColor = 'lightgray';
  }
  if (!updated) {
    h1.style.backgroundColor = 'lightcoral';
    main.style.backgroundColor = 'lightcoral';
  }
  updated = !updated;
});
