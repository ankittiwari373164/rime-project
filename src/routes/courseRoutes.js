import express from "express";
import { getCourses } from "../controllers/courseControllers.js";

const router = express.Router();

router.get("/", getCourses);

export default router;









// import express from "express";
// import { createCourse, getCourses } from "../controllers/courseControllers.js";
// import authMiddleware from "../middleware/authMiddleware.js";
// import authorizeRoles from "../middleware/role.js";

// const courseRoute = express.Router();

// // Only admins can create courses
// courseRoute.post("/", authMiddleware, authorizeRoles("admin"), createCourse);

// // Anyone can view courses
// courseRoute.get("/", getCourses);


// export default courseRoute;


