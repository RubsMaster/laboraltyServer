import mongoose from "mongoose";

const credentialSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    relatedId: {
        type: String
    }
});

export default mongoose.model('Credential', credentialSchema)