// The observer pattern
// one-to-many relationship, event-driven, push

export function observable(value) {
  const subsribers = new Set();

  return {
    increment() {
      value++;
      this.update(value);
    },
    subscribe(fn) {
      subsribers.add(fn);
      return () => subsribers.delete(fn);
    },
    update(value) {
      subsribers.forEach((fn) => fn(value));
    },
  };
}

// script.js
// import { observable } from './observer.js';

// const btn = document.querySelector('#btn');

// let count = observable(0);

// count.subscribe((count) => {
//   btn.innerHTML = count;
// });

// const unsubscribe = count.subscribe((count) => {
//   console.log(count);
// });

// unsubscribe();

// btn.addEventListener('click', () => {
//   count.increment();
// });
