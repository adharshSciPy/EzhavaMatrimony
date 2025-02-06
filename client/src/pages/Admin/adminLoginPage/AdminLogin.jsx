import React, { useState } from 'react'
import "./adminlogin.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setUser } from "../../../features/slice";


function AdminLogin() {
  let field={
    userEmail:"",
    password:""
  };
  const[form,setForm]=useState(field)
  const [errorMessage, setErrorMessage] = useState(""); 
  const notifyError = (message) => toast.error(message);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleChange=(e)=>{
    setForm({
      ...form,
    [e.target.name]:e.target.value
    })
  }
  const handleSignin=async (e)=>{
    e.preventDefault();
try {
  const response = await axios.post(`http://localhost:8000/api/v1/admin/login`,form);
  if (response){
    navigate(`/Admindashboard`)
    console.log(response.data);
    dispatch(setUser({ id: response.data.userId })); // Dispatch Redux action
    
  }
} catch (error) {
  setErrorMessage(
    error.response?.data?.message ||
      "Invalid email or password. Please try again."
  );
  notifyError(error.response?.data?.message);
}  }
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
            <h4>Admin Login</h4>
          </div>
          <form onSubmit={handleSignin}>
            <label>
              <input
                type="email"
                name="userEmail"
                placeholder="Email"
                value={form.userEmail}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                value={form.Password}
                onChange={handleChange}

              />
            </label>
            <button type="submit">Sign In</button>
            <div className="fp">
              <Link className="signup-link" to="/forgotpassworduser">
                Forgot Password
              </Link>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
