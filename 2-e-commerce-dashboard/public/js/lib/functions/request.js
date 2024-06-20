import { BASE_URL, STORE_URL } from '../config/config.js';
import { extractStoreIdFromPath } from './helper.js';

const storeId = extractStoreIdFromPath();

export const request = () => {
  const btnDeleteStore = document.querySelector('#btn-delete-store');
  const btnUpdateStore = document.querySelector('#btn-update-store');
  const btnsDeleteBillboard = document.querySelectorAll(
    '#btn-delete-billboard'
  );
  const btnsDeleteCategory = document.querySelectorAll('#btn-delete-category');
  const btnsDeleteSize = document.querySelectorAll('#btn-delete-size');
  const btnsDeleteColor = document.querySelectorAll('#btn-delete-color');
  const btnsDeleteProduct = document.querySelectorAll('#btn-delete-product');

  if (btnDeleteStore) {
    deleteStore(btnDeleteStore);
  }

  if (btnUpdateStore) {
    updateStore(btnUpdateStore);
  }

  if (btnsDeleteBillboard) {
    btnsDeleteBillboard.forEach((btnDeletebillboard) => {
      deleteBillboard(btnDeletebillboard);
    });
  }

  if (btnsDeleteCategory) {
    btnsDeleteCategory.forEach((btnDeleteCategory) => {
      deleteCategory(btnDeleteCategory);
    });
  }

  if (btnsDeleteSize) {
    btnsDeleteSize.forEach((btnDeleteSize) => {
      deleteSize(btnDeleteSize);
    });
  }

  if (btnsDeleteColor) {
    btnsDeleteColor.forEach((btnDeleteColor) => {
      deleteColor(btnDeleteColor);
    });
  }

  if (btnsDeleteProduct) {
    btnsDeleteProduct.forEach((btnDeleteProduct) => {
      deleteProduct(btnDeleteProduct);
    });
  }
};

function deleteStore(element) {
  element.addEventListener('click', async (e) => {
    const r = await fetch(`${STORE_URL}/${storeId}/delete-store`, {
      method: 'DELETE',
    });

    if (r.ok) {
      location.replace(BASE_URL);
    }
  });
}

function updateStore(element) {
  const inputUpdateStore = document.querySelector('#input-update-store');
  element.setAttribute('disabled', true);

  inputUpdateStore.addEventListener('input', (e) => {
    const { storeName } = e.currentTarget.dataset;
    const { value } = inputUpdateStore;

    if (value === storeName) {
      element.setAttribute('disabled', true);
    } else {
      element.removeAttribute('disabled');
    }
  });

  element.addEventListener('click', async (e) => {
    const { value } = inputUpdateStore;

    const r = await fetch(`${STORE_URL}/${storeId}/update-store`, {
      method: 'PUT',
      body: new URLSearchParams({ name: value }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (r.ok) {
      location.replace(`${STORE_URL}/${storeId}`);
    }
  });
}

function deleteBillboard(element) {
  element.addEventListener('click', async (e) => {
    const { billboardId, imagePath } = e.currentTarget.dataset;

    const r = await fetch(
      `${STORE_URL}/${storeId}/billboards/delete-billboard/${billboardId}`,
      {
        method: 'DELETE',
        body: new URLSearchParams({ imagePath: imagePath }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    if (r.ok) {
      location.replace(`${STORE_URL}/${storeId}/billboards`);
    }
  });
}

function deleteCategory(element) {
  element.addEventListener('click', async (e) => {
    const { categoryId } = e.currentTarget.dataset;

    const r = await fetch(
      `${STORE_URL}/${storeId}/categories/delete-category/${categoryId}`,
      {
        method: 'DELETE',
      }
    );

    if (r.ok) {
      location.replace(`${STORE_URL}/${storeId}/categories`);
    }
  });
}

function deleteSize(element) {
  element.addEventListener('click', async (e) => {
    const { sizeId } = e.currentTarget.dataset;

    const r = await fetch(
      `${STORE_URL}/${storeId}/sizes/delete-size/${sizeId}`,
      {
        method: 'DELETE',
      }
    );

    if (r.ok) {
      location.replace(`${STORE_URL}/${storeId}/sizes`);
    }
  });
}

function deleteColor(element) {
  element.addEventListener('click', async (e) => {
    const { colorId } = e.currentTarget.dataset;

    const r = await fetch(
      `${STORE_URL}/${storeId}/colors/delete-color/${colorId}`,
      {
        method: 'DELETE',
      }
    );

    if (r.ok) {
      location.replace(`${STORE_URL}/${storeId}/colors`);
    }
  });
}

function deleteProduct(element) {
  element.addEventListener('click', async (e) => {
    const { productId } = e.currentTarget.dataset;

    const r = await fetch(
      `${STORE_URL}/${storeId}/products/delete-product/${productId}`,
      {
        method: 'DELETE',
      }
    );

    if (r.ok) {
      location.replace(`${STORE_URL}/${storeId}/products`);
    }
  });
}
