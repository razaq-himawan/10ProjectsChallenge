import ejsMate from 'ejs-mate';
import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import path from 'path';
import passport from 'passport';
import LocalStrategy from 'passport-local';

import { fileURLToPath } from 'url';
import { config } from 'dotenv';

import { ErrorHandler } from './utils/ErrorHandler.js';
import { User } from './models/user.js';
import { Stock } from './models/stock.js';

import { router as authRouter } from './routes/auth.js';
import { router as adminRouter } from './routes/admin.js';

import { isAdmin } from './middlewares/is-admin.js';
import { asyncHandler } from './utils/async-handler.js';

config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sessionOptions = {
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: Date.now() + 24 * 60 * 60 * 1000,
  },
};

// Database Connection
(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/food-stocks');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();

// Set up view engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Passport Configuration
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Custom Middleware for Flash Messages and Current User
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// Routes
app.get(
  '/',
  asyncHandler(async (req, res) => {
    const stocks = await Stock.find();

    const foods = stocks.filter((stock) => stock.type === 'FOOD');
    const drinks = stocks.filter((stock) => stock.type === 'DRINK');
    const appetizers = stocks.filter((stock) => stock.type === 'APPETIZER');

    res.render('home', { foods, drinks, appetizers, currentRoute: '/' });
  })
);

app.get('/checkout', (req, res) => {
  res.render('checkout', { currentRoute: '/checkout' });
});

app.use('/', authRouter);
app.use('/dashboard', isAdmin, adminRouter);

// 404 Error Handler
app.all('*', (req, res, next) => {
  next(new ErrorHandler('Page not found', 404));
});

// Global Error Handler
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Oh no, something went wrong!';
  res.status(statusCode).render('error', { err });
});

// Start Server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
