import {
  getFromCart,
  setToCart,
  updateTotalPrice,
} from './cartLocalStorage.js';

const btnsAddToCart = document.querySelectorAll('#addToCart');
const cartItemContainer = document.querySelector('#cartItemContainer');
const totalPrice = document.querySelector('#totalPrice');

btnsAddToCart.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const { id, name, price } = e.target.dataset;
    const amount = 1;

    const newItem = {
      id: id,
      name: name,
      price: price,
      amount: amount,
    };

    addToCart(newItem);
  });
});

function addToCart(newItem) {
  let cart = getFromCart();

  if (!cart) {
    cart = [];
  }

  const existingItemIndex = cart.findIndex((item) => item.id === newItem.id);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].amount += newItem.amount;
  } else {
    cart.push(newItem);
  }

  setToCart(cart);
  updateCartUI(cart);
  updateTotalPrice(cart, totalPrice);
}

function updateCartUI(cart) {
  cartItemContainer.innerHTML = '';
  cart.forEach((d, index) => {
    const div = document.createElement('div');
    div.classList.add('col', 'mb-3');
    div.innerHTML = `
    <div class="card">
      <div class="card-body">
        <div>
          <h5 class="card-title">${d.name}</h5>
          <p class="card-text">Rp. ${d.price}</p>
        </div>
        <div class="d-flex justify-content-end align-items-center gap-2">
          <button
            data-index="${index}"
            id="increaseAmount"
            class="btn btn-primary"
            style="width: 48px"
          >
            +
          </button>
          <p class="m-0" id="itemAmount-${index}">${d.amount}</p>
          <button
            data-index="${index}"
            id="decreaseAmount"
            class="btn btn-danger"
            style="width: 48px"
          >
            -
          </button>
        </div>
      </div>
  </div>`;

    cartItemContainer.appendChild(div);
  });

  const btnsIncrease = document.querySelectorAll('#increaseAmount');
  const btnsDecrease = document.querySelectorAll('#decreaseAmount');

  btnsIncrease.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      increaseAmount(index);
    });
  });

  btnsDecrease.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      decreaseAmount(index);
    });
  });
}

function increaseAmount(index) {
  let cart = getFromCart();
  cart[index].amount += 1;

  setToCart(cart);
  updateCartUI(cart);
  updateTotalPrice(cart, totalPrice);
}

function decreaseAmount(index) {
  let cart = getFromCart();
  cart[index].amount -= 1;

  if (cart[index].amount === 0) {
    cart.splice(index, 1);
  }

  setToCart(cart);
  updateCartUI(cart);
  updateTotalPrice(cart, totalPrice);
}

document.addEventListener('DOMContentLoaded', () => {
  const cart = getFromCart();
  if (!cart || cart.length === 0) {
    return (cartItemContainer.innerHTML = `
    <div class="col mb-3">
      <p>No item.</p>
    <div>
    `);
  }

  updateCartUI(cart);
  updateTotalPrice(cart, totalPrice);
});
