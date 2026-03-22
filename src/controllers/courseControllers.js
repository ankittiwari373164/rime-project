import Course from "../models/coursesModels.js";

// ✅ Create Course (Admin)
export const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      success: true,
      data: course
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ✅ Get All Courses (Public)
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });

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

// ✅ Update Course (Admin)
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({
      success: true,
      data: course
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ✅ Delete Course (Admin)
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({
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
