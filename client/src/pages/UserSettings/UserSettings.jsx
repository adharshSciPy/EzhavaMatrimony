import React from "react";
import "./usersettings.css";
import Nav from "../../component/Navbar/Nav";
import pic from "../../assets/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg";

function UserSettings() {
  return (
    <div>
      <Nav />
      <div className="settings-container5">
        <div className="container-main5">
          <div className="contents5">
            <div className="first-part5">
              <div className="report-main5">
                <div className="heading5">
                  <h1>Settings</h1>
                </div>
              </div>
            </div>
            <div className="box-contents5">
              <div className="part-one5">
                <div className="profile-container5">
                  <div className="profile-icon5">
                    <img src={pic} alt="" />
                  </div>
                  <div className="profile-details5">
                    <p>Alex Rawles</p>
                    <p>alex@gmail.com</p>
                  </div>
                </div>
                <div className="edit-button5">
                  <button>Edit</button>
                </div>
              </div>
              <div className="part-two5">
                <form>
                  <div className="form-container-main5">
                    <div className="user-name5 ">
                      <label>Username</label>
                      <input type="text" />
                    </div>
                    <div className="pass-username5">
                      <div className="password5">
                        <label>Reset Password</label>
                        <input type="text" />
                      </div>
                      <div className="username5">
                        <label>Reset Username</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="email-item1">
            <i class="mail-icon"></i>
            <div class="email-text">
              <p>hello@gmail.com</p>
              <span>1 month ago</span>
            </div>
          </div>

          <button className="add-email-button1">+ Add Email Address</button>
                  </div>
                  <div className="save-button5"> 
                    <button>Save</button>
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

export default UserSettings;
