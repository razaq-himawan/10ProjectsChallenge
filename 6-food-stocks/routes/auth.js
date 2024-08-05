import express from 'express';
import { User } from '../models/user.js';
import { asyncHandler } from '../utils/async-handler.js';
import passport from 'passport';
import { isLoggedIn } from '../middlewares/is-logged-in.js';

export const router = express.Router();

router.get('/register', isLoggedIn, (req, res) => {
  res.render('auth/register');
});

router.post(
  '/register',
  isLoggedIn,
  asyncHandler(async (req, res) => {
    try {
      const { email, username, password } = req.body;
      const user = new User({ email, username });
      const registerUser = await User.register(user, password);

      req.login(registerUser, (err) => {
        if (err) return next(err);

        req.flash('success_msg', 'You are registered and logged in.');
        res.redirect('/');
      });
    } catch (error) {
      req.flash('error_msg', error.message);
      res.redirect('/register');
    }
  })
);

router.get('/login', isLoggedIn, (req, res) => {
  res.render('auth/login');
});

router.post(
  '/login',
  isLoggedIn,
  passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: {
      type: 'error_msg',
      msg: 'Invalid username or password',
    },
  }),
  (req, res) => {
    req.flash('success_msg', 'You are logged in');
    res.redirect('/');
  }
);

router.post('/logout', (req, res) => {
  req.logOut((err) => {
    if (err) return next(err);

    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
  });
});
