import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

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

// =========================
// 📄 APPLICATION ROUTES
// =========================

// Get all applications
router.get("/applications", protect, adminOnly, getApplications);

// Delete application
router.delete("/applications/:id", protect, adminOnly, deleteApplication);

// Update application
router.put("/applications/:id", protect, adminOnly, updateApplication);


// =========================
// 🎓 COURSE ROUTES
// =========================

// Create course
router.post("/courses", protect, adminOnly, createCourse);

// Update course
router.put("/courses/:id", protect, adminOnly, updateCourse);

// Delete course
router.delete("/courses/:id", protect, adminOnly, deleteCourse);


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