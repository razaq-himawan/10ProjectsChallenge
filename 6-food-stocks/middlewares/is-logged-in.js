export const isLoggedIn = (req, res, next) => {
  if (req.user) {
    req.flash('error_msg', 'You already logged in');
    res.redirect('/');
    return;
  }

  next();
};
