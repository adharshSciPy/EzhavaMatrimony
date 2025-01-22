import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { type } from "os";
import jwt from "jsonwebtoken";

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
  motherTongue: {
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
  profileViews:
   [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
   isEnabled:{
    type:Boolean,
    default:true,
   }
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

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};


userSchema.methods.generateAccessToken = function () {
  const payload = { id: this._id, email: this.userEmail };
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d", // Adjust the expiry as needed
  });
  return accessToken;
};
userSchema.methods.generateRefreshToken = function () {
  const payload = { id: this._id };
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d", // Adjust the expiry as needed
  });
  return refreshToken;
};


export const User = mongoose.model("User", userSchema);
