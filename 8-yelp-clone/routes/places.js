import express from 'express';

import * as PlaceController from '../controllers/places.js';

import wrapAsync from '../utils/wrap-async.js';

import { isValidObjectId } from '../middlewares/is-valid-object-id.js';
import { isAuth } from '../middlewares/is-auth.js';
import { isAuthorPlace } from '../middlewares/is-author.js';
import { validatePlace } from '../middlewares/validator.js';
import { upload } from '../config/multer.js';

export const router = express.Router();

router
  .route('/')
  .get(wrapAsync(PlaceController.index))
  .post(
    isAuth,
    upload.array('image', 5),
    validatePlace,
    wrapAsync(PlaceController.store)
  );

router.get('/create', isAuth, PlaceController.createForm);

router
  .route('/:id')
  .get(isValidObjectId('/places'), wrapAsync(PlaceController.show))
  .put(
    isAuth,
    isAuthorPlace,
    isValidObjectId('/places'),
    upload.array('image', 5),
    validatePlace,
    wrapAsync(PlaceController.update)
  )
  .delete(
    isAuth,
    isAuthorPlace,
    isValidObjectId('/places'),
    wrapAsync(PlaceController.destroy)
  );

router.get(
  '/:id/edit',
  isAuth,
  isAuthorPlace,
  isValidObjectId('/places'),
  wrapAsync(PlaceController.edit)
);

router.delete(
  '/:id/images',
  isAuth,
  isAuthorPlace,
  isValidObjectId('/places'),
  wrapAsync(PlaceController.destroyImage)
);
