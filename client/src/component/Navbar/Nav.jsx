import React, { useState, useEffect } from 'react';
import './nav.css';
import axios from 'axios';

function Nav() {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [userId, setUserId] = useState(null);

  // Fetch the authenticated user's ID (Assuming backend returns user details)
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user/userdetails');
        setUserId(response.data.userId); 
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };
    fetchUserId();
  }, []);

  const fetchNotifications = async () => {
    if (!userId) return;
    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/getNotifications', { receiverId: userId });
      setNotifications(response.data.notifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      fetchNotifications();
    }
  };

  return (
    <div>
      <header className="Prof-header7">
        <div className="Prof-header-left7">
          <button className="icon-button7">
            <span className="material-symbols-outlined">home</span>
            <span className="matches-text"><h6>Home</h6></span>
          </button>

          <button className="icon-button7">
            <span className="material-symbols-outlined">group</span>
            <span className="matches-text"><h6>Matches</h6></span>
          </button>

          <button className="icon-button7" onClick={handleNotificationClick}>
            <span className="material-symbols-outlined">notifications</span>
            <span className="matches-text"><h6>Notification</h6></span>
          </button>
        </div>
      </header>
      <hr className="divider7" />
      <div className="content">
       <div className="match-buttons">
         <button className="btn outlined">Regular</button>
         <button className="btn outlined">Premium</button>
       </div>
     </div>
    
      {/* Notification Dropdown */}
      {showNotifications && (
        <div className="notification-dropdown">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div key={index} className="notification-item">
                <p>{notification.message}</p>
              </div>
            ))
          ) : (
            <p className="no-notifications">No notifications</p>
          )}
        </div>
      )}

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />
    </div>
  );
}

export default Nav;
