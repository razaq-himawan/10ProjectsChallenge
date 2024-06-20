import { signal, effect, derived } from './signal.js';

const btn = document.querySelector('#btn');

let count = signal(0);
let double = derived(() => count.value * 2);

btn.addEventListener('click', () => {
  count.value++;
});

effect(() => {
  console.log(double.value);
});

effect(() => {
  btn.innerHTML = count.value;
});
