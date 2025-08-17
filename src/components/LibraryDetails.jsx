import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Clock, Wifi, Zap, Users, Shield, Phone, Mail, Globe, Navigation } from 'lucide-react';
import './LibraryDetails.css';
import { useParams } from 'react-router-dom';
import Header from './Header';

const LibraryDetails = () => {
  const [activeTab, setActiveTab] = useState('seating');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [library, setLibrary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get the library ID from the URL parameters
  const { id } = useParams();

  // Sample reviews (in a real app, these would also be fetched from API/JSON)
  const reviews = [
    { id: 1, name: 'Aisha K.', initials: 'AK', rating: 5, comment: 'Excellent place for focused study! Clean and quiet.', date: '10/15/2023' },
    { id: 2, name: 'Rohan S.', initials: 'RS', rating: 4, comment: 'Good amenities, but Wi-Fi was a bit slow.', date: '10/12/2023' }
  ];

  // Function to fetch library data from JSON file
  const fetchLibraryData = async (libraryId) => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch data from the JSON file
      const response = await fetch('/data/libraries.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const librariesData = await response.json();
      const libraryData = librariesData[libraryId];
      
      if (!libraryData) {
        throw new Error('Library not found');
      }
      
      setLibrary(libraryData);
    } catch (err) {
      console.error('Error fetching library data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load library data based on ID
  useEffect(() => {
    if (id) {
      fetchLibraryData(id);
    }
  }, [id]);

  // Helper function to render amenity icons
  const renderAmenityIcon = (iconName) => {
    const iconMap = {
      Wifi: <Wifi className="amenity-icon" />,
      Zap: <Zap className="amenity-icon" />,
      Shield: <Shield className="amenity-icon" />,
      Users: <Users className="amenity-icon" />,
      Globe: <Globe className="amenity-icon" />
    };
    
    return iconMap[iconName] || <Globe className="amenity-icon" />;
  };

  // Loading state
  if (loading) {
    return (
      <div className="app-container">
        <main className="main-content">
          <div className="loading-message">
            <h2>Loading library details...</h2>
          </div>
        </main>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="app-container">
        <main className="main-content">
          <div className="error-message">
            <h1>Error Loading Library</h1>
            <p>{error}</p>
            <button onClick={() => fetchLibraryData(id)} className="retry-button">
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  // If library not found
  if (!library) {
    return (
      <div className="app-container">
        <main className="main-content">
          <div className="error-message">
            <h1>Library Not Found</h1>
            <p>The library you're looking for doesn't exist or has been removed.</p>
          </div>
        </main>
      </div>
    );
  }

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % library.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + library.images.length) % library.images.length);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`star ${i < rating ? 'star-filled' : 'star-empty'}`} />
    ));
  };

  return (
    <div className="app-container">
      <main className="main-content">

        {/* Image Gallery */}
        <div className="gallery-section">
          <div className="gallery-container" style={{'--bg-image': `url(${library.images[currentImageIndex]})`}}>
            <button onClick={prevImage} className="gallery-nav gallery-prev">
              <ChevronLeft className="gallery-nav-icon" />
            </button>

            <div className="gallery-content">
              <img
                src={library.images[currentImageIndex]}
                alt={`${library.name} - Gallery ${currentImageIndex + 1}`}
                className="gallery-image"
                onError={(e) => (e.currentTarget.src = '/library/main.jpg')}
              />
            </div>

            <button onClick={nextImage} className="gallery-nav gallery-next">
              <ChevronRight className="gallery-nav-icon" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="thumbnails">
            {library.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`thumbnail ${currentImageIndex === index ? 'thumbnail-active' : ''}`}
              >
                <img src={img} alt={`Thumb ${index}`} className="thumbnail-img" />
              </button>
            ))}
          </div>
        </div>

        {/* Facility Info */}
        <div className="facility-info">
          <h1 className="facility-title">{library.name}</h1>
          <div className="facility-details">
            <div className="facility-detail">
              <MapPin className="detail-icon" />
              <span>{library.fullAddress}</span>
            </div>
            <div className="facility-detail">
              <Clock className="detail-icon" />
              <span>Open: {library.hours}</span>
            </div>
            <div className="rating-section">
              <div className="rating">
                {renderStars(Math.floor(library.rating))}
                <span className="rating-text">{library.rating} ({library.reviews})</span>
              </div>
            </div>
            <div className="tags">
              {library.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <div className="about-section">
              <h3 className="about-title">About {library.name}</h3>
              <p className="about-text">{library.description}</p>
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
            {/* Seating */}
            {activeTab === 'seating' && (
              <div>
                <h3 className="tab-title">Seating Options & Pricing</h3>
                <div className="seating-options">
                  {library.seatingOptions.map((option) => (
                    <div key={option.id} className="seating-option">
                      <div className="option-image">
                        <img src={option.image} alt={option.name} className="option-img" />
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

            {/* Amenities */}
            {activeTab === 'amenities' && (
              <div>
                <h3 className="tab-title">Amenities</h3>
                <div className="amenities-grid">
                  {library.amenities.map((amenity, index) => (
                    <div key={index} className="amenity-item">
                      <div className="amenity-icon-container">
                        {renderAmenityIcon(amenity.icon)}
                      </div>
                      <span className="amenity-name">{amenity.name}</span>
                    </div>
                  ))}
                </div>
                <div className="rules-section">
                  <h4 className="rules-title">Library Rules</h4>
                  <ul className="rules-list">
                    {library.rules.map((rule, index) => (
                      <li key={index} className="rule-item">
                        <span className="rule-bullet">•</span>
                        <span className="rule-text">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Reviews */}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="tab-title">User Reviews ({library.reviews})</h3>
                <div className="reviews-list">
                  {reviews.map((review) => (
                    <div key={review.id} className="review-item">
                      <div className="review-avatar">
                        <span className="avatar-text">{review.initials}</span>
                      </div>
                      <div className="review-details">
                        <div className="review-header">
                          <span className="reviewer-name">{review.name}</span>
                          <div className="review-rating">{renderStars(review.rating)}</div>
                        </div>
                        <p className="review-comment">{review.comment}</p>
                        <p className="review-date">{review.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location */}
            {activeTab === 'location' && (
              <div>
                <h3 className="tab-title">Location & Map</h3>
                <div className="location-info">
                  <p>Address: {library.fullAddress}</p>
                  <p>Find us easily on the map below.</p>
                </div>
                <div className="map-placeholder">
                  <MapPin className="map-icon" />
                  <p className="map-title">Location Map</p>
                  <p className="map-subtitle">Map view for: {library.fullAddress}</p>
                  <p className="map-note">(Map integration coming soon)</p>
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
              <span className="contact-text">{library.phone}</span>
            </div>
            
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span className="contact-text">{library.email}</span>
            </div>
            
            <div className="contact-item">
              <Globe className="contact-icon" />
              <span className="contact-link">{library.website}</span>
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