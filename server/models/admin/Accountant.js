import mongoose from "mongoose";

const accountantSchema = new mongoose.Schema({
  businessName: {
    type: String,
  },
  RFC: {
    type: String,
  },
  firstNameTitular: {
    type: String,
  },
  lastNameTitular: {
    type: String,
  },
  email: {
    type: String,
  },
  street: {
    type: String,
  },
  innerNumber: {
    type: String,
  },
  outdoorNumber: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  suburb: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  officePhoneNumber: {
    type: String,
  },
  mobilePhoneNumber: {
    type: String,
  },
  totalEmployees: {
    type: String,
  },
  totalRFC: {
    type: String,
  },
  monthlyDebt: {
    type: String,
  },
  userAssigned: {
    type: String,
  },
  passwordAssigned: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, required: true },
});

export default mongoose.model("Accountant", accountantSchema);
