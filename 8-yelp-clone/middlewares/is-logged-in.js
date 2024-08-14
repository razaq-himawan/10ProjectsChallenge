export const isLoggedIn = (req, res, next) => {
  if (req.user) {
    return res.redirect('/places');
  }
  next();
};
