import express from "express";
import { enquiryForm, getEnquiry } from "../controllers/enquiryController.js";


const enquiryRoute = express.Router();

enquiryRoute.get("/", getEnquiry);
enquiryRoute.post("/user-enquiry", enquiryForm);

export default enquiryRoute;