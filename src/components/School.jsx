import "./School.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAddressBook,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function School() {
  return (
    <div className="school">
      <section className="libraries-section">
        <h1 className="highlight">How StudyFind Works</h1>
        <div className="libraries-grid">
          <div className="library-card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </div>
            <h1>Discover Spaces</h1>

            <p>
              Search by city, area, or use your loaction to find the perfect
              study library near you.
            </p>
          </div>
          <div className="library-card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faAddressBook} className="icon" />
            </div>
            <h1>Compare & Choose</h1>
            <p>
              Explore detailed listings with photos, amenities, and pricing, and
              real user reviews.
            </p>
          </div>
          <div className="library-card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faCircleCheck} className="icon" />
            </div>
            <h1>Inquire or Visit</h1>
            <p>
              Contact libraries directly to book your spot or get more
              information. Focus and succeed!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default School;
