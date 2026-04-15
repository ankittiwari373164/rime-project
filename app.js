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
const app= express();
const PORT = process.env.PORT; 

connectDB();
app.use(cookieParser());
// // Middleware
// app.use(cors());

app.use(cors({
    origin: ["http://localhost:5173", "https://rime.co.in" ,  "https://www.rime.co.in"], 
    credentials: true
}));

app.use(express.json());

// Sitemap route
app.get('/sitemap.xml', (req, res) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://rime.co.in/</loc><lastmod>2026-04-11</lastmod><priority>1.0</priority></url>
  <url><loc>https://rime.co.in/programs</loc><lastmod>2026-04-11</lastmod><priority>0.9</priority></url>
  <url><loc>https://rime.co.in/admissions</loc><lastmod>2026-04-11</lastmod><priority>0.9</priority></url>
  <url><loc>https://rime.co.in/about</loc><lastmod>2026-04-11</lastmod><priority>0.8</priority></url>
  <url><loc>https://rime.co.in/apply</loc><lastmod>2026-04-11</lastmod><priority>0.8</priority></url>
  <url><loc>https://rime.co.in/contact</loc><lastmod>2026-04-11</lastmod><priority>0.7</priority></url>
  <url><loc>https://rime.co.in/gallery</loc><lastmod>2026-04-11</lastmod><priority>0.6</priority></url>
  <url><loc>https://rime.co.in/facilities/labs</loc><lastmod>2026-04-11</lastmod><priority>0.7</priority></url>
  <url><loc>https://rime.co.in/facilities/library</loc><lastmod>2026-04-11</lastmod><priority>0.7</priority></url>
  <url><loc>https://rime.co.in/facilities/playground</loc><lastmod>2026-04-11</lastmod><priority>0.7</priority></url>
  <url><loc>https://rime.co.in/facilities/swimming-pool</loc><lastmod>2026-04-11</lastmod><priority>0.7</priority></url>
  <url><loc>https://rime.co.in/facilities/seminar-halls</loc><lastmod>2026-04-11</lastmod><priority>0.7</priority></url>
</urlset>`;
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).send(sitemap);
});

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
