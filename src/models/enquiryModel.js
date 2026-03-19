import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    institute: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
});

const enquiryModel = mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);

export default enquiryModel;