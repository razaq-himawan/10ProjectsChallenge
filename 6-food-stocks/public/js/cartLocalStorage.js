export function setToCart(data) {
  localStorage.setItem('cart', JSON.stringify(data));
}

export function getFromCart() {
  const storedValue = JSON.parse(localStorage.getItem('cart'));
  return storedValue;
}

export function updateTotalPrice(cart, totalPriceElem) {
  const total = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
  totalPriceElem.innerHTML = `Total Price: Rp. ${total.toLocaleString()}`;
}
