import { modalInit } from './functions/modal.js';
import { request } from './functions/request.js';
import { theme } from './functions/toggle.js';
import { preview } from './functions/image-previewer.js';

export const main = () => {
  modalInit();
  theme();
  request();
  preview();
};
