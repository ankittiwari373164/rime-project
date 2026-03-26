import Course from "../models/coursesModels.js";
import mongoose from "mongoose";

// ✅ Create Course (Admin)
export const createCourse = async (req, res) => {
  try {
    let { category, title, duration, fees, seat, eligibility, highlights, college } = req.body;

    // 🔴 Validation
    if (!category || !title || !eligibility || !college) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing"
      });
    }

    // 🔴 Convert highlights (if string from textarea)
    if (typeof highlights === "string") {
      highlights = highlights.split("\n").filter(item => item.trim() !== "");
    }

    // 🔴 ObjectId check
    if (!mongoose.Types.ObjectId.isValid(college)) {
      return res.status(400).json({
        success: false,
        message: "Invalid college ID"
      });
    }

    const course = await Course.create({
      category,
      title,
      duration,
      fees,
      seat,
      eligibility,
      highlights,
      college
    });

    res.status(201).json({
      success: true,
      data: course
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ✅ Get All Courses (Public)
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("college", "name location") // optional
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ✅ Get Single Course (optional but useful)
export const getSingleCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("college");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    res.json({
      success: true,
      data: course
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ✅ Update Course (Admin)
export const updateCourse = async (req, res) => {
  try {
    let updates = req.body;

    // 🔴 Convert highlights if needed
    if (typeof updates.highlights === "string") {
      updates.highlights = updates.highlights.split("\n").filter(i => i.trim() !== "");
    }

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID"
      });
    }

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    res.json({
      success: true,
      data: course
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ✅ Delete Course (Admin)
export const deleteCourse = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid course ID"
      });
    }

    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    res.json({
      success: true,
      message: "Course deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};







// import Course from "../models/coursesModels.js";

// export const createCourse = async (req, res) => {
//   try {
//     const course = await Course.create(req.body);
//     res.status(201).json(course);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const getCourses = async (req, res) => {
//   try {
//     const courses = await Course.find().populate("college");
//     res.json(courses);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
