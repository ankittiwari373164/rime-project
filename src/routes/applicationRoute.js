import express from "express";
import { createApplication, getApplications } from "../controllers/applicationControllers.js";

const applicationRoute = express.Router();

// Students can submit applications
applicationRoute.post(
  "/user-apply",
  createApplication
);

// Admin can view all applications
applicationRoute.get(
  "/",
  getApplications
);

export default applicationRoute;
