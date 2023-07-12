import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  user: { type: String, required: true },
  password: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  role: { type: String, required: true }
});

export default mongoose.model('Admin', adminSchema);

 