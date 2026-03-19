import Review from "../models/reviewModel.js";

export const addReview = async (req, res) => {
  try {
    const review = await Review.create({ ...req.body, user: req.user.id });
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("user college");
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
