import dotenv from "dotenv";
dotenv.config();

import express from "express"
import cors from "cors";
import courseRoute from "./src/routes/courseRoutes.js";
import reviewRoute from "./src/routes/reviewRoutes.js";
import connectDB from "./src/config/MongoDB.js";
import feeRoute from "./src/routes/feeRoute.js";
import enquiryRoute from "./src/routes/enquiryRoute.js";
import contactRoute from "./src/routes/contactRoute.js";
import applicationRoute from "./src/routes/applicationRoute.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT;

connectDB();

// ✅ CORS sabse pehle
app.use(cors({
  origin: "https://rime.co.in",
  credentials: true
}));

app.options("*", cors());

// ✅ body & cookies
app.use(express.json());
app.use(cookieParser());

// ✅ proxy (Vercel ke liye)
app.set("trust proxy", 1);



// // Routes
app.use("/api/courses", courseRoute); 
app.use("/api/reviews", reviewRoute);
app.use("/api/course/fee", feeRoute);
app.use("/api/enquiry", enquiryRoute);
app.use("/api/contact", contactRoute);
app.use("/api/apply", applicationRoute);
app.use("/api/admin" , adminRoutes)
app.use("/api/auth", authRoutes) // For authentication routes
app.get("/", (req,res)=>{
    res.send("Welcome to RIME Server...");
})

app.listen(PORT,()=>{
    console.log(`server in listening at PORT ${PORT}`);

})