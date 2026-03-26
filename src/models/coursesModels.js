// import mongoose from "mongoose";

// const courseSchema = new mongoose.Schema({
//   category: { type: String, required: true },   // e.g., ug ,pg
//   title: { type: String, required: true },
//   duration: { type: String }, // e.g., "3 years"
//   fees: { type: Number },
//   seat: { type: Number },
//   eligibility: { type: String, required: true },
//   highlights: { type: Array },
//   college: { type: mongoose.Schema.Types.ObjectId, ref: "College" }
// }, { timestamps: true });

// export default mongoose.model("Course", courseSchema);


import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ["ug", "pg", "diploma"]
  },

  title: {
    type: String,
    required: true,
    trim: true
  },

  duration: {
    type: String,
    trim: true
  },

  fees: {
    type: Number,
    min: 0
  },

  seat: {
    type: Number,
    min: 0
  },

  eligibility: {
    type: String,
    required: true,
    trim: true
  },

  highlights: [
    {
      type: String,
      trim: true
    }
  ], // ✅ for UI bullets

  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true
  }

}, { timestamps: true });

export default mongoose.model("Course", courseSchema);