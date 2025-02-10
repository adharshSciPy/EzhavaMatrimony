import React, { useState, useEffect } from "react";
import "./usermain.css";
import Nav from "../../component/Navbar/Nav";
import padam from "../../assets/bridde.jpg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import axios from "axios"; // Import axios

function UserMain() {
  const {id}=useParams()                                                                             
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/user/usercarddetails/${id}`); 
      setUserData(response.data); 
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch user data. Please try again later.");
      setLoading(false);
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Nav />
      <h2 className="all-match">All Matches 14/112</h2>
      <div className="profile-view-main-container">
        <div className="profile-cards">
          <div className="image-container">
            <img src={padam} alt="Profile" className="profile-image" />
          </div>

          <div className="details-sections">
            <div className="profile-name-container">
              <div className="heading-text">
                <h2 className="profile-name-container">
                  {userData ? userData.name : "Gopika Krishnan"}
                </h2>
              </div>
              <div className="option-container">
                <div className="option">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-600 cursor-pointer"
                    >
                      <path d="M12 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                    </svg>
                  </i>
                  <div className="dropdown-menu">
                    <div className="dropdown-item">Report This Profile</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-age-container">
              <p className="">
                {userData ? `${userData.age} Yrs, ${userData.height}` : "25 Yrs, 5'7\""}
              </p>
            </div>

            <div className="profile-info-container">
              <span className="profile-degree-container">
                {userData ? userData.education : "Other Bachelor Degree in Medicine, Student"}
              </span>
            </div>

            <div className="profile-location-container">
              <span>{userData ? userData.location : "Kerala, India"}</span>
            </div>
            <div className="premium-container">
              <h3>Premium</h3>
            </div>
          </div>
          <div className="verify-container">
            <h3>Verify Profile</h3>
          </div>
        </div>

        <div className="about-similar">
          <div className="about-card">
            <div className="about-card-container">
              <div className="user-description">
                <div className="about-user-container">
                  <h3>About {userData ? userData.name : "Gopika Krishnan"}</h3>
                </div>
                <div className="description-container">
                  <p>
                    {userData
                      ? userData.about
                      : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptates itaque excepturi expedita adipisci molestiae vel. Consectetur nisi maiores non nemo quisquam, voluptatem, veritatis qui velit sit delectus commodi quas?"}
                  </p>
                </div>
              </div>
              <div className="basic-details-container">
                <div className="basic-details">
                  <div className="heading">
                    <h4>Her basic details</h4>
                  </div>
                  <div className="age-container details-main">
                    <div className="prof-detail same">
                      <span className="material-icons profiles-icon">person</span>
                      <p>Age</p>
                    </div>
                    <div className="prof-detail same1">
                      {userData ? `${userData.age} Yrs` : "25 Yrs"}
                    </div>
                  </div>
                  <div className="degree-container details-main">
                    <div className="prof-detail same">
                      <span className="material-icons profiles-icon">school</span>
                      <p>Degree</p>
                    </div>
                    <div className="prof-detail same1">
                      {userData ? userData.education : "Other Bachelor Degree in Medicine, Student"}
                    </div>
                  </div>
                  <div className="location-container details-main">
                    <div className="prof-detail same">
                      <span className="material-icons profiles-icon">location_on</span>
                      <p>Location</p>
                    </div>
                    <div className="prof-detail same1">
                      {userData ? userData.location : "Kerala, India"}
                    </div>
                  </div>
                  <div className="spoken-language-container details-main">
                    <div className="prof-detail same">
                      <span className="material-icons profiles-icon">language</span>
                      <p>Spoken Language</p>
                    </div>
                    <div className="prof-detail same1">
                      {userData ? userData.languages : "Malayalam, English, Hindi"}
                    </div>
                  </div>
                  <div className="profile-created-container details-main">
                    <div className="prof-detail same">
                      <span className="material-icons profiles-icon">account_circle</span>
                      <p>Profile Created By</p>
                    </div>
                    <div className="prof-detail same1">
                      {userData ? userData.profileCreatedBy : "Friend"}
                    </div>
                  </div>
                  <div className="maritial-status-container details-main">
                    <div className="prof-detail same">
                      <span className="material-icons profiles-icon">favorite</span>
                      <p>Maritial Status</p>
                    </div>
                    <div className="prof-detail same1">
                      {userData ? userData.maritalStatus : "Never Married"}
                    </div>
                  </div>
                  <div className="citizenship-container details-main">
                    <div className="prof-detail same">
                      <span className="material-icons profiles-icon">flag</span>
                      <p>Citizenship</p>
                    </div>
                    <div className="prof-detail same1">
                      {userData ? userData.citizenship : "India"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="verification-main-container">
                <div className="verfication-container">
                  <div className="letter-container">
                    <div className="letter-main same">
                      <span className="material-icons">phone</span>
                      <h3>PHONE NUMBER</h3>
                      <div className="hr">
                        <hr />
                      </div>
                      <span className="material-icons">check_circle</span>
                      <h3>Verified</h3>
                    </div>
                  </div>
                  <div className="digit-container">
                    <div className="digit-main">
                      <h3>+91 65*********</h3>
                      <div className="call-now">
                        <span className="material-icons">phone</span>
                        <h4>Call Now</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basic-details-container">
                <div className="about-user-container">
                  <h3>About Religion</h3>
                </div>
                <div className="degree-container details-main">
                  <div className="prof-detail same">
                    <span className="material-icons profiles-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#5f6368"
                      >
                        <path d="M80-80v-440h80v80h80l119-395v-85h80v80h81v-80h80v80l120 400h80v-80h80v440H520v-200h-80v200H80Zm268-440h264l-24-80H372l-24 80Zm48-160h168l-24-80H420l-24 80ZM160-160h200v-200h240v200h200v-200H660l-24-80H324l-24 80H160v200Zm320-300Z" />
                      </svg>
                    </span>
                    <p>Subcaste</p>
                  </div>
                  <div className="prof-detail same1">
                    {userData ? userData.subcaste : "Demo"}
                  </div>
                </div>
                <div className="location-container details-main">
                  <div className="prof-detail same">
                    <span className="material-icons profiles-icon">school</span>
                    <p>Gothram</p>
                  </div>
                  <div className="prof-detail same1">
                    {userData ? userData.gothram : "Demo"}
                  </div>
                </div>
                <div className="spoken-language-container details-main">
                  <div className="prof-detail same">
                    <span className="material-icons profiles-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#5f6368"
                      >
                        <path d="M620-320v-109l-45-81q-7 5-11 13t-4 17v229L663-80h-93l-90-148v-252q0-31 15-57t41-43l-56-99q-20-38-17.5-80.5T495-832l68-68 276 324 41 496h-80l-39-464-203-238-6 6q-10 10-11.5 23t4.5 25l155 278v130h-80Zm-360 0v-130l155-278q6-12 4.5-25T408-776l-6-6-203 238-39 464H80l41-496 276-324 68 68q30 30 32.5 72.5T480-679l-56 99q26 17 41 43t15 57v252L390-80h-93l103-171v-229q0-9-4-17t-11-13l-45 81v109h-80Z" />
                      </svg>
                    </span>
                    <p>Dosham</p>
                  </div>
                  <div className="prof-detail same1">
                    {userData ? userData.dosham : "Demo"}
                  </div>
                </div>
              </div>
              <div className="basic-details-container">
                <div className="about-user-container">
                  <h3>Profession Details</h3>
                </div>
                <div className="degree-container details-main">
                  <div className="prof-detail same">
                    <span className="material-icons profiles-icon">school</span>
                    <p>Education</p>
                  </div>
                  <div className="prof-detail same1">
                    {userData ? userData.education : "Demo"}
                  </div>
                </div>
                <div className="location-container details-main">
                  <div className="prof-detail same">
                    <span className="material-icons profiles-icon">school</span>
                    <p>Occupation</p>
                  </div>
                  <div className="prof-detail same1">
                    {userData ? userData.occupation : "Demo"}
                  </div>
                </div>
              </div>
              <div className="basic-details-container">
                <div className="about-user-container">
                  <h3>About Family</h3>
                </div>
                <div className="degree-container details-main">
                  <div className="prof-detail same">
                    <span className="material-icons profiles-icon">home</span>
                    <p>Subcaste</p>
                  </div>
                  <div className="prof-detail same1">
                    {userData ? userData.familySubcaste : "Demo"}
                  </div>
                </div>
                <div className="location-container details-main">
                  <div className="prof-detail same">
                    <span className="material-icons profiles-icon">work</span>
                    <p>Occupation</p>
                  </div>
                  <div className="prof-detail same1">
                    {userData ? userData.familyOccupation : "Demo"}
                  </div>
                </div>
              </div>

              <div className="profile-like-container">
                <div className="profile-like-main">
                  <div className="heading">
                    <h3>Profiles You May Like</h3>
                  </div>
                  <div className="like-card-container">
                    {userData &&
                      userData.similarProfiles &&
                      userData.similarProfiles.map((profile, index) => (
                        <div className="like-card" key={index}>
                          <div className="image-container">
                            <img src={profile.image || padam} alt="Profile" />
                          </div>
                          <div className="description-container">
                            <div className="name">
                              <h5>{profile.name}</h5>
                            </div>
                            <div className="age">
                              <p>{profile.age} Yrs</p>
                            </div>
                            <div className="location">
                              <p>{profile.location}</p>
                            </div>
                            <div className="view-button">
                              <button>View Profile</button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="similar-profile-container">
            <div className="main-similar-profile">
              <div className="container-similar">
                <h3>Similar Profile</h3>
              </div>
              <div className="like-card-container">
                {userData &&
                  userData.similarProfiles &&
                  userData.similarProfiles.map((profile, index) => (
                    <div className="like-card" key={index}>
                      <div className="image-container">
                        <img src={profile.image || padam} alt="Profile" />
                      </div>
                      <div className="description-container">
                        <div className="name">
                          <h5>{profile.name}</h5>
                        </div>
                        <div className="age">
                          <p>{profile.age} Yrs</p>
                        </div>
                        <div className="location">
                          <p>{profile.location}</p>
                        </div>
                        <div className="view-button">
                          <button>View Profile</button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="separator"></hr>
      </div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Footer />
    </div>
  );
}

export default UserMain;