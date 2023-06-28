import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const serviceSchema = new mongoose.Schema({
    serviceLogName: {
        type: String,
        required: true
    },
    serviceLogType: {
        type: String,
        required: true
    },
    tasks: [taskSchema]
});

export default mongoose.model("ServiceLog", serviceSchema);