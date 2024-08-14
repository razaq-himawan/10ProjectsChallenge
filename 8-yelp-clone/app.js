import 'dotenv/config';
import ejsMate from 'ejs-mate';
import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
import { ErrorHandler } from './utils/ErrorHandler.js';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

import passport from 'passport';
import LocalStrategy from 'passport-local';
import { User } from './models/user.js';

import { router as authRouter } from './routes/auth.js';
import { router as placesRouter } from './routes/places.js';
import { router as reviewRouter } from './routes/reviews.js';

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// connect to db
(async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1/bestpoints');
    console.log('connected to mongodb');
  } catch (error) {
    console.error(error);
  }
})();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: Date.now() + 24 * 60 * 60 * 1000,
    },
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/', authRouter);
app.use('/places', placesRouter);
app.use('/places/:place_id/reviews', reviewRouter);

app.all('*', (req, res, next) => {
  next(new ErrorHandler('Page not found', 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Oh no, something went wrong!';
  res.status(statusCode).render('error', { err });
});

app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000`);
});
