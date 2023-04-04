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
        type: String,
        default: false
    },
    uniqueName: {
        type: String,
        default: false
    },
    uniqueType: {
        type: String,
        default: false
    },
    uniqueName1: {
        type: String,
        default: false
    },
    uniqueType1: {
        type: String,
        default: false
    },
    uniqueName2: {
        type: String,
        default: false
    },
    uniqueType2: {
        type: String,
        default: false
    },
    uniqueName3: {
        type: String,
        default: false
    },
    uniqueType3: {
        type: String,
        default: false
    },
    uniqueName4: {
        type: String,
        default: false
    },
    uniqueType4: {
        type: String,
        default: false
    },
    uniqueName5: {
        type: String,
        default: false
    },
    uniqueType5: {
        type: String,
        default: false
    },
    isMoral: {
        type: String,
        default: false
    }
});

export default mongoose.model('laborDocuments', laborDocumentsSchema)