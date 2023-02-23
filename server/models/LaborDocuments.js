import mongoose from "mongoose";

const laborDocumentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    isAvailable: {
        type: String,
        default: false
    },
    isImmediate: {
        type: String,
        default: false
    },
    uniqueFields: {
        type: String,
        default: false
    },
    text: {
        type: String
    }
});

export default mongoose.model('laborDocuments', laborDocumentsSchema)