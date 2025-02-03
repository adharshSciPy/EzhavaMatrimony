import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admindashboard.css";
import verification from "../../../assets/circle-check-regular.svg";
import Sidebar from "../../../component/sidebar/Sidebar.jsx";
import axios from "axios";
import Profilebox from "../components/Profilebox.jsx";

function Adimindashboard() {
  const [userData, setUserData] = useState([]);
  const showData=userData.slice(0,4)
  
  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/user/userdetails"
      );
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <div>
      <div className="admin-dashboard">
        <div className="container-main">
          <div className="nav">
            <Sidebar />
          </div>
          <div className="contents">
            <div className="first-part">
              <div className="dashborad-main">
                <div className="heading">
                  <h1>DASHBOARD</h1>
                </div>
              </div>
              <div className="button-container">
                <div className="profile-verification-container">
                  <div className="icon-container">
                    <img src={verification} alt="" />
                  </div>
                  <div className="text-containers">
                    <p>
                      Profile <br></br>Verification
                    </p>
                  </div>
                </div>
                <div className="profile-verification-container">
                  <div className="icon-container">
                    <img src={verification} alt="" />
                  </div>
                  <div className="text-containers">
                    <p>Reports & Complaints</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-part">
              <div className="heading-container">
                <div className="heading">
                  <h1>Profiles</h1>
                </div>
              </div>
              <div className="profiles-container">
                <div className="main-container-profiles">
                  <div className="profile-container">
                    {showData.length > 0 ? (
                      showData.map((user) => {
                        return <Profilebox key={user._id} data={user} />;
                      })
                    ) : (
                      <p>No profiles available</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="see-all-link">
                <Link className="custom-link">See all</Link>
              </div>
            </div>
            <div className="third-part">
              <div className="heading-container">
                <div className="heading">
                  <h1>Reports & Complaints</h1>
                </div>
              </div>
              <div className="profiles-container">
                <div className="main-container-profiles">
                  <div className="profile-container">
                    <Profilebox></Profilebox>
                  </div>
                </div>
              </div>
              <div className="see-all-link">
                <Link className="custom-link">See all</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adimindashboard;
