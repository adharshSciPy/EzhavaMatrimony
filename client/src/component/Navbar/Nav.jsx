import React from 'react';
import "./nav.css"

function Nav() {
  return (
   <div>
    
     <header className="Prof-header">
       <div className="Prof-header-left">
         
         <button className="icon-button">
           <span className="material-symbols-outlined">home</span>
           <span className="matches-text"><h6>Home</h6></span>
         </button>
         
         <button className="icon-button">
           <span className="material-symbols-outlined">group</span>
           <span className="matches-text"><h6>Matches</h6></span>
         </button>
         
         <button className="icon-button">
           <span className="material-symbols-outlined">notifications</span>
           <span className="matches-text"><h6>Notification</h6></span>
         </button>
       </div>
     </header>
     <hr className="divider" />
     
     <div className="content">
       <div className="match-buttons">
         <button className="btn outlined">Regular</button>
         <button className="btn outlined">Premium</button>
       </div>
     </div>
    
   
    
     <link
       rel="stylesheet"
       href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
     />
   </div>
  );
}

export default Nav;
