import express from "express";
import { addReview, getReviews } from "../controllers/reviewControllers.js";
import authMiddleware from "../middleware/authMiddleware.js";

const reviewRoute = express.Router();

// Any authenticated user can add reviews
reviewRoute.post("/", authMiddleware, addReview);

// Anyone can view reviews
reviewRoute.get("/", getReviews);

export default reviewRoute;
