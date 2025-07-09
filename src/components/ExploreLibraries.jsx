import React, { useState } from 'react';
import { Search, MapPin, Grid, List, ChevronDown, Filter, Star, Wifi, Zap, Lock, Coffee, Car, Printer, Users, BookOpen, X } from 'lucide-react';
import './ExploreLibraries.css';
import { useNavigate } from "react-router-dom";
import Header from './Header'


const ExploreLibraries = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('Sort by Rating');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [feeRange, setFeeRange] = useState([0, 10000]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

const navigate = useNavigate();

  const handleClick = () => {
    navigate("/libraries"); // Navigates to home
  };

  const libraries = [
    {
      id: 1,
      name: "Scholar's Den Uptown",
      location: "Uptown Area, Learnville",
      rating: 4.8,
      reviews: 250,
      description: "Scholar's Den Uptown is a 24/7 study library designed for serious learners. We provide a peaceful and focused environment with modern amenities.",
      price: 6000,
      priceType: "monthly",
      tags: ["24/7 Access"],
      amenities: ["Wi-Fi", "AC", "Locker", "Power Socket", "Restroom"],
      image: "scholar-den"
    },
    {
      id: 2,
      name: "FocusHub Central",
      location: "Central District, Tech City",
      rating: 4.5,
      reviews: 120,
      description: "FocusHub Central offers a premium study environment with various seating options and modern facilities for productive learning.",
      price: 5000,
      priceType: "monthly",
      tags: ["Quiet Zone"],
      amenities: ["Wi-Fi", "AC", "Locker", "Power Socket", "Food & Beverages"],
      image: "focushub"
    },
    {
      id: 3,
      name: "The Study Nook",
      location: "Green Meadows, Quiet Town",
      rating: 4.2,
      reviews: 80,
      description: "The Study Nook offers a casual and comfortable environment for short study bursts or remote work sessions.",
      price: 100,
      priceType: "hourly",
      tags: ["Affordable"],
      amenities: ["Wi-Fi", "Locker", "Reading Lamp", "Power Socket"],
      image: "study-nook"
    }
  ];

  const sortOptions = [
    "Sort by Rating",
    "Price: Low to High", 
    "Price: High to Low"
  ];

  const amenitiesList = [
    { id: 'wifi', label: 'Wi-Fi', icon: Wifi },
    { id: 'ac', label: 'AC', icon: Zap },
    { id: 'locker', label: 'Locker', icon: Lock },
    { id: 'power', label: 'Power Socket', icon: Zap },
    { id: 'food', label: 'Food & Beverages', icon: Coffee },
    { id: 'parking', label: 'Parking', icon: Car },
    { id: 'printer', label: 'Printer', icon: Printer },
    { id: 'restroom', label: 'Restroom', icon: Users },
    { id: 'reading', label: 'Reading Lamp', icon: BookOpen },
  ];

  const handleAmenityToggle = (amenityId) => {
    setSelectedAmenities(prev => 
      prev.includes(amenityId) 
        ? prev.filter(id => id !== amenityId)
        : [...prev, amenityId]
    );
  };

  const handleSortSelect = (option) => {
    setSortBy(option);
    setShowSortDropdown(false);
  };

  const formatPrice = (price, type) => {
    return `INR${price}/${type}`;
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="star star-full" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="star star-half" />);
    }
    
    return stars;
  };

  const LibraryCard = ({ library }) => (
    <div className="library-card">
      <div className="library-card-image-container">
        <div className="library-card-image">
          <span className="library-card-image-text">{library.name}</span>
        </div>
        {library.tags.map(tag => (
          <span key={tag} className="library-card-tag">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="library-card-content">
        <h3 className="library-card-title">{library.name}</h3>
        
        <div className="library-card-location">
          <MapPin className="location-icon" />
          <span className="location-text">{library.location}</span>
        </div>
        
        <div className="library-card-rating">
          <div className="rating-stars">
            {renderStars(library.rating)}
          </div>
          <span className="rating-text">{library.rating} ({library.reviews})</span>
        </div>
        
        <p className="library-card-description">{library.description}</p>
        
        <div className="library-card-amenities">
          <span className="amenities-label">Key Amenities:</span>
          <div className="amenities-icons">
            <Wifi className="amenity-icon" />
            <Zap className="amenity-icon" />
            <Lock className="amenity-icon" />
            <span className="amenities-more">+{library.amenities.length - 3} more</span>
          </div>
        </div>
        
        <div className="library-card-footer">
          <div className="price-section">
            <span className="price-label">Starts from</span>
            <div className="price-value">
              {formatPrice(library.price, library.priceType)}
            </div>
          </div>
          <button className="view-details-btn" onClick={handleClick}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const LibraryListItem = ({ library }) => (
    <div className="library-list-item">
      <div className="library-list-content">
        <div className="library-list-image">
          <span className="library-list-image-text">{library.name}</span>
        </div>
        
        <div className="library-list-info">
          <div className="library-list-header">
            <h3 className="library-list-title">{library.name}</h3>
            {library.tags.map(tag => (
              <span key={tag} className="library-list-tag">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="library-list-location">
            <MapPin className="location-icon" />
            <span className="location-text">{library.location}</span>
          </div>
          
          <div className="library-list-rating">
            <div className="rating-stars">
              {renderStars(library.rating)}
            </div>
            <span className="rating-text">{library.rating} ({library.reviews})</span>
          </div>
          
          <p className="library-list-description">{library.description}</p>
          
          <div className="library-list-footer">
            <div className="library-list-amenities">
              <div className="amenities-icons">
                <Wifi className="amenity-icon" />
                <Zap className="amenity-icon" />
                <Lock className="amenity-icon" />
                <span className="amenities-more">+{library.amenities.length - 3} more</span>
              </div>
            </div>
            
            <div className="library-list-actions">
              <div className="price-section-right">
                <span className="price-label">Starts from</span>
                <div className="price-value">
                  {formatPrice(library.price, library.priceType)}
                </div>
              </div>
              <button className="view-details-btn" onClick={handleClick}>
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      {/* Header */}
      {/* <Header></Header> */}

      {/* Main Content */}
      <main className="main-content">
        <div className="page-header">
          <h1 className="page-title">Explore Study Libraries</h1>
          <p className="page-subtitle">{libraries.length} libraries found.</p>
        </div>

        {/* Controls */}
        <div className="controls-section">
          <div className="sort-dropdown-container">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="sort-btn"
            >
              <span>{sortBy}</span>
              <ChevronDown className="dropdown-icon" />
            </button>
            
            {showSortDropdown && (
              <div className="sort-dropdown">
                {sortOptions.map(option => (
                  <button
                    key={option}
                    onClick={() => handleSortSelect(option)}
                    className="sort-option"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="view-controls">
            <button
              onClick={() => setViewMode('grid')}
              className={`view-btn ${viewMode === 'grid' ? 'view-btn-active' : 'view-btn-inactive'}`}
            >
              <Grid className="view-icon" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`view-btn ${viewMode === 'list' ? 'view-btn-active' : 'view-btn-inactive'}`}
            >
              <List className="view-icon" />
            </button>
            <button
              onClick={() => setShowFilters(true)}
              className="filters-btn"
            >
              <Filter className="filter-icon" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Libraries Display */}
        <div className={viewMode === 'grid' ? 'libraries-grid' : 'libraries-list'}>
          {libraries.map(library => 
            viewMode === 'grid' ? 
              <LibraryCard key={library.id} library={library} /> : 
              <LibraryListItem key={library.id} library={library} />
          )}
        </div>
      </main>

      {/* Filter Section Below Header */}
      {showFilters && (
        <div className="filter-section-below-header">
          <div className="filter-content-horizontal">
            <div className="filter-header-horizontal">
              <h2 className="filter-title">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X className="close-icon" />
              </button>
            </div>
            
            <div className="filter-sections-container">
              {/* Fee Range */}
              <div className="filter-section-horizontal">
                <h3 className="filter-section-title-small">Fee Range (Monthly)</h3>
                <div className="range-container-horizontal">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={feeRange[1]}
                    onChange={(e) => setFeeRange([0, parseInt(e.target.value)])}
                    className="range-slider"
                  />
                </div>
                <div className="range-labels">
                  <span>₹0</span>
                  <span>₹{feeRange[1]}</span>
                </div>
              </div>
              
              {/* Amenities */}
              <div className="filter-section-horizontal">
                <h3 className="filter-section-title-small">Amenities</h3>
                <div className="amenities-checkboxes-horizontal">
                  {amenitiesList.map(amenity => (
                    <label key={amenity.id} className="checkbox-label-horizontal">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity.id)}
                        onChange={() => handleAmenityToggle(amenity.id)}
                        className="checkbox-input"
                      />
                      <span className="checkbox-text">{amenity.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreLibraries;