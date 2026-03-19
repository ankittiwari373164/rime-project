import Course from "../models/coursesModels.js";

export const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("college");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
