import React from 'react'
import './Profile.css'
import Sidebar from "../../../component/sidebar/Sidebar";


function Profile() {
  return (
    <div>
      <div className="report-container">
        <div className="container-main">
          <div className="nav">
            <Sidebar /> 
          </div>
          <div className="contents">
            <div className="first-part">
                <div className="report-main">
                    <div className="heading">
                        <h1>Profile Verification</h1>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
