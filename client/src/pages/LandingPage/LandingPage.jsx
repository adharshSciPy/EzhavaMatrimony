import React, { useState } from "react";
import "../LandingPage/landingpage.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/slice";

function LandingPage() {
  let field = {
    userEmail: "",
    password: "",
  };
  const [form, setForm] = useState(field);
  const [errorMessage, setErrorMessage] = useState(""); 
  const notifyError = (message) => toast.error(message);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSignin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/user/login`,
        form
      );
      if(response){
        console.log(response.data);
        dispatch(setUser({ id: response.data.userId })); // Dispatch Redux action
        console.log("Dispatched ID:", response.data.userId); // Debug Redux action
        localStorage.setItem("userId", response.data.userId); 
        console.log("Token:", response?.data?.token)
        console.log(response.data.userId);
        const userId=response.data.userId;
        navigate(`/dashboard/${userId}`)

        
        
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
                placeholder="Email"
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
                value={form.password}
              />
            </label>
            <button type="submit">Sign In</button>
            <div className="fp">
              <Link className="signup-link" to="/forgotpassworduser">
                Forgot Password
              </Link>
            </div>
            <div className="signin">
              <p> Create your account</p>
              <Link className="signup-link" to="/register">
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
