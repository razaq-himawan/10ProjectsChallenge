import { User } from '../models/user.js';

export const registerForm = (req, res) => {
  res.render('auth/register');
};

export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registerUser = await User.register(user, password);

    req.login(registerUser, (err) => {
      if (err) return next(err);

      req.flash('success_msg', 'You are registered and logged in.');
      res.redirect('/places');
    });
  } catch (error) {
    req.flash('error_msg', error.message);
    res.redirect('/register');
  }
};

export const loginForm = (req, res) => {
  res.render('auth/login');
};

export const login = (req, res) => {
  req.flash('success_msg', 'You are logged in');
  res.redirect('/places');
};

export const logout = (req, res) => {
  req.logOut((err) => {
    if (err) return next(err);

    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
  });
};
