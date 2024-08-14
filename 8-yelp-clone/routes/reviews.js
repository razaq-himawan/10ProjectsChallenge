import express from 'express';

import * as ReviewController from '../controllers/reviews.js';

import wrapAsync from '../utils/wrap-async.js';

import { isValidObjectId } from '../middlewares/is-valid-object-id.js';
import { isAuth } from '../middlewares/is-auth.js';
import { isAuthorReview } from '../middlewares/is-author.js';
import { validateReview } from '../middlewares/validator.js';

export const router = express.Router({ mergeParams: true });

router.post(
  '/',
  isAuth,
  isValidObjectId('/places'),
  validateReview,
  wrapAsync(ReviewController.store)
);

router.delete(
  '/:review_id',
  isAuth,
  isAuthorReview,
  isValidObjectId('/places'),
  wrapAsync(ReviewController.destroy)
);
