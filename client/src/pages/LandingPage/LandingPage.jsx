import React, { useState } from "react";
import "../LandingPage/landingpage.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/slice";
import Modal from "react-modal";


function LandingPage() {
  let field = {
    userEmail: "",
    password: "",
  };
  const [form, setForm] = useState(field);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [errorMessage, setErrorMessage] = useState(""); 
    const [email, setEmail] = useState("");
  
  const notifyError = (message) => toast.error(message);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const submitEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/user/forgotpassworduser`,{ userEmail: email }
      );
      if (response.status === 200) {
        toast.success("Password reset link sent to registered mail ID", {
          onClose: () => setIsModalOpen(false),
        });
      }
    } catch (error) {
      
      notifyError(error.response?.data?.message);
    }
  };
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
              <p className="signup-link" 
              onClick={() => setIsModalOpen(true)}
              >
                Forgot Password
              </p>
            </div>
             <Modal
                          isOpen={isModalOpen}
                          onRequestClose={() => setIsModalOpen(false)}
                          className="modal-content"
                          overlayClassName="modal-overlay"
                        >
                          <h2>Forgot Password</h2>
                          <p>Enter your email to receive a reset link.</p>
            
                          <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={handleEmail}
                          />
            
                          <button onClick={submitEmail}>Submit</button>
                          <button onClick={() => setIsModalOpen(false)}>Close</button>
                        </Modal>
            <div className="adminLogin">
              <Link className="signup-link" to="/adminLanding">
              Login as Admin
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
