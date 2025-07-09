import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Clock, Wifi, Zap, Users, Shield, Phone, Mail, Globe, Navigation } from 'lucide-react';
import './LibraryDetails.css';
import Header from './Header'

const LibraryDetails = () => {
  const [activeTab, setActiveTab] = useState('seating');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'FocusHub Main',
    'Gallery 1',
    'Gallery 2',
    'Gallery 3',
    'Gallery 4'
  ];
  

  const seatingOptions = [
    {
      id: 'cabin',
      name: 'Cabin',
      description: 'Private, enclosed cabin with ample desk space.',
      availability: '5 seats available',
      price: '₹700/day',
      image: 'Cabin'
    },
    {
      id: 'cubicle',
      name: 'Cubicle',
      description: 'Semi-private cubicle for focused work.',
      availability: '10 seats available',
      price: '₹500/day',
      image: 'Cubicle'
    },
    {
      id: 'open-desk',
      name: 'Open Desk',
      description: 'Shared open desk in a quiet environment.',
      availability: '20 seats available',
      price: '₹300/day',
      image: 'Open Desk'
    }
  ];

  const amenities = [
    { icon: <Wifi className="amenity-icon" />, name: 'Wi-Fi' },
    { icon: <Zap className="amenity-icon" />, name: 'AC' },
    { icon: <Zap className="amenity-icon" />, name: 'Power Socket' },
    { icon: <Users className="amenity-icon" />, name: 'Restroom' },
    { icon: <Shield className="amenity-icon" />, name: 'CCTV Security' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Aisha K.',
      initials: 'AK',
      rating: 5,
      comment: 'Excellent place for focused study! Clean and quiet.',
      date: '10/15/2023'
    },
    {
      id: 2,
      name: 'Rohan S.',
      initials: 'RS',
      rating: 4,
      comment: 'Good amenities, but Wi-Fi was a bit slow.',
      date: '10/12/2023'
    }
  ];

  const rules = [
    'Maintain silence',
    'No outside food allowed in cabins',
    'Clean your desk after use'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`star ${i < rating ? 'star-filled' : 'star-empty'}`}
      />
    ));
  };

  return (
    <div className="app-container">

      {/* Main Content */}
      <main className="main-content">
        {/* Image Gallery */}
        <div className="gallery-section">
          <div className="gallery-container">
            <button onClick={prevImage} className="gallery-nav gallery-prev">
              <ChevronLeft className="gallery-nav-icon" />
            </button>
            
            <div className="gallery-content">
              <h2 className="gallery-title">{images[currentImageIndex]}</h2>
              <p className="gallery-counter">Photo {currentImageIndex + 1} of {images.length}</p>
            </div>
            
            <button onClick={nextImage} className="gallery-nav gallery-next">
              <ChevronRight className="gallery-nav-icon" />
            </button>
            
            <button className="gallery-expand">
              <div className="gallery-expand-icon"></div>
            </button>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="thumbnails">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`thumbnail ${currentImageIndex === index ? 'thumbnail-active' : ''}`}
              >
                {index === 0 ? 'Main' : `G${index}`}
              </button>
            ))}
          </div>
        </div>

        {/* Facility Info */}
        <div className="facility-info">
          <h1 className="facility-title">FocusHub Central</h1>
          
          <div className="facility-details">
            <div className="facility-detail">
              <MapPin className="detail-icon" />
              <span>123 Knowledge Park, Silicon Alley, Central District, Tech City</span>
            </div>
            
            <div className="facility-detail">
              <Clock className="detail-icon" />
              <span>Open: 08:00 AM - 10:00 PM</span>
            </div>
            
            <div className="rating-section">
              <div className="rating">
                {renderStars(4)}
                <span className="rating-text">4.5 (120)</span>
              </div>
            </div>
            
            <div className="tags">
              <span className="tag">Study Space</span>
              <span className="tag">Coworking</span>
              <span className="tag">24/7 Access</span>
            </div>
            
            <div className="about-section">
              <h3 className="about-title">About FocusHub Central</h3>
              <p className="about-text">
                FocusHub Central offers a premium study environment with various seating options and top-notch 
                amenities to boost your productivity. Located in the heart of Tech City.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <div className="tabs-header">
            <nav className="tabs-nav">
              {[
                { id: 'seating', label: 'Seating & Pricing' },
                { id: 'amenities', label: 'Amenities' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'location', label: 'Location' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-button ${activeTab === tab.id ? 'tab-active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="tabs-content">
            {/* Seating & Pricing Tab */}
            {activeTab === 'seating' && (
              <div>
                <h3 className="tab-title">Seating Options & Pricing</h3>
                <div className="seating-options">
                  {seatingOptions.map((option) => (
                    <div key={option.id} className="seating-option">
                      <div className="option-image">
                        <span className="option-image-text">{option.image}</span>
                      </div>
                      <div className="option-details">
                        <h4 className="option-name">{option.name}</h4>
                        <p className="option-description">{option.description}</p>
                        <p className="option-availability">Availability: {option.availability}</p>
                      </div>
                      <div className="option-price">
                        <span className="price-tag">{option.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities Tab */}
            {activeTab === 'amenities' && (
              <div>
                <h3 className="tab-title">Amenities</h3>
                <div className="amenities-grid">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="amenity-item">
                      <div className="amenity-icon-container">{amenity.icon}</div>
                      <span className="amenity-name">{amenity.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="rules-section">
                  <h4 className="rules-title">Library Rules</h4>
                  <ul className="rules-list">
                    {rules.map((rule, index) => (
                      <li key={index} className="rule-item">
                        <span className="rule-bullet">•</span>
                        <span className="rule-text">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="tab-title">User Reviews (120)</h3>
                <p className="reviews-subtitle">See what others are saying about FocusHub Central</p>
                
                <div className="reviews-list">
                  {reviews.map((review) => (
                    <div key={review.id} className="review-item">
                      <div className="review-content">
                        <div className="review-avatar">
                          <span className="avatar-text">{review.initials}</span>
                        </div>
                        <div className="review-details">
                          <div className="review-header">
                            <span className="reviewer-name">{review.name}</span>
                            <div className="review-rating">
                              {renderStars(review.rating)}
                            </div>
                          </div>
                          <p className="review-comment">{review.comment}</p>
                          <p className="review-date">{review.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="write-review-button">
                  ⭐ Write a Review
                </button>
              </div>
            )}

            {/* Location Tab */}
            {activeTab === 'location' && (
              <div>
                <h3 className="tab-title">Location & Map</h3>
                <div className="location-info">
                  <p className="location-address">Address: 123 Knowledge Park, Silicon Alley, Central District, Tech City - 560001</p>
                  <p className="location-description">Find us easily on the map below.</p>
                </div>
                
                <div className="map-container">
                  <div className="map-placeholder">
                    <MapPin className="map-icon" />
                    <p className="map-title">Location Map</p>
                    <p className="map-subtitle">Map view for: 123 Knowledge Park, Silicon Alley, Central District, Tech City 560001</p>
                    <p className="map-note">(Map integration coming soon)</p>
                  </div>
                </div>
                
                <button className="directions-button">
                  <Navigation className="directions-icon" />
                  <span>Get Directions</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <div className="contact-header">
            <h3 className="contact-title">Contact & Inquire</h3>
            <p className="contact-subtitle">Interested in this space? Get in touch!</p>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span className="contact-text">9876543210</span>
            </div>
            
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span className="contact-text">contact@focushub.com</span>
            </div>
            
            <div className="contact-item">
              <Globe className="contact-icon" />
              <span className="contact-link">Visit Website</span>
            </div>
          </div>
          
          <div className="contact-buttons">
            <button className="call-button">
              <Phone className="button-icon" />
              <span>Call Now</span>
            </button>
            <button className="inquiry-button">
              <Mail className="button-icon" />
              <span>Send Inquiry</span>
            </button>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Actions */}
      <div className="bottom-actions">
        <div className="bottom-actions-content">
          <button className="bottom-call-button">
            <Phone className="button-icon" />
            <span>Call Now</span>
          </button>
          <button className="bottom-inquiry-button">
            <Mail className="button-icon" />
            <span>Send Inquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetails;