import multer from 'multer';
import path from 'path';
import { ErrorHandler } from '../utils/ErrorHandler.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix + path.extname(file.originalname)}`
    );
  },
});

export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new ErrorHandler('Only images are allowed.'));
    }
  },
});
