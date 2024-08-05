import mongoose from 'mongoose';

export const isValidObjectId = (redirectTo = '/') => {
  return async (req, res, next) => {
    const paramId = ['id', 'place_id', 'review_id'].find(
      (param) => req.params[param]
    );

    if (!paramId) {
      next();
    }

    const id = req.params[paramId];
    if (!mongoose.Types.ObjectId.isValid(id)) {
      req.flash('error_msg', 'Invalid Id / Data not found.');
      return res.redirect(redirectTo);
    }

    next();
  };
};
