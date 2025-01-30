import React from "react";
import { Link } from "react-router-dom";
import "./admindashboard.css";
import verification from "../../assets/circle-check-regular.svg";
import Sidebar from "../../component/sidebar/Sidebar.jsx";

function Adimindashboard() {
  const collaborators = [1, 2, 3, 4];
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
                    {collaborators.map((item) => (
                      <div className="profiles" key={item}>
                        <div className="profiles-names">
                          <p>Name:Gopika Krishna</p>
                        </div>
                        <div className="profiles-age">
                          <p>Age:25Yrs</p>
                        </div>
                        <div className="profile-view">
                          <Link className="custom-link">View</Link>
                        </div>
                      </div>
                    ))}
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
                    {collaborators.map((item) => (
                      <div className="profiles" key={item}>
                        <div className="profiles-id">
                          <p>UserId:SBE34567</p>
                        </div>
                        <div className="profiles-names">
                          <p>Name:Gopika Krishna</p>
                        </div>
                        <div className="profiles-age">
                          <p>Age:25Yrs</p>
                        </div>
                        <div className="profile-view">
                          <Link className="custom-link">View</Link>
                        </div>
                      </div>
                    ))}
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
