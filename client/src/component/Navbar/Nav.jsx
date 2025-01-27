import React from 'react';
import "./nav.css"

function Nav() {
  return (
   <div>
     {/* Header */}
     <header className="Prof-header">
       <div className="Prof-header-left">
         {/* Home Icon */}
         <button className="icon-button">
           <span className="material-symbols-outlined">home</span>
           <span className="matches-text"><h6>Home</h6></span>
         </button>
         {/* Matches Icon */}
         <button className="icon-button">
           <span className="material-symbols-outlined">group</span>
           <span className="matches-text"><h6>Matches</h6></span>
         </button>
         {/* Notifications Icon */}
         <button className="icon-button">
           <span className="material-symbols-outlined">notifications</span>
           <span className="matches-text"><h6>Notification</h6></span>
         </button>
       </div>
       {/* Image Upload */}
       <div className="image-upload-icon">
         <label htmlFor="upload-image" className="icon-upload-label">
           <span className="material-symbols-outlined">add_a_photo</span>
         </label>
         <input id="upload-image" type="file" className="upload-input" />
       </div>
     </header>
     <hr className="divider" />
     {/* Content */}
     <div className="content">
       <div className="match-buttons">
         <button className="btn outlined">Regular</button>
         <button className="btn outlined">Premium</button>
       </div>
     </div>
     <h5 className="all-matches">All Matches 14/112</h5>
   
     {/* Include Google Material Symbols CSS */}
     <link
       rel="stylesheet"
       href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
     />
   </div>
  );
}

export default Nav;
