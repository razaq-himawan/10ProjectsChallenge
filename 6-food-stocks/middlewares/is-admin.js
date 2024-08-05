import { ErrorHandler } from '../utils/ErrorHandler.js';

export const isAdmin = (req, res, next) => {
  // if (req.user?.role != 'ADMIN') {
  //   next(new ErrorHandler('Unauthorized', 401));
  // }

  next();
};
