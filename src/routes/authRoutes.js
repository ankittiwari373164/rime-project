import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getMe
} from "../controllers/authController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Protected
router.get("/me", protect, getMe);

// Admin test
router.get("/admin", protect, adminOnly, (req, res) => {
  res.json({ success: true, msg: "Welcome Admin" });
});

export default router;