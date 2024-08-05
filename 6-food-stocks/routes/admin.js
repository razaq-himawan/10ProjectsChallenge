import express from 'express';
import { asyncHandler } from '../utils/async-handler.js';
import { stockSchema } from '../schemas/stock.js';
import { ErrorHandler } from '../utils/ErrorHandler.js';

import { isValidObjectId } from '../middlewares/is-valid-object-id.js';

import { User } from '../models/user.js';
import { Stock } from '../models/stock.js';

export const router = express.Router();

const validateStock = (req, res, next) => {
  const { error } = stockSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(', ');
    return next(new ErrorHandler(msg, 400));
  } else {
    next();
  }
};

router.get('/', (req, res) => {
  res.render('admin/dashboard', { currentRoute: '/dashboard' });
});

// Stocks route
router.get(
  '/stocks',
  asyncHandler(async (req, res) => {
    const stocks = await Stock.find();
    res.render('admin/stocks/stocks', {
      stocks,
      currentRoute: '/dashboard/stocks',
    });
  })
);

router.get('/stocks/create', (req, res) => {
  res.render('admin/stocks/stocks-create-form', {
    currentRoute: '/dashboard/stocks',
  });
});

router.post(
  '/stocks/create',
  validateStock,
  asyncHandler(async (req, res) => {
    const stock = new Stock(req.body.stock);
    await stock.save();
    req.flash('success_msg', 'Stock added successfully');
    res.redirect('/dashboard/stocks');
  })
);

router.get(
  '/stocks/:id',
  isValidObjectId('/dashboard/stocks'),
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const stock = await Stock.findById(id);
    res.render('admin/stocks/stocks-edit-form', {
      stock,
      currentRoute: '/dashboard/stocks',
    });
  })
);

router.put(
  '/stocks/:id',
  isValidObjectId('/dashboard/stocks'),
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    await Stock.findByIdAndUpdate(id, { ...req.body.stock });
    req.flash('success_msg', 'Stock updated successfully');
    res.redirect(`/dashboard/stocks`);
  })
);

router.delete(
  '/stocks/:id',
  isValidObjectId('/dashboard/stocks'),
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    await Stock.findByIdAndDelete(id);
    req.flash('success_msg', 'Stock deleted successfully');
    res.redirect(`/dashboard/stocks`);
  })
);

// Customer route
router.get(
  '/customers',
  asyncHandler(async (req, res) => {
    const customers = await User.find({ role: 'GUEST' }).exec();
    res.render('admin/customers/customers', {
      customers,
      currentRoute: '/dashboard/customers',
    });
  })
);

router.get('/customers/create', (req, res) => {
  res.render('admin/customers/customers-create-form', {
    currentRoute: '/dashboard/customers',
  });
});

router.post(
  '/customers/create',
  asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    await User.register(user, password);

    req.flash('success_msg', 'Customer added successfully');
    res.redirect('/dashboard/customers');
  })
);

router.get(
  '/customers/:id',
  isValidObjectId('/dashboard/customers'),
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const customer = await User.findById(id);
    res.render('admin/customers/customers-edit-form', {
      customer,
      currentRoute: '/dashboard/customers',
    });
  })
);

router.put(
  '/customers/:id',
  isValidObjectId('/dashboard/customers'),
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, { ...req.body });
    req.flash('success_msg', 'Customer updated successfully');
    res.redirect(`/dashboard/customers`);
  })
);

router.delete(
  '/customers/:id',
  isValidObjectId('/dashboard/customers'),
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    req.flash('success_msg', 'Stock deleted successfully');
    res.redirect(`/dashboard/customers`);
  })
);
