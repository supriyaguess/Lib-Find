import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // Navigates to home
  };
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
        <FontAwesomeIcon icon={faFilter} className="filter-icon-top"/>
        <FontAwesomeIcon icon={faLocationDot} className="location-icon-top"/>

        <button className="search-button">Search</button>
      </div>
      <div className="button-section">
        <button className="header-button-list">List Your Space</button>
        <div>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        <button className="header-button-login">Login</button>
        </div>
        
      </div>
    </div>
  );
}
export default Header;
