import React from "react";
import { Link } from "react-router-dom";

function Profilebox({ data }) {

  if (!data) return <p>No user data available</p>;

  return (
    <div className="profiles">  
      <div className="profile-names">
        <p>Name: {data.firstName || "N/A"}</p>
      </div>
      <div className="profiles-age">
        <p>email: {data.email  || "Unknown"}</p>
      </div>
      <div className="profile-view">
        <Link to={`/Adminusersview/${data._id}`} className="custom-link">
          View
        </Link>
      </div>
    </div>
  );
}

export default Profilebox;
