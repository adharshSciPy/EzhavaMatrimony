import React, { useState } from "react";
import "../LandingPage/landingpage.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LandingPage() {
  let field = {
    userEmail: "",
    password: "",
  };
  const [form, setForm] = useState(field);
  const [errorMessage, setErrorMessage] = useState(""); // State to track error message
  const notifyError = (message) => toast.error(message);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const navigate = useNavigate();
  const [passwordValidation, setPasswordValidation] = useState({
    hasLowercase: false,
    hasUppercase: false,
    hasNumber: false,
    hasMinLength: false,
  });
  const validatePassword = (password) => {
    const validation = {
      hasLowercase: /[a-z]/.test(password),
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasMinLength: password.length >= 8,
    };
    setPasswordValidation(validation);
  };
  const handleSignin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/user/login`,
        form
      );
      console.log("Token:", response?.data?.token);

      // Navigate to /formpage1 on successful login
      if (response.status === 200) {
        navigate(`/formpage1`);
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Invalid email or password. Please try again."
      );
      notifyError(error.response?.data?.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      validatePassword(value);
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="landing-main-container">
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
        {/* Left section text */}
        <div className="landing-text-container">
          <h1>Ezhava Matrimony</h1>
          <p>Find Your Perfect Match in the Ezhava Community</p>
        </div>

        {/* Right section form */}
        <div className="landing-form-container">
          <div className="landing-form-header">
            <h3>Login to your Profile</h3>
          </div>
          <div className="landing-form-subheader">
            <h4>Find Your Perfect Soulmate</h4>
          </div>
          <form onSubmit={handleSignin}>
            <label>
              <input
                type="email"
                name="userEmail"
                placeholder="userEmail"
                required
                onChange={handleChange}
                value={form.userEmail}
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                onChange={handleChange}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                value={form.password}
              />
            </label>
            {passwordFocus && (
                  <ul className="passwordValidation">
                    <li
                      style={{
                        color: passwordValidation.hasMinLength
                          ? "green"
                          : "red",
                        fontSize: "12px",
                        textAlign: "left",
                      }}
                    >
                      &#8226; At least 8 characters long
                    </li>
                    <li
                      style={{
                        color: passwordValidation.hasLowercase
                          ? "green"
                          : "red",
                        fontSize: "12px",
                        textAlign: "left",
                      }}
                    >
                      &#8226; At least one lowercase letter
                    </li>
                    <li
                      style={{
                        color: passwordValidation.hasUppercase
                          ? "green"
                          : "red",
                        fontSize: "12px",
                        textAlign: "left",
                      }}
                    >
                      &#8226; At least one uppercase letter
                    </li>
                    <li
                      style={{
                        color: passwordValidation.hasNumber ? "green" : "red",
                        fontSize: "12px",
                        textAlign: "left",
                      }}
                    >
                      &#8226; At least one number
                    </li>
                  </ul>
                )}
            <button type="submit">Sign In</button>
            <div className="fp">
              <Link className="signup-link" to="/forgotpassworduser">
                Forgot Password
              </Link>
            </div>
            <div className="signin">
              <p> Create your account</p>
              <Link className="signup-link" to="/login">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
