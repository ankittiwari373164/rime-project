import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({
    program: String,
    tuitionFee: Number,
    otherFees: Number,
    total: Number,
    note: String 
});


const feeModel = mongoose.models.Fee || mongoose.model("Fee", feeSchema);

export default feeModel;