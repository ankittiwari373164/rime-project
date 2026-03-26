import express from "express";
import { addReview, getReviews } from "../controllers/reviewControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const reviewRoute = express.Router();

// Any authenticated user can add reviews
reviewRoute.post("/", protect, addReview);

// Anyone can view reviews
reviewRoute.get("/", getReviews);

export default reviewRoute;
