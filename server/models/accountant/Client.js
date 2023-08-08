import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    businessName: {
        type: String
    },
    taxRegime: {
        type: String
    },
    RFC: {
        type: String
    },
    street: {
        type: String
    },    
    outdoorNumber: {
        type: String
    },
    innerNumber: {
        type: String
    },
    zipCode: {
        type: String
    },
    suburb: {
        type: String
    },
    CFDI: {
        type: String
    },
    inChargeName: {
        type: String
    },
    jobTitle: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    extension: {
        type: String
    },
    email: {
        type: String
    },
    totalRFC: {
        type: String
    },
    totalEmployees: {
        type: String
    },
    userAssigned: {
        type: String
    },
    passwordAssigned: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    assignedTo: {
        type: String
    },
    createdBy: {
        type: String
    }
});

export default mongoose.model('Client', clientSchema)