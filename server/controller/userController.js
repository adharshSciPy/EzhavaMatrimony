import { User } from "../model/userModel.js";
import nodemailer from "nodemailer";
import crypto from "crypto";
import bcrypt from "bcrypt";
const registerUser = async (req, res) => {
  const { relation, firstName, userEmail } = req.body;

  try {
    if (!relation || !firstName || !userEmail) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }



    const role = process.env.DEFAULT_USER_ROLE;

    const otp = crypto.randomInt(100000, 999999); // Generate a 6-digit OTP
    const hashedOtp = await bcrypt.hash(otp.toString(), 10); // Hash the OTP
    const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

    const user = await User.create({
      relation,
      firstName,
      userEmail,
      role,
      otp: hashedOtp, // Save hashed OTP
      otpExpiry, // Save OTP expiry time
      isVerified: false, // Default to false
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Email Verification - OTP",
      text: `Your One-Time Password (OTP) for email verification is: ${otp}. 
        The OTP is valid for 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      message:
        "User registered successfully. Please check your email for the OTP.",
      user: {
        id: user._id,
        relation: user.relation,
        firstName: user.firstName,
        userEmail: user.userEmail,
        userName: user.userName,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Error during registration:", err);
    return res
      .status(500)
      .json({ message: `Internal Server Error: ${err.message}` });
  }
};
const verifyOtp = async (req, res) => {
  const { userEmail, otp } = req.body;

  try {
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isOtpValid = await bcrypt.compare(otp.toString(), user.otp);
    if (!isOtpValid || user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    return res.status(200).json({ message: "Email verified successfully" });
  } catch (err) {
    console.error("Error during OTP verification:", err);
    return res
      .status(500)
      .json({ message: `Internal Server Error: ${err.message}` });
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const {
    dateOfBirth,
    religion,
    motherTounge,
    email,
    password,
    caste,
    subCaste,
    Gothran,
    sudhajathakam,
    dhosham,
    gender,
    maritalStatus,
    height,
    familStatus,
    familyNetworth,
    familyType,
    familyValues,
    PhysicalValue,
    education,
    employed,
    occupation,
    annualIncome,
    about,
  } = req.body;

  try {
    let updatedData = {
      dateOfBirth,
      religion,
      motherTounge,
      email,
      caste,
      subCaste,
      Gothran,
      sudhajathakam,
      dhosham,
      maritalStatus,
      height,
      familStatus,
      familyNetworth,
      familyType,
      familyValues,
      PhysicalValue,
      education,
      employed,
      occupation,
      annualIncome,
      about,
      password,
      gender
    };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }
    const editedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!editedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User edited successfully",
      data: editedUser,
    });
  } catch (error) {
    console.error("Error editing user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const resendOtp = async (req, res) => {
  const { userEmail } = req.body;

  try {
    const user = await User.findOne({ userEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "Email already verified" });
    }

    const otp = crypto.randomInt(100000, 999999); // Generate a new OTP
    const hashedOtp = await bcrypt.hash(otp.toString(), 10);
    user.otp = hashedOtp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000; // Reset expiry time
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Resend OTP",
      text: `Your new OTP is: ${otp}. It is valid for 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "OTP resent successfully" });
  } catch (err) {
    console.error("Error during OTP resend:", err);
    return res
      .status(500)
      .json({ message: `Internal Server Error: ${err.message}` });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    let userDetails;
    const user = await User.findById(id)
    const gender = user.gender
    console.log("gender coming", gender)
    if (gender === "Male") {
      userDetails = await User.find({ gender: "Female" })
    }
    else{
      userDetails = await User.find({ gender: "Male" })
    }
    return res.status(200).json({ user: userDetails })

  } catch (error) {
    return res.status(400).json({ message: error.message })
  }z

}

export { registerUser, editUser, verifyOtp, resendOtp, getUser };
