import express from "express";
import { enquiryForm, getEnquiry, deleteEnquiry } from "../controllers/enquiryController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const enquiryRoute = express.Router();

// ❌ Public (user form submit)
enquiryRoute.post("/user-enquiry", enquiryForm);

// ✅ Admin only routes
enquiryRoute.get("/", protect, adminOnly, getEnquiry);
enquiryRoute.delete("/:id", protect, adminOnly, deleteEnquiry);

export default enquiryRoute;