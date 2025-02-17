import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./usersettings.css";
import Nav from "../../component/Navbar/Nav";
import defaultPic from "../../assets/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg";

function UserSettings() {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [profilePic, setProfilePic] = useState(defaultPic);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/user/usercarddetails/${id}`);
        const userData = response.data;
        console.log("Fetched User Data:", userData);

        setUsername(userData.firstName);
        setEmail(userData.email);
        setProfilePic(userData.profilePic || defaultPic);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);


  const handleSave = async () => {
    try {
      
      if (newUsername) {
        await axios.patch(`http://localhost:8000/api/v1/user/editUser/${id}`, {
          username: newUsername,
        });

        setUsername(newUsername); // Update UI
        setNewUsername(""); // Clear input field
      }

      
      if (password) {
        await axios.patch(`http://localhost:8000/api/v1/user/resetpassworduser/${id}`, {
          password: password,
        });

        setPassword(""); // Clear password field
      }

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Try again.");
    }
  };

  if (loading) return <p>Loading user data...</p>;

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
                    <img src={profilePic} alt="Profile" />
                  </div>
                  <div className="profile-details5">
                    <p>{username}</p>
                    <p>{email}</p>
                  </div>
                </div>
              </div>
              <div className="part-two5">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-container-main5">
                    <div className="user-name5">
                      <label>Username</label>
                      <input
                        type="text"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        placeholder={username || "Enter new username"}
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
                    </div>
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
