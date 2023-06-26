import mongoose from "mongoose";

const consultantSchema = new mongoose.Schema({
    jobTitle: {
        type: String
    },
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    },    
    officePhonenumber: {
        type: String
    },
    mobilePhonenumber: {
        type: String
    },
    userAssigned: {
        type: String
    },
    passwordAssigned: {
        type: String
    }
});

export default mongoose.model('Consultant', consultantSchema)