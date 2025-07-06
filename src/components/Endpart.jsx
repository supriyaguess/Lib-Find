import './Endpart.css';
import React from "react";

function Endpart({
    tag,
    imageAlt,
    imageTittle,
    name,
    location,
    rating,
    reviews,
    description,    
    amenities,
    price,
    priceType,

}) {
    return (
        <div className="endpart-card">
            <div className="endpart--image-section">
                   <span className="endpart-badge">{tag}</span>
                   <img  src={imageAlt} alt={imageTittle}   className='endpart-image-placeholder'/>
                   
            </div>
            <div className="endpart-info">
                    <h3 className="endpart-name">{name}</h3>
                    <p className="endpart-location">{location}</p>
                    <div className="endpart-rating">
                        <span className="stars">  {rating}</span>
                        <span className="reviews">({reviews} reviews)</span>
                    </div>
                    <p className="endpart-description">{description}</p>
                    <ul className="amenities-list">
                        {amenities.map((amenity, index) => (
                            <li key={index} className="amenity-item">{amenity}</li>
                        ))}
                    </ul>
                    <div className="endpart-price">
                        <span className="price">Start from {price}</span>
                        <span className="price-type">{priceType}</span>
                    </div>
                    <button className='view-button'>View Details</button>
                </div>
        </div>
    
    );
}

export default Endpart;
