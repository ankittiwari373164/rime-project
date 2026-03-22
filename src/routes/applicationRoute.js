import express from "express";
import { createApplication, getApplications , deleteApplication, updateApplication } from "../controllers/applicationControllers.js";

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

applicationRoute.delete("/:id", deleteApplication);
applicationRoute.put("/:id", updateApplication);
export default applicationRoute;
