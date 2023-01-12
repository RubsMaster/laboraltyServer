import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    business: {
        type: String
    },
    branch: {
        type: String
    },
    job: {
        type: String
    },
    department: {
        type: String
    },
    antiquity: {
        type: String
    },
    laborCompliance: {
        type: String
    },
    employmentFile: {
        type: String
    }
});

export default mongoose.model('Employee', employeeSchema)