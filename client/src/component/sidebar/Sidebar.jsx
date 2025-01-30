import { React, useState, useEffect, useMemo } from "react";
import "./sidebar.css";
import { Menu, Button } from "antd";

import {
  HomeOutlined,
  UserOutlined,
  ContainerOutlined,
  SettingOutlined,
  LogoutOutlined,
  PushpinOutlined,
  PushpinFilled,
} from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const [isPinned, setIsPinned] = useState(window.innerWidth > 768);
  const location = useLocation();
  const pathKey = useMemo(
    () => location.pathname.split("/")[1] || "admin",
    [location]
  );

  // Effect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsPinned(true);
      } else {
        // Restore the last saved state from localStorage when screen size is below 768px
        const savedState = JSON.parse(localStorage.getItem("isPinned"));
        if (savedState !== null) {
          setIsPinned(savedState);
        }
      }
    };

    // Set initial state based on screen width
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);
    
    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePin = () => {
    if (window.innerWidth <= 768) {
      setIsPinned((prev) => {
        const newState = !prev;
        localStorage.setItem("isPinned", JSON.stringify(newState));
        return newState;
      });
    }
  };

  const menuItems = useMemo(
    () => [
      { key: "admin", label: "Dashboard", icon: <HomeOutlined />, path: "/Admindashboard" },
      { key: "profile", label: "Profile Verification", icon: <UserOutlined />, path: "/profile" },
      { key: "listing", label: "Reports & Complaints", icon: <ContainerOutlined />, path: "/listing" },
      { key: "settings", label: "Settings", icon: <SettingOutlined />, path: "/settings" },
      { key: "signout", label: "Signout", icon: <LogoutOutlined />, path: "/" },
    ],
    []
  );

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${isPinned ? "pinned" : "collapsed"}`}>
        <div className="sidebar-content">
          <div className="logo"></div>
          <div className="pin-pin">
            <Button
              aria-label={isPinned ? "Unpin Sidebar" : "Pin Sidebar"}
              className="pin-button"
              type="text"
              icon={isPinned ? <PushpinFilled /> : <PushpinOutlined />}
              onClick={togglePin}
              disabled={window.innerWidth > 768} // Disable button when width > 768px
            />
          </div>
          <Menu className="menu" mode="vertical" defaultSelectedKeys={[pathKey]}>
            {menuItems.map(({ key, label, icon, path }) => (
              <Menu.Item key={key} icon={icon}>
                <NavLink to={path}>{isPinned && label}</NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
