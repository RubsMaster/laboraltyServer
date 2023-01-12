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
        type: Boolean,
        default: false
    },
    isImmediate: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('laborDocuments', laborDocumentsSchema)