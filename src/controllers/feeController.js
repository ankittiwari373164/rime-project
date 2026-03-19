import feeModel from "../models/feeModel.js";

export const feeStructure = async(req,res) => {
    try {
        const fee = await feeModel.find({});
        res.status(200).json(fee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createFee = async (req, res) => {
    try {
        const newFee = new feeModel(req.body);
        const savedFee = await newFee.save();

        res.status(201).json(savedFee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
