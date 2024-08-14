import { Review } from '../models/review.js';
import { Place } from '../models/place.js';

export const store = async (req, res) => {
  const { place_id } = req.params;

  const review = new Review(req.body.review);
  review.author = req.user._id;
  await review.save();

  const place = await Place.findById(place_id);
  place.reviews.push(review);
  await place.save();

  req.flash('success_msg', 'Review added successfully');
  res.redirect(`/places/${place_id}`);
};

export const destroy = async (req, res) => {
  const { place_id, review_id } = req.params;
  await Place.findByIdAndUpdate(place_id, {
    $pull: { reviews: review_id },
  });
  await Review.findByIdAndDelete(review_id);
  req.flash('success_msg', 'Review deleted successfully');
  res.redirect(`/places/${place_id}`);
};
