import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const registerUser = async (req, res) => {
  const { relation, firstName, userEmail, userName } = req.body;
  const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

  try {
    // Validate required fields
    if (!relation || !firstName || !userEmail || !userName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Check if email is already in use
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // Assign a default role (fetch from environment or set a hardcoded value)
    const role = process.env.DEFAULT_USER_ROLE || 400;

    // Create the user in the database
    const user = await User.create({
      relation,
      firstName,
      userEmail,
      userName,
      role,
    });

    // Generate the token
    const token = jwt.sign({ id: user._id }, ACCESS_TOKEN_SECRET, { expiresIn: "1d" });

    // Configure transporter for email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kannur4806@gmail.com", // Store email in env variable
        pass: "Sanjuunnikuttan@12345", // Store password in env variable
      },
    });

    // Setup mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Email Verification",
      text: `Please verify your email by clicking the following link: 
        ${process.env.CLIENT_URL}/verify-email?token=${token}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Ensure user creation was successful
    if (!user) {
      return res.status(500).json({ message: "User registration failed" });
    }

    // Respond with success and include the verification token
    return res.status(201).json({
      message: "User registration successful. Please check your email for verification.",
    });
  } catch (err) {
    console.error("Error during registration:", err);
    return res.status(500).json({ message: `Internal Server Error: ${err.message}` });
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
    };

    const editedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });

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

const verifyEmail = async (req, res) => {
    const { token } = req.query;
  
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  
      const user = await User.findById(decoded.id);
  
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
  
      if (user.isVerified) {
        return res.status(400).json({ message: "Email already verified" });
      }
      user.isVerified = true;
      await user.save();
  
      return res.status(200).json({ message: "Email verified successfully" });
    } catch (err) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
  };
  

export { registerUser, editUser ,verifyEmail};
