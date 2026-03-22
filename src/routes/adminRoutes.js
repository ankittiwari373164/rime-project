import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  getApplications,
  deleteApplication,
  updateApplication
} from "../controllers/applicationControllers.js";

import {
  createCourse,
  updateCourse,
  deleteCourse
} from "../controllers/courseControllers.js";

const router = express.Router();

// 🔐 Admin Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ success: true, token });

  } catch (err) {
    res.status(500).json({ error: "Login error" });
  }
});

// ✅ Application Routes
router.get("/applications", authMiddleware, getApplications);
router.delete("/application/:id", authMiddleware, deleteApplication);
router.put("/application/:id", authMiddleware, updateApplication);

// ✅ Course Routes (FIXED)
router.post("/courses", authMiddleware, createCourse);
router.put("/courses/:id", authMiddleware, updateCourse);
router.delete("/courses/:id", authMiddleware, deleteCourse);

export default router;




// import express from "express";
// import Admin from "../models/adminModel.js";

// const router = express.Router();

// // ⚠️ TEMPORARY ROUTE (baad me delete karna)
// router.post("/create-admin", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const adminExists = await Admin.findOne({ email });
//     if (adminExists) {
//       return res.status(400).json({ message: "Admin already exists" });
//     }

//     const admin = new Admin({ email, password });
//     await admin.save();

//     res.json({ success: true, message: "Admin created" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Error creating admin" });
//   }
// });

// export default router;