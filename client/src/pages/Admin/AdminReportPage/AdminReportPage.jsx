import React from "react";
import "./AdminReportPage.css";
import Sidebar from "../../../component/sidebar/Sidebar";
import verification from "../../../assets/circle-check-regular.svg";
import { Link } from "react-router-dom";


function AdminReportPage() {
  return (
    <div>
      <div className="admin-dashboard">
        <div className="container-main">
          <div className="nav">
            <Sidebar />
          </div>
          <div className="contents">
            
            <div className="second-part">
              <div className="heading-container">
                <div className="heading">
                  <h1>Reports And Complaints</h1>
                </div>
              </div>
              <div className="profiles-container">
                <div className="main-container-profiles">
                  <div className="profile-container">
                    
                  </div>
                </div>
              </div>
              <div className="see-all-link">
                <Link className="custom-link" to={"/getFullUser"}>
                  See all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminReportPage;
