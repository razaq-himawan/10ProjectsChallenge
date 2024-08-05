import mongoose, { Schema } from 'mongoose';

const stockSchema = Schema({
  name: String,
  amount: Number,
  price: Number,
  type: {
    type: String,
    enum: ['FOOD', 'DRINK', 'APPETIZER'],
    default: 'FOOD',
  },
  imgPath: String,
  desc: String,
});

export const Stock = mongoose.model('Stock', stockSchema);
