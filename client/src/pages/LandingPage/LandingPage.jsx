import React from "react";
import "../LandingPage/landingpage.css"

function LandingPage()
{
    return (
      <div>
      <div className="landing-main-container">
        {/* Left section text */}
        <div className="landing-text-container">
          <h1>Ezhava Matrimony</h1>
          <h2>Find Your Perfect Match!</h2>
          <p>Find perfect soulmates for your life from 1000 of profiles</p>
        </div>
  
        {/* Right section form */}
        <div className="landing-form-container">
    <div className="landing-form-header">
      <h3>Create a Matrimony Profile</h3>
    </div>
    <div className="landing-form-subheader">
      <h4>Find Your Perfect Soulmate</h4>
    </div>
    <form>
      <label>
        Matrimony Profile for
        <select>
          <option value="">Select</option>
          <option value="Friend">Friend</option>
          <option value="Son">Son</option>
          <option value="Daughter">Daughter</option>
        </select>
      </label>
      <label>
        <input type="text" placeholder="Enter Your Name" required />
      </label>
      <label>
        <input type="email" placeholder="Enter Your Email" required />
      </label>
      <button type="submit">Register Now</button>
    </form>
    <p className="landing-terms">*T&C may apply</p>
  </div>
  </div>
  </div>
    );
  }

export default LandingPage