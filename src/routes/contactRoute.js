import express from "express";
import { getContacts, userContact, deleteContact } from "../controllers/contactController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const contactRoute = express.Router();

// ✅ PUBLIC (form submit karega user)
contactRoute.post("/user-contact", userContact);

// 🔐 ADMIN ONLY
contactRoute.get("/", protect, adminOnly, getContacts);
contactRoute.delete("/:id", protect, adminOnly, deleteContact);

export default contactRoute;