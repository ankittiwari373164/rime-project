import Application from "../models/applicationModel.js";

export const createApplication = async (req, res) => {
  try {
    const {
      personalInformation,
      academicInformation,
      programApplied,
      addressInformation
    } = req.body;

    const application = await Application.create({
      personalInformation,
      academicInformation,
      programApplied,
      addressInformation
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find();

    res.status(200).json({
      success: true,
      applications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};
