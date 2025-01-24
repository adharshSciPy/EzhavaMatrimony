import React, { useState } from "react";
import axios from "axios";
import "./otp.css";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { userEmail } = location.state || {}; // Get the userEmail from the previous page state
  const navigate = useNavigate();

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    try {
      console.log("pari",userEmail);
        console.log("pari",otp);
      // Send the OTP in an object as part of the request body
      const response = await axios.post(`api/v1/user/verifyOtp/${userEmail}`, { otp });
      console.log('hai',response);
        
      // Handle successful response
      setMessage(response.data.message); // Success message
      setError(""); // Clear error

      // Navigate to the next page upon success
      navigate("/formpage1"); // Adjust to the correct path you want to navigate to
    
    } catch (err) {
      // Handle error during OTP verification
      setMessage(""); // Clear message
      setError(err.response?.data?.message || "Failed to verify OTP.");
      
      // console.log("pari",userEmail);
      // console.log("pari",otp);
    }
  };

  return (
    <div className="verify-otp-container">
      <h2>Verify OTP</h2>
      <form onSubmit={handleVerifyOtp}>
        <div className="form-group">
          <label htmlFor="otp">OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter the OTP"
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}

        <button type="submit" className="verify-btn">
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
