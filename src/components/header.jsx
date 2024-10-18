import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [userName, setUserName] = useState(""); // State to hold the user's name
  const dropdownRef = useRef(null); // Ref to track the dropdown element
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const activeTab = location.pathname.split("/").pop().replace("-", " ");

  const capitalizeFirstLetterOfEachWord = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);
  return (
    <>
      <div className="header">
        <div className="pmNavbar container-fluid">
          <div className="pmLogoContainer">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/newlogo.png`}
              className="cbt-logo"
              alt="BBT Logo"
            />
            <button onClick={toggleSidebar} className="toggle-btn">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/line-icon.png`}
                className="vector-icon"
                alt="lines"
              />
            </button>
            <div className="active-tab">
              <p>{capitalizeFirstLetterOfEachWord(activeTab)}</p>
            </div>
          </div>
         
          <div className="pmLogoutBtn">
            <button onClick={toggleDropdown} className="log-btn">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/user-icon.png`}
                alt="Logout Icon"
                className="logout"
              />
            </button>
          </div>
        </div>
        {dropdownVisible && (
          <div ref={dropdownRef} className="user-dropdown">
            <div className="user-info">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/user-icon.png`}
                alt="User Icon"
                className="user-icon"
              />
              {/* Display the dynamic username from the state */}
              <span className="username">{userName || "Unknown User"}</span>
            </div>
            <button onClick={handleLogout} className="logout-button">
              <span>LOG OUT</span>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/logoutIcon.png`}
                alt="Logout Icon"
                className="logout-icon"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
