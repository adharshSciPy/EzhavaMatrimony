import React from "react";
import "./userprofile.css";
import padam from "../../assets/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg";
import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer";

function UserProfle() {
  return (
    <div>
      <Nav />
      <h2 className="all-matches">All Matches 14/112</h2>
      <div className="profile-card">
        <div className="image-section">
          <img src={padam} alt="Profile" className="profile-image" />
        </div>

        <div className="details-section">
          <h2 className="profile-name">Gopika Krishnan</h2>
          <p className="profile-age">25 Yrs, 5'7"</p>

          <div className="profile-info">
            <span className="profile-degree">
              Other Bachelor Degree in Medicine, Student
            </span>
          </div>

          <div className="profile-location">
            <span>Kerala, India</span>
          </div>
        </div>
      </div>
      <div className="Prof-About">
        <h2 className="Prof-head">About Gopika Krishna</h2>
        <h3 className="Prof-head2">Similar Profiles</h3>
        <p className="Prof-content">
          asdiuhsssssssssssssssssssssssssssssssssssssssssssssssssaksjhasdasdhasdasaadhasajdhjsdhadadagdasdhsjdhshdjhuyasdtuyasdgtuaysd
        </p>
        
      </div>
      <div className="profile-card-container">
        <div className="profile-details-section">
          <h3 className="profile-section-title">Her Basic Details</h3>

          <div className="profile-detail-item">
            <span className="material-icons profile-icon">person</span>
            <span className="middle-detail">Age</span>
            <span className="last-detail">25 Yrs, 5'7"</span>
          </div>

          <div className="profile-detail-item">
            <span className="material-icons profile-icon">school</span>
            <span className="middle-detail">Degree</span>
            <span className="last-detail">
              Other Bachelor Degree in Medicine,Student
            </span>
          </div>

          <div className="profile-detail-item">
            <span className="material-icons profile-icon">location_on</span>
            <span className="middle-detail">Location</span>
            <span className="last-detail">Kerala, India</span>
          </div>

          <div className="profile-detail-item">
            <span className="material-icons profile-icon">language</span>
            <span className="middle-detail">Spoken Language</span>
            <span className="last-detail">Malayalam, English, Hindi</span>
          </div>

          <div className="profile-detail-item">
            <span className="material-icons profile-icon">account_circle</span>
            <span className="middle-detail">Profile created by</span>
            <span className="last-detail">Friend</span>
          </div>

          <div className="profile-detail-item">
            <span className="material-icons profile-icon">favorite</span>
            <span className="middle-detail">Marital Status</span>
            <span className="last-detail">Never Married</span>
          </div>

          <div className="profile-detail-item">
            <span className="material-icons profile-icon">flag</span>
            <span className="middle-detail">Citizenship</span>
            <span className="last-detail">India</span>
          </div>
        </div>

        <div className="profile-contact-section">
          <div className="profile-contact-item">
            <span className="material-icons profile-icon">phone</span>
            <span className="mob-text">
              <h1>Mobile Number |</h1>
            </span>
            <span className="material-icons profile-icon profile-verified">
              check_circle
            </span>
            <span className="mob-text">
              <h2>Verified</h2>
            </span>
          </div>

          <div className="profile-call-section">
            <h3 className="profile-contact-number">+91 65 * * * * * * * *</h3>
            <button className="profile-call-button">
              <span className="material-icons profile-icon">phone</span> Call
              Now
            </button>
          </div>
        </div>
      </div>
      <div className="profile-card-container">
        <div className="profile-details-section">
          <h3 className="profile-section-title">Her Religious Details</h3>

          <div className="profile-detail-item">
            <span className="material-icons profile-icon">
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
            <span className="middle-detail">Subcaste</span>
            <span className="last-detail">Ezhava</span>
          </div>

          <div className="profile-detail-item">
            <span className="material-icons profile-icon">school</span>
            <span className="middle-detail">Gothram</span>
            <span className="last-detail">Dont Know</span>
          </div>

          <div className="profile-detail-item">
            <span className="material-icons profile-icon">
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
            <span className="middle-detail">Dosham</span>
            <span className="last-detail">Dont Know</span>
          </div>
        </div>
      </div>
      <div className="profile-card-container">
        <div className="profile-details-section">
          <h3 className="profile-section-title">Her Professional Details</h3>
          <div className="profile-detail-item">
            <span className="material-icons profile-icon">school</span>
            <span className="middle-detail">Education</span>
            <span className="last-detail">Dont Know</span>
          </div>
          <div className="profile-detail-item">
            <span className="material-icons profile-icon">school</span>
            <span className="middle-detail">Occupation</span>
            <span className="last-detail">Dont Know</span>
          </div>
        </div>
      </div>
      <div className="profile-card-container">
        <div className="profile-details-section">
          <h3 className="profile-section-title">About her Family</h3>
          <div className="profile-detail-item">
            <span className="material-icons profile-icon">home</span>
            <span className="middle-detail">Family</span>
            <span className="last-detail">Nuclear</span>
          </div>
          <div className="profile-detail-item">
            <span className="material-icons profile-icon">camera</span>
            <span className="middle-detail">Hobbies</span>
            <span className="last-detail">Cooking</span>
          </div>
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      \
      <div className="profile-card-container1">
        <div className="profile-details-section">
          <h3 className="profile-section-title">
            Her Basic Preferences you match preferred Groom's
          </h3>
          <div className="profile-detail-item1">
            <span className="first-detail">Groom's Age</span>
            <span className="second-detail">21-28 yrs</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Height</span>
            <span className="second-detail">4'11-5'11</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Marital Status</span>
            <span className="second-detail">Any</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"  
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Mother tongue</span>
            <span className="second-detail">Malayalam</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Physical Status</span>
            <span className="second-detail">Normal</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Eating Habbits</span>
            <span className="second-detail">Non-Veg</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Her Relegious Preferences</span>
            <span className="second-detail">Preffered Relegion Hindu</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Caste</span>
            <span className="second-detail">Ezhava</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Subcaste</span>
            <span className="second-detail">Any</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Star</span>
            <span className="second-detail">Any</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Dosham</span>
            <span className="second-detail">Doesn't Matter</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Employment</span>
            <span className="second-detail">Government/PSU</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Occupation</span>
            <span className="second-detail">Any</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Annual Income</span>
            <span className="second-detail">Any</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">
              Her Location Preference Preferred Country
            </span>
            <span className="second-detail">Any</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
          </div>
          <div className="profile-detail-item1">
            <span className="first-detail">Preffered Residing State</span>
            <span className="second-detail">Any</span>
            <span className="material-icons profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
            </div>
            <div className="profile-detail-item1">
              <span className="first-detail">Preffered Residing City</span>
              <span className="second-detail">Any</span>
              <span className="material-icons profile-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
              </span>
            </div>
            <div className="profile-detail-item1">
              <span className="first-detail">Preffered Citizenship</span>
              <span className="second-detail">Any</span>
              <span className="material-icons profile-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
              </span>
            </div>
          
        </div>
      </div>
      
    {/* <Footer /> */}
    </div>
  );
}

export default UserProfle;
