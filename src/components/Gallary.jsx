import React from 'react';
import './Gallary.css'; // Assuming you have a CSS file for styling

function Gallary() {
  return (
    <div className="gallery">
       <div className="main-card">
        <button className="left-arrow">&#8592;</button>
        <div className="placeholder-text"> Gallery 1</div>
        <button className="right-arrow">&#8594;</button>
      </div>
      <div className="bottom-buttons">
        <button className="Button">FocusHub Main</button>
        <button className="Button">FocusHub Enterence</button>
        <button className="Button">FocusHub Cabin</button>
        <button className="Button">FocusHub Open Desk</button>
        <button className="Button">Gallery 1</button>
      </div>
    </div>
  );
}
export default Gallary;