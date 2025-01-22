import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const defaultRole = process.env.USER_ROLE;

const userSchema = new Schema({
  relation: {
    type: String,
  },
  firstName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  gender:{
    type: String,
  },
  religion: {
    type: String,
  },
  motherTounge: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  caste: {
    type: String,
  },
  subCaste: {
    type: String,
  },
  Gothran: {
    type: String,
  },
  sudhajathakam: {
    type: String,
  },
  dhosham: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  height: {
    type: String,
  },
  familStatus: {
    type: String,
  },
  familyNetworth: {
    type: String,
  },
  familyType: {
    type: String,
  },
  familyValues: {
    type: String,
  },
  PhysicalValue: {
    type: String,
  },
  education: {
    type: String,
  },
  employed: {
    type: String,
  },
  occupation: {
    type: String,
  },
  annualIncome: {
    type: String,
  },
  about: {
    type: String,
  },
  role: {
    type: Number,
    default: defaultRole,
  },
  isVerified: {
    type: Boolean,
    default: false, // Set default to false when the user registers
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  profileViews: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  console.log("Password before hashing:", this.password);
  try {
    this.password = await bcrypt.hash(this.password, 10);
    console.log("Password after hashing:", this.password);
    next();
  } catch (error) {
    console.error("Error hashing password:", error);
    next(error);
  }
});


export const User = mongoose.model("User", userSchema);
