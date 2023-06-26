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
    }
});

export default mongoose.model('Client', clientSchema)