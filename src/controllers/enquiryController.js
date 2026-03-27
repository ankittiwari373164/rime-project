import enquiryModel from "../models/enquiryModel.js";

export const enquiryForm = async(req,res) => {
    try {
        const newData = new enquiryModel(req.body);
        const saveEnquiry = await newData.save();

        res.status(201).json(saveEnquiry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getEnquiry = async(req,res) => {
    try {
        const allEnquiry = await enquiryModel.find({});
        res.status(200).json(allEnquiry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteEnquiry = async (req, res) => {
  try {
    await enquiryModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Enquiry deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};