import { User } from "../model/userModel.js";
import nodemailer from "nodemailer";
import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { likedByProfile } from "../model/likedProfileModel.js";
import { Notification } from "../model/notificationModel.js"

const generateShortId = () => {
  const timestamp = Date.now(); // Get current time in milliseconds
  const randomComponent = Math.floor(Math.random() * 1000); // Random number from 0 to 999

  // Combine timestamp and random component to create a unique ID
  const uniqueId = `EZ ${timestamp}${randomComponent}`;

  return uniqueId;
};

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

    const userId = generateShortId();

    const role = process.env.USER_ROLE;

    const otp = crypto.randomInt(100000, 999999); // Generate a 6-digit OTP
    const hashedOtp = await bcrypt.hash(otp.toString(), 10); // Hash the OTP
    const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

    const user = await User.create({
      relation,
      firstName,
      userEmail,
      userId,
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


const editUser = async (req, res) => {
  const { id } = req.params;
  const files = req.files;

  console.log(id);

  const {
    dateOfBirth,
    religion,
    motherTongue,
    email,
    password,
    caste,
    subCaste,
    Gothran,
    suddhaJathakam,
    dosham,
    gender,
    maritalStatus,
    height,
    familyStatus,
    familyNetworth,
    familyType,
    familyValues,
    physicallyChallenged,
    education,
    employmentStatus,
    occupation,
    annualIncome,
    about,
    location,
    hobbies,
    age,
    city,
    citizenship,
    residentStatus,
    educationDetails,
    state

  } = req.body;
  console.log(id);

  try {
    let updatedData = {
      dateOfBirth,
      religion,
      motherTongue,
      email,
      caste,
      subCaste,
      Gothran,
      suddhaJathakam,
      dosham,
      maritalStatus,
      height,
      familyStatus,
      familyNetworth,
      familyType,
      familyValues,
      physicallyChallenged,
      education,
      employmentStatus,
      occupation,
      annualIncome,
      about,
      password,
      gender,
      location,
      hobbies,
      age,
      city,
      citizenship,
      residentStatus,
      educationDetails,
      state,

    };
    if (files && files.length > 0) {
      updatedData.image = files.map((file) => `/uploads/${file.filename}`)
    }
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
    console.log(id);

  }
};
const resendOtp = async (req, res) => {
  const { userEmail } = req.params;

  try {
    const user = await User.findOne({ userEmail });
    console.log(user);
    console.log(userEmail);

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
    if (gender === "Male" || gender === "male") {
      userDetails = await User.find({ gender: "Female", gender: "female" });
    } else {
      userDetails = await User.find({ gender: "Male", gender: "male" });
    }
    return res.status(200).json({ user: userDetails });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { userEmail } = req.body;
  const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

  try {
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found. Check the email." });
    }

    const token = jwt.sign({ id: user._id }, ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const resetLink = `${process.env.CLIENT_URL}/resetpassworduser/${user._id}/${token}`;
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
      subject: "Password Reset Request",
      html: `
        <p>Hi ${user.firstName},</p>
        <p>We received a request to reset your password. Click the link below to reset your password:</p>
        <a href="${resetLink}" target="_blank">${resetLink}</a>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email." });
      } else {
        console.log("Email sent:", info.response);
        return res
          .status(200)
          .json({ message: "Password reset email sent successfully." });
      }
    });
  } catch (error) {
    console.error("Error in forgotPassword:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

  try {
    // Verify the token
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    if (decoded.id !== id) {
      return res
        .status(400)
        .json({ message: "Invalid token or mismatched user ID." });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    await user.save();

    return res.status(200).json({ message: "Password updated successfully." });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Reset link has expired." });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid reset link." });
    } else {
      console.error("Error in resetPassword:", error);
      return res
        .status(500)
        .json({ message: "Internal server error.", error: error.message });
    }
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userdata = await User.findById(id)
    return res.status(200).json({ data: userdata })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const userLogin = async (req, res) => {
  const { userEmail, password } = req.body;
  try {
    // Sanitize and validate input
    if (!userEmail?.trim() || !password?.trim()) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find the user
    const user = await User.findOne({ userEmail: userEmail });

    if (!user) {
      return res.status(404).json({ message: "Email doesn't exist" });
    }

    // Verify password
    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    if (!user.isEnabled) {
      return res
        .status(401)
        .json({ message: "You have been disabled by admin" });
    }
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    // Set refresh token in cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure only in production
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
      userId: user._id, // Send MongoDB _id
      token: accessToken,
    });
  } catch (err) {
    console.error("Error during login:", err);
    return res
      .status(500)
      .json({ message: `Internal Server Error: ${err.message}` });
  }
};



const refreshAccessToken = async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized API request" });
  }

  try {
    // Verify refresh token
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            return res
              .status(403)
              .json({ message: "Refresh token expired. Please log in again." });
          }
          return res.status(403).json({ message: "Forbidden. Invalid token." });
        }

        let user;
        const role = Number(decoded.role);

        // Retrieve user based on role from decoded token
        if (!role) {
          return res
            .status(403)
            .json({ message: "Forbidden. Invalid user role." });
        }

        // const adminRole = Number(process.env.ADMIN_ROLE);
        const userRole = Number(process.env.USER_ROLE);

        switch (role) {
          // case adminRole:
          //   user = await Admin.findById(decoded.id);
          //   break;
          case userRole:
            user = await User.findById(decoded.id);
            break;
          default:
            return res.status(404).json({ message: "Invalid role" });
        }

        if (!user) {
          return res.status(404).json({ message: "Cannot find user" });
        }

        // Generate new access token
        const accessToken = await user.generateAccessToken();

        return res
          .status(200)
          .json({ message: "User validation successful", data: accessToken });
      }
    );
  } catch (err) {
    console.error("Error during token refresh:", err);
    return res
      .status(500)
      .json({ message: `Internal Server Error: ${err.message}` });
  }
};
const topMatch = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    // Prepare regex for hobbies
    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const hobbiesRegex = user.hobbies
      ? user.hobbies.split(',').map(hobby => escapeRegex(hobby.trim())).join('|')
      : null;

    const oppositeGender = user.gender.toLowerCase() === 'male' ? 'female' : 'male';

    const matchQuery = {
      $or: [
        { location: { $regex: new RegExp(`^${user.location}$`, 'i') } },
        ...(hobbiesRegex ? [{ hobbies: { $regex: hobbiesRegex, $options: 'i' } }] : []),
        { occupation: { $regex: new RegExp(`^${user.occupation}$`, 'i') } }
      ],
      gender: oppositeGender, // Opposite gender
      _id: { $ne: user._id }  // Exclude the current user
    };


    // Find matching users
    const matches = await User.find(matchQuery).select('firstName occupation age location hobbies gender');


    if (matches.length === 0) {
      return res.status(200).json({ message: 'No matches found', matches: [] });
    }

    // Format the response with matched users
    const response = matches.map(match => ({
      name: match.firstName,
      id: match._id,
      occupation: match.occupation,
      age: match.age,
      location: match.location,
      hobbies: match.hobbies,
    }));

    res.status(200).json({ message: 'Matches found', matches: response });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching matches', error: err.message });
  }
};
const verifyOtp = async (req, res) => {
  const { userEmail } = req.params; // Extract userEmail from URL params
  const { otp } = req.body; // Extract OTP from request body

  if (!userEmail || !otp) {
    return res.status(400).json({ message: "User email and OTP are required" });
  }

  try {
    // Find user by email
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if OTP is valid and not expired
    const isOtpValid = await bcrypt.compare(otp.toString(), user.otp);
    if (!isOtpValid || user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Update user status and clear OTP fields
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    // Respond with success message
    return res.status(200).json({ message: "Email verified successfully" });
  } catch (err) {
    console.error("Error during OTP verification:", err);
    return res.status(500).json({ message: `Internal Server Error: ${err.message}` });
  }
};

const userdetails = async (req, res) => {
  try {
    const userdetails = await User.find()
    return res.status(200).json({ message: "User details successfully", data: userdetails })
  } catch (error) {
    return res.status(400).json({ message: "Internal server error due to", error: error.message })
  }
}

const profileLiked = async (req, res) => {
  const { likedByUserId } = req.params;
  const { likedUserId } = req.body;

  console.log("liked by user", likedByUserId);
  console.log("likedUser", likedUserId)

  try {
    // Save the like to the database (optional, but for tracking)
    const like = new likedByProfile({ likedByUserId, likedUserId });
    await like.save();

    // Create the notification
    const message = "Someone liked your profile!";
    const newNotification = new Notification({
      senderId: likedByUserId,
      receiverId: likedUserId,
      message
    });

    // Save the notification to the database
    await newNotification.save();

    // Notify the woman (receiver) via Socket.io if she's online
    if (req.io.sockets.connected[likedUserId]) {
      req.io.to(likedUserId).emit('newNotification', newNotification);
    }

    // Send success response
    res.status(200).json({ message: 'Profile liked and notification sent successfully' });
  } catch (error) {
    console.error('Error liking profile:', error.message);
    res.status(500).json({ error: 'An error occurred while liking the profile', message: error.message });
  }
};

const likedprofiles = async (req, res) => {
  const { likedByUserId } = req.params;

  try {
    // Find all liked profiles and populate likedUserId to get full user details
    const likedData = await likedByProfile.find({ likedByUserId })
      .populate('likedUserId', 'firstName age height location profilePicture') // Fetch selected details

    if (!likedData || likedData.length === 0) {
      return res.status(200).json({ message: "No liked profiles found", data: [] });
    }

    return res.status(200).json({ message: "Successfully fetched liked profiles", data: likedData });
  } catch (error) {
    console.error("Error fetching liked profiles:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

const userReport = async (req, res) => {
  const { id } = req.params;
  const { abuseCategory, subject, complaint, complainstAgainst } = req.body;
  try {
    const reportData = await User.findByIdAndUpdate(id, {
      abuseCategory, subject, complaint, complainstAgainst
    }, { new: true })
    res.status(200).json({ message: "User report created", data: reportData })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error })
  }
}

// Get notifications for a user
const getNotifications = async (req, res) => {
  const { userId } = req.body;
  try {
    const notifications = await Notification.find({ receiverId: userId }).sort({ createdAt: -1 })
    console.log("notifications", notifications)
    res.status(200).json({ message: "Notification fetched sucessfully", notifications })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error })
  }
}




export {
  registerUser,
  editUser,
  verifyOtp,
  resendOtp,
  forgotPassword,
  resetPassword,
  getUser,
  userLogin,
  refreshAccessToken,
  getUserById,
  topMatch,
  profileLiked,
  userdetails,
  likedprofiles,
  userReport, getNotifications

};
