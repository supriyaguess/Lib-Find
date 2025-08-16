import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faSearch,
  faFilter,
  faLocationDot,
  faArrowRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header({ user, onLogout }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogoClick = () => navigate("/");
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <div className="header">
      <h1 className="site-title" onClick={handleLogoClick}>
        <FontAwesomeIcon icon={faBookOpen} className="icon" />
        StudyFind
      </h1>

      <div className="search-section">
        <FontAwesomeIcon icon={faSearch} className="search-icon-top" />
        <input
          type="text"
          className="search-input"
          placeholder="Search by City, Area, or Pincode..."
        />
        <FontAwesomeIcon icon={faFilter} className="filter-icon-top" />
        <FontAwesomeIcon icon={faLocationDot} className="location-icon-top" />
        <button className="search-button">Search</button>
      </div>

      <div className="button-section">
        <button className="header-button-list">List Your Space</button>

        {user ? (
          <div className="user-menu">
            <button className="user-initial" onClick={toggleDropdown}>
              {user.name?.charAt(0).toUpperCase() || "U"}
            </button>

            {dropdownOpen && (
                <div className="dropdown-menu" onMouseLeave={closeDropdown}>
                  <div className="dropdown-email">{user.email}</div>
                  <div onClick={() => navigate("/profile")}>
                    <span className="dropdown-icon">👤</span>
                    Profile
                  </div>
                  <div onClick={() => navigate("/bookmarked")}>
                    <span className="dropdown-icon">📖</span>
                    Bookmarked
                  </div>
                  <div onClick={() => navigate("/settings")}>
                    <span className="dropdown-icon">⚙️</span>
                    Settings
                  </div>
                  <div onClick={onLogout}>
                    <span className="dropdown-icon">🚪</span>
                    Log out
                  </div>
                </div>
              )}
          </div>
        ) : (
          <button className="header-button-login" onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faArrowRightToBracket} className="login-icon" />
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
