import express from 'express';

import * as AuthController from '../controllers/auth.js';

import wrapAsync from '../utils/wrap-async.js';
import passport from 'passport';

import { isLoggedIn } from '../middlewares/is-logged-in.js';

export const router = express.Router();

router
  .route('/register')
  .get(isLoggedIn, AuthController.registerForm)
  .post(isLoggedIn, wrapAsync(AuthController.register));

router
  .route('/login')
  .get(isLoggedIn, AuthController.loginForm)
  .post(
    isLoggedIn,
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureFlash: {
        type: 'error_msg',
        msg: 'Invalid username or password',
      },
    }),
    AuthController.login
  );

router.post('/logout', AuthController.logout);
