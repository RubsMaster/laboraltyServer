import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true, minLength: 8},
  createdAt: { type: Date, default: Date.now },
  role: { type: String, required: true }
});

export default mongoose.model('admin', adminSchema);

 