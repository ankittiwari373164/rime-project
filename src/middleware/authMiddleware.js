import jwt from "jsonwebtoken";
import User from "../models/User.js";

// 🔐 Protect Route (Login check)
export const protect = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ msg: "Not authorized, no token" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from DB
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ msg: "User not found" });
    }

    // Attach user to request
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};

// 👑 Admin Only (Role check)
export const adminOnly = (req, res, next) => {
  try {
    // safety check
    if (!req.user) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Admin access only" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
};