import React, { useEffect } from "react";
import Sidebar from "../../../component/sidebar/Sidebar.jsx";
import "./report.css";
import axios from "axios";
function Report() {
  
  return (
    <div>
      <div className="report-container">
        <div className="container-main">
          <div className="nav">
            <Sidebar />
          </div>
          <div className="contents">
            <div className="first-part">
              <div className="report-main">
                <div className="heading">
                  <h1>Reports & Complaints</h1>
                </div>
              </div>
            </div>
            <div className="box-contents">
              <div className="second-part">
                <div className="sub-container">
                  <div className="left-content">
                    <div className="heading">
                      <h3>Abuse Category</h3>
                    </div>
                    <div className="description">
                      <p>Hai this is a complaint</p>
                    </div>
                  </div>
                  <div className="right-content">
                    <div className="heading">
                      <h3>Subject</h3>
                    </div>
                    <div className="description">
                      <p>Hai this is a complaint</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="third-part">
                <div className="heading">
                  <h3>Complaint and Details</h3>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam voluptatem libero quam blanditiis iste praesentium
                    error et! Atque possimus nulla exercitationem odit
                    consequuntur, dicta, voluptatibus veniam, suscipit ex
                    expedita mollitia? Voluptatem delectus quasi temporibus hic
                    amet consequatur eius, ex voluptatum nisi! Repudiandae atque
                    mollitia, accusamus amet quidem, quae aliquam, labore culpa
                    et nostrum accusantium. Ad sint quod possimus accusamus
                    iste!
                  </p>
                </div>
              </div>
              <div className="third-part">
                <div className="heading">
                  <h3>Complaint and Details</h3>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam voluptatem libero quam blanditiis iste praesentium
                    error et! Atque possimus nulla exercitationem odit
                    consequuntur, dicta, voluptatibus veniam, suscipit ex
                    expedita mollitia? Voluptatem delectus quasi temporibus hic
                    amet consequatur eius, ex voluptatum nisi! Repudiandae atque
                    mollitia, accusamus amet quidem, quae aliquam, labore culpa
                    et nostrum accusantium. Ad sint quod possimus accusamus
                    iste!
                  </p>
                </div>
              </div>
              <div className="fourth-part">
                <div className="heading">
                  <h3>Complaint aginst ID / User name </h3>
                </div>
                <div className="description">
                  <p>ID 13216564165</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
