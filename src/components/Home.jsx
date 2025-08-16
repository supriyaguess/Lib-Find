import "./Home.css"; // Importing the CSS file for styling
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/exploreLibraries');
  };

  return (
    <div className="home">
      <section className="hero-section">
        <h1>
          Find Your Perfect <span className="highlight">Study</span>
          <span className="highlight">Sanctuary</span>
        </h1>
        <p>
          Discover and book quiet, dedicated self-study libraries for ultimate
          focus and productivity.
        </p>
        <div className="search-bar">
          <div className="icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search by City, Area, or Pincode..."
          />
          <div className="icon" />
          <button>Search</button>
        </div>
        <button className="explore-btn" onClick={handleClick}>
          Explore Libraries
          <div />
        </button>
      </section>
    </div>
  );
}

export default Home;
