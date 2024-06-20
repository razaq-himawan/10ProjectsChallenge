import { extractStoreIdFromPath } from './helper.js';

const btnOpenModal = document.querySelector('#modal-open-btn');
const xCloseModal = document.querySelector('#modal-close-x');
const btnCloseModal = document.querySelector('#modal-close-btn');

export const modalInit = () => {
  const myModal = new bootstrap.Modal(
    document.getElementById('formStoreModal')
  );
  const storeId = extractStoreIdFromPath();

  if (storeId) {
    myModal.hide();
    setupModalListeners(myModal);
  } else {
    myModal.show();
  }
};

const setupModalListeners = (modal) => {
  btnOpenModal.addEventListener('click', () => {
    modal.show();
    xCloseModal.hidden = false;
    btnCloseModal.hidden = false;
    modal._config.keyboard = true;
    modal._config.backdrop = true;
  });
};
