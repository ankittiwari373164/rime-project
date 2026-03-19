import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    personalInformation: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        dob: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        nationality: {
            type: String,
            required: true
        },
    },

    academicInformation: {
        matriculationBoard: {
            type: String,
            required: true
        },
        matriculationPercentage: {
            type: Number,
            required: true
        },
        intermediateBoard: {
            type: String,
            required: true
        },
        intermediatePercentage: {
            type: Number,
            required: true
        },
        collegeName: {
            type: String
        },
        collegeCgpa: {
            type: Number
        },
    },

    programApplied: {
        program: {
            type: String,
            required: true
        },
        specialization: {
            type: String,
            required: true
        },
    },

    addressInformation: {
        address: {
            type: String,
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
        pincode: {
            type: Number,
            required: true
        }
    },
});

const applicationModel = mongoose.models.Application || mongoose.model("Application", applicationSchema);

export default applicationModel;