import React, { useState, useEffect, useCallback } from "react";
import "./nav.css";
import axios from "axios";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";

const socket = io("http://localhost:8000", {
  transports: ["websocket", "polling"],
  withCredentials: true,
});

function Nav({ userId }) {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  console.log("see", notifications);
  useEffect(() => {
    if (!userId) return;

    socket.emit("registerUser", userId);

    let timeoutId;

    const fetchNotifications = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/v1/user/unread/${userId}`
        );
        setNotifications(Array.isArray(data?.response) ? data.response : []);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setNotifications([]);
      } finally {
        // Fetch notifications every 10 seconds to avoid rapid updates
        timeoutId = setTimeout(fetchNotifications, 10000);
      }
    };

    // Initial fetch
    fetchNotifications();

    const handleNotification = (newNotification) => {
      setNotifications((prev) => {
        // Prevent duplicate notifications
        const exists = prev.some((n) => n._id === newNotification._id);
        return exists ? prev : [newNotification, ...prev];
      });
    };

    socket.on("receiveNotification", handleNotification);

    return () => {
      socket.off("receiveNotification", handleNotification);
      clearTimeout(timeoutId); // Clear interval on unmount
    };
  }, [userId]);

  return (
    <div>
      <header className="Prof-header7">
        <div className="Prof-header-left7">
          <button className="icon-button7">
            <span className="material-symbols-outlined">home</span>
            <span className="matches-text">
              <h6>Home</h6>
            </span>
          </button>

          <button className="icon-button7">
            <span className="material-symbols-outlined">group</span>
            <span className="matches-text">
              <h6>Matches</h6>
            </span>
          </button>

          <button
            className="icon-button7"
            onClick={() => setShowNotifications((prev) => !prev)}
          >
            <span className="material-symbols-outlined">notifications</span>
            <h6>Notification</h6>
            {notifications.length > 0 && (
              <div className="notification-alert">{notifications.length}</div>
            )}
            {showNotifications && (
              <div className="notification-dropdown">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div key={notification._id} className="notification-item">
                      <Link to={`/mainuser/${notification.senderId}`}>
                        <p>{notification.message}</p>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="no-notifications">No notifications</p>
                )}
              </div>
            )}
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

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />
    </div>
  );
}

export default Nav;
