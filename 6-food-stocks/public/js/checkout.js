import { getFromCart, updateTotalPrice } from './cartLocalStorage.js';

const checkoutItemContainer = document.querySelector('#checkoutItemContainer');
const totalPrice = document.querySelector('#totalPriceCheckout');

function renderCheckout(cart) {
  cart.forEach((d) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    li.innerHTML = `
      <div class="d-flex gap-2">
        <span
          class="fw-bold"
        >
          ${d.name}
        </span>
        <span
          class="text-muted"
        >
          Rp. ${d.price}
        </span>
      </div>
      <div>
        <span
          class="text-muted"
          >x${d.amount}</span
        >
      </div>`;

    checkoutItemContainer.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const cart = getFromCart();
  if (!cart || cart.length === 0) {
    return (checkoutItemContainer.innerHTML = `
      <div class="col mb-3">
        <p>No item.</p>
      <div>
      `);
  }

  renderCheckout(cart);
  updateTotalPrice(cart, totalPrice);
});
