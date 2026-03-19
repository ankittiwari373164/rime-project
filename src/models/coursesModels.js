import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  category: { type: String, required: true },   // e.g., ug ,pg
  title: { type: String, required: true },
  duration: { type: String }, // e.g., "3 years"
  fees: { type: Number },
  seat: { type: Number },
  eligibility: { type: String, required: true },
  highlights: { type: Array },
  college: { type: mongoose.Schema.Types.ObjectId, ref: "College" }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
