import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Clock, Wifi, Zap, Users, Shield, Phone, Mail, Globe, Navigation } from 'lucide-react';
import './LibraryDetails.css';
import { useParams } from 'react-router-dom';
import Header from './Header';

const LibraryDetails = () => {
  const [activeTab, setActiveTab] = useState('seating');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [library, setLibrary] = useState(null);
  
  // Get the library ID from the URL parameters
  const { id } = useParams();

  // Library data (in a real app, this would come from an API or context)
  const librariesData = {
    1: {
      id: 1,
      name: "Scholar's Den Uptown",
      location: "Uptown Area, Learnville",
      fullAddress: "123 Scholar's Street, Uptown Area, Learnville - 560001",
      rating: 4.8,
      reviews: 250,
      description: "Scholar's Den Uptown is a 24/7 study library designed for serious learners. We provide a peaceful and focused environment with modern amenities to help you achieve your academic goals.",
      hours: "24/7 Access",
      tags: ["24/7 Access", "Study Space", "Premium"],
      phone: "9876543210",
      email: "contact@scholarsden.com",
      website: "www.scholarsden.com",
      images: [
        '/library/main.jpg',
        '/library/gallery-1.jpg',
        '/library/gallery-2.jpg',
        '/library/gallery-3.jpg',
        '/library/gallery-4.jpg',
      ],
      seatingOptions: [
        {
          id: 'private-cabin',
          name: 'Private Cabin',
          description: 'Fully enclosed private cabin with premium desk space and storage.',
          availability: '3 seats available',
          price: '₹800/day',
          image: '/seating/cabin.jpg'
        },
        {
          id: 'semi-private',
          name: 'Semi-Private',
          description: 'Semi-private workspace with partition walls.',
          availability: '8 seats available',
          price: '₹600/day',
          image: '/seating/cubicle.jpg'
        },
        {
          id: 'shared-desk',
          name: 'Shared Desk',
          description: 'Shared workspace in quiet study hall.',
          availability: '15 seats available',
          price: '₹400/day',
          image: '/seating/open-desk.jpg'
        }
      ],
      amenities: [
        { icon: <Wifi className="amenity-icon" />, name: 'High-Speed Wi-Fi' },
        { icon: <Zap className="amenity-icon" />, name: 'AC & Power Socket' },
        { icon: <Shield className="amenity-icon" />, name: 'Locker & Security' },
        { icon: <Users className="amenity-icon" />, name: 'Restroom' },
        { icon: <Globe className="amenity-icon" />, name: 'Library Resources' }
      ],
      rules: [
        'Maintain complete silence in study areas',
        'No outside food in premium cabins',
        'Clean and sanitize your workspace after use',
        'No phone calls in silent zones'
      ]
    },
    2: {
      id: 2,
      name: "FocusHub Central",
      location: "Central District, Tech City",
      fullAddress: "123 Knowledge Park, Silicon Alley, Central District, Tech City - 560001",
      rating: 4.5,
      reviews: 120,
      description: "FocusHub Central offers a premium study environment with various seating options and top-notch amenities to boost your productivity. Located in the heart of Tech City.",
      hours: "08:00 AM - 10:00 PM",
      tags: ["Study Space", "Coworking", "Modern"],
      phone: "9876543210",
      email: "contact@focushub.com",
      website: "www.focushub.com",
      images: [
        '/library/main.jpg',
        '/library/gallery-1.jpg',
        '/library/gallery-2.jpg',
        '/library/gallery-3.jpg',
        '/library/gallery-4.jpg',
      ],
      seatingOptions: [
        {
          id: 'cabin',
          name: 'Cabin',
          description: 'Private, enclosed cabin with ample desk space.',
          availability: '5 seats available',
          price: '₹700/day',
          image: '/seating/cabin.jpg'
        },
        {
          id: 'cubicle',
          name: 'Cubicle',
          description: 'Semi-private cubicle for focused work.',
          availability: '10 seats available',
          price: '₹500/day',
          image: '/seating/cubicle.jpg'
        },
        {
          id: 'open-desk',
          name: 'Open Desk',
          description: 'Shared open desk in a quiet environment.',
          availability: '20 seats available',
          price: '₹300/day',
          image: '/seating/open-desk.jpg'
        }
      ],
      amenities: [
        { icon: <Wifi className="amenity-icon" />, name: 'Wi-Fi' },
        { icon: <Zap className="amenity-icon" />, name: 'AC' },
        { icon: <Zap className="amenity-icon" />, name: 'Power Socket' },
        { icon: <Users className="amenity-icon" />, name: 'Restroom' },
        { icon: <Shield className="amenity-icon" />, name: 'CCTV Security' }
      ],
      rules: [
        'Maintain silence',
        'No outside food allowed in cabins',
        'Clean your desk after use'
      ]
    },
    3: {
      id: 3,
      name: "The Study Nook",
      location: "Green Meadows, Quiet Town",
      fullAddress: "456 Study Lane, Green Meadows, Quiet Town - 560002",
      rating: 4.2,
      reviews: 80,
      description: "The Study Nook offers a casual and comfortable environment for short study bursts or remote work sessions. Perfect for students looking for an affordable study space.",
      hours: "09:00 AM - 09:00 PM",
      tags: ["Affordable", "Casual", "Flexible"],
      phone: "9876543211",
      email: "hello@studynook.com",
      website: "www.studynook.com",
      images: [
        '/library/main.jpg',
        '/library/gallery-1.jpg',
        '/library/gallery-2.jpg',
        '/library/gallery-3.jpg',
        '/library/gallery-4.jpg',
      ],
      seatingOptions: [
        {
          id: 'cozy-corner',
          name: 'Cozy Corner',
          description: 'Comfortable corner seat with good lighting.',
          availability: '12 seats available',
          price: '₹150/day',
          image: '/seating/cabin.jpg'
        },
        {
          id: 'study-table',
          name: 'Study Table',
          description: 'Standard study table in open area.',
          availability: '25 seats available',
          price: '₹100/day',
          image: '/seating/cubicle.jpg'
        }
      ],
      amenities: [
        { icon: <Wifi className="amenity-icon" />, name: 'Wi-Fi' },
        { icon: <Shield className="amenity-icon" />, name: 'Locker' },
        { icon: <Globe className="amenity-icon" />, name: 'Reading Lamp' },
        { icon: <Zap className="amenity-icon" />, name: 'Power Socket' }
      ],
      rules: [
        'Keep noise to minimum',
        'Return books to designated areas',
        'No food or drinks near electronics'
      ]
    }
  };

  // Sample reviews (in a real app, these would be fetched based on library ID)
  const reviews = [
    { id: 1, name: 'Aisha K.', initials: 'AK', rating: 5, comment: 'Excellent place for focused study! Clean and quiet.', date: '10/15/2023' },
    { id: 2, name: 'Rohan S.', initials: 'RS', rating: 4, comment: 'Good amenities, but Wi-Fi was a bit slow.', date: '10/12/2023' }
  ];

  // Load library data based on ID
  useEffect(() => {
    const libraryData = librariesData[parseInt(id)];
    if (libraryData) {
      setLibrary(libraryData);
    }
  }, [id]);

  // If library not found, show error
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
                      <div className="amenity-icon-container">{amenity.icon}</div>
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