import express from "express";
import { getContacts, userContact } from "../controllers/contactController.js";

const contactRoute = express.Router();

contactRoute.get("/", getContacts);
contactRoute.post("/user-contact", userContact);

export default contactRoute;