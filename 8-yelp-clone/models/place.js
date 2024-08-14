import mongoose, { Schema } from 'mongoose';
import { Review } from './review.js';

const placeSchema = Schema({
  title: String,
  price: Number,
  description: String,
  location: String,
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  images: [
    {
      url: String,
      filename: String,
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
});

placeSchema.post('findOneAndDelete', async (doc) => {
  if (doc) {
    await Review.deleteMany({ _id: { $in: doc.reviews } });
  }
});

export const Place = mongoose.model('Place', placeSchema);
