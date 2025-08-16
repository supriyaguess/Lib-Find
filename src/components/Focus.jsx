import React from "react";
import './Focus.css'; // Assuming you have a CSS file for styling   
 function Focus() {
  return (
    <div className="focus-container">
      

      <div className="main-card">
        <button className="left-arrow">&#8592;</button>
        <div className="placeholder-text">FocusHub Main</div>
        <button className="right-arrow">&#8594;</button>
      </div>
      <div className="bottom-buttons1">
        <button className="Button">FocusHub Main</button>
        <button className="Button">FocusHub Enterence</button>
        <button className="Button">FocusHub Cabin</button>
        <button className="Button">FocusHub Open Desk</button>
        <button className="Button">Gallery 1</button>
      </div>

      <div className="bottom-buttons">
        <button className="call-now">Call Now</button>
        <button className="send-inquiry">Send Inquiry</button>
      </div>
      
    </div>
  );
}


export default  Focus;
