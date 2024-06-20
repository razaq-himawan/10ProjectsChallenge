import { sun, moon } from '../icons/icons.js';
import {
  getPreferredTheme,
  getStoredTheme,
  setStoredTheme,
  setTheme,
} from '../data/theme.js';
import { extractStoreIdFromPath } from './helper.js';

const modeToggleBtn = document.querySelector('#mode-toggle-btn');

const btn = document.querySelector('.btn-dark-light');
const pageLink = document.querySelectorAll('.page-link');

const storedTheme = getStoredTheme();
const preferredTheme = getPreferredTheme();

export const theme = () => {
  const storeId = extractStoreIdFromPath();

  if (storeId) {
    toggle();
    setIcon();
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(preferredTheme);
      }
    });

  setTheme(preferredTheme);
  setStoredTheme(preferredTheme);
};

const toggle = () => {
  modeToggleBtn.addEventListener('click', () => {
    const storedTheme = getStoredTheme();
    const newTheme = storedTheme === 'light' ? 'dark' : 'light';

    if (storedTheme) {
      document.documentElement.setAttribute('data-bs-theme', newTheme);
    }

    componentTheme(newTheme);
    setStoredTheme(newTheme);
  });
};

function setIcon() {
  modeToggleBtn.innerHTML = preferredTheme === 'dark' ? moon : sun;

  if (btn) {
    btn.classList.toggle('btn-light', preferredTheme === 'dark');
    btn.classList.toggle('btn-dark', preferredTheme !== 'dark');
  }

  pageLink.forEach((link) => {
    link.classList.toggle('text-light', preferredTheme === 'dark');
    link.classList.toggle('text-dark', preferredTheme !== 'dark');
  });
}

function componentTheme(newTheme) {
  modeToggleBtn.innerHTML = newTheme === 'light' ? sun : moon;

  if (btn) {
    btn.classList.toggle('btn-light', newTheme === 'dark');
    btn.classList.toggle('btn-dark', newTheme !== 'dark');
  }

  pageLink.forEach((link) => {
    link.classList.toggle('text-light', newTheme === 'dark');
    link.classList.toggle('text-dark', newTheme !== 'dark');
  });
}
