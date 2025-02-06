import React from "react";
import Sidebar from "../../../component/sidebar/Sidebar";
import "./settings.css";
import pic from "../../../assets/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg";
function Settings() {
  return (
    <div>
      <div className="settings-container">
        <div className="container-main">
          <div className="nav">
            <Sidebar />
          </div>
          <div className="contents">
            <div className="first-part">
              <div className="report-main">
                <div className="heading">
                  <h1>Settings</h1>
                </div>
              </div>
            </div>
            <div className="box-contents">
              <div className="part-one">
                <div className="profile-container">
                  <div className="profile-icon">
                    <img src={pic} alt="" />
                  </div>
                  <div className="profile-details">
                    <p>Alex Rawles</p>
                    <p>alex@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="part-two">
                <form>
                  <div className="form-container-main">
                    <div className="user-name ">
                      <label>Username</label>
                      <input type="text" />
                    </div>
                    <div className="pass-username">
                      <div className="password">
                      <label>Reset Password</label>
                      <input type="text" />
                      </div>
                      <div className="username">
                      <label>Reset Username</label>
                      <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="save-button">
                    <button>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
