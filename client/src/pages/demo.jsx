import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get user ID
import "./usersettings.css";
import Nav from "../../component/Navbar/Nav";
import pic from "../../assets/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg";

function UserSettings() {
  const { id } = useParams(); // Get user ID from URL params
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("hello@gmail.com");
  const [password, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const handleSave = () => {
    console.log("User ID:", id);
    console.log("Username:", username);
    console.log("New Username:", newUsername);
    console.log("Password:", password);
    console.log("Email:", email);
    // Call API to update user details (Not included in this code)
  };

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
                    <img src={pic} alt="Profile" />
                  </div>
                  <div className="profile-details5">
                    <p>{username || "Alex Rawles"}</p>
                    <p>{email}</p>
                  </div>
                </div>
                <div className="edit-button5">
                  <button>Edit</button>
                </div>
              </div>
              <div className="part-two5">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-container-main5">
                    <div className="user-name5">
                      <label>Username</label>
                      <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Enter your username"
                      />
                    </div>
                    <div className="pass-username5">
                      <div className="password5">
                        <label>Reset Password</label>
                        <input 
                          type="password" 
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)} 
                          placeholder="Enter new password"
                        />
                      </div>
                      <div className="username5">
                        <label>Reset Username</label>
                        <input 
                          type="text" 
                          value={newUsername} 
                          onChange={(e) => setNewUsername(e.target.value)} 
                          placeholder="Enter new username"
                        />
                      </div>
                    </div>
                    <div className="email-item1">
                      <i className="mail-icon"></i>
                      <div className="email-text">
                        <p>{email}</p>
                        <span>1 month ago</span>
                      </div>
                    </div>
                    <button className="add-email-button1">+ Add Email Address</button>
                  </div>
                  <div className="save-button5">
                    <button onClick={handleSave}>Save</button>
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
