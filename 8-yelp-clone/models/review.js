import mongoose, { Schema } from 'mongoose';

const reviewSchema = Schema({
  rating: Number,
  body: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export const Review = mongoose.model('Review', reviewSchema);
