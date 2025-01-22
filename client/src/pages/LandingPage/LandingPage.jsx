import React from "react";
import "../LandingPage/landingpage.css";

function LandingPage() {
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
          <form>
            <label>
              <input type="text" placeholder="Username" required />
            </label>
            <label>
              <input type="email" placeholder="Password" required />
            </label>
            <button type="submit">Sign In</button>
            <div className="fp"><a href="Forgot Password">Forgot Password</a></div>
            <div className="signin">
              Create Your Account <a href="SignIn">Sign in</a>
            </div>
          </form>
          <p className="landing-terms">*T&C may apply</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
