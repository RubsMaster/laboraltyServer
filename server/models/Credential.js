import mongoose from "mongoose";

const credentialSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  relatedId: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Credential", credentialSchema);
