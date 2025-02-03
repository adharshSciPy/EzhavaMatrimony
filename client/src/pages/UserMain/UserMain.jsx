import React from "react";
import "./usermain.css";
import padam from "../../assets/./serious-man-portrait-real-people-high-definition-grey-background-photo.jpg";
function UserMain() {
  return (
    <div>
      <h1 className="first-text1">All Matches 14/112</h1>
        <div className="cardContainer1">
        <div className="image-section1">
          <img src={padam} alt="Profile" className="profile-image1" />
        </div>
        <div className="details-section1">
          <h2 className="profile-name1">Gopika Krishnan</h2>
          <p className="profile-age1">25 Yrs, 5'7"</p>

          <div className="profile-info1">
            <span className="profile-degree1">
              Other Bachelor Degree in Medicine, Student
            </span>
          </div>

          <div className="profile-location">
            <span>Kerala, India</span>
          </div>
        </div>
    <div className="dots-container">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
      </div>
    </div>
  );
}

export default UserMain;
