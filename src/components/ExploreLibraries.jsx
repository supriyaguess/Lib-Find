import React, { useState, useEffect } from 'react';
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
  
  // New state for data management
  const [libraries, setLibraries] = useState([]);
  const [amenitiesList, setAmenitiesList] = useState([]);
  const [sortOptions, setSortOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Function to fetch data from JSON file
  const fetchLibrariesData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/data/explore-libraries.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      setLibraries(data.libraries || []);
      setAmenitiesList(data.amenitiesList || []);
      setSortOptions(data.sortOptions || []);
      
      // Set default sort option if available
      if (data.sortOptions && data.sortOptions.length > 0) {
        setSortBy(data.sortOptions[0]);
      }
      
    } catch (err) {
      console.error('Error fetching libraries data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchLibrariesData();
  }, []);

  // Function to sort libraries based on selected option
  const getSortedLibraries = () => {
    const sortedLibraries = [...libraries];
    
    switch (sortBy) {
      case 'Price: Low to High':
        return sortedLibraries.sort((a, b) => a.price - b.price);
      case 'Price: High to Low':
        return sortedLibraries.sort((a, b) => b.price - a.price);
      case 'Sort by Rating':
      default:
        return sortedLibraries.sort((a, b) => b.rating - a.rating);
    }
  };

  // Helper function to render amenity icons
  const renderAmenityIcon = (iconName) => {
    const iconMap = {
      Wifi: <Wifi className="amenity-icon" />,
      Zap: <Zap className="amenity-icon" />,
      Lock: <Lock className="amenity-icon" />,
      Coffee: <Coffee className="amenity-icon" />,
      Car: <Car className="amenity-icon" />,
      Printer: <Printer className="amenity-icon" />,
      Users: <Users className="amenity-icon" />,
      BookOpen: <BookOpen className="amenity-icon" />
    };
    
    return iconMap[iconName] || <Wifi className="amenity-icon" />;
  };

  // Updated handleClick to accept library ID
  const handleClick = (libraryId) => {
    navigate(`/libraries/${libraryId}`);
  };

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
          <button 
            className="view-details-btn" 
            onClick={() => handleClick(library.id)}
          >
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
              <button 
                className="view-details-btn" 
                onClick={() => handleClick(library.id)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Loading state
  if (loading) {
    return (
      <div className="app-container">
        <main className="main-content">
          <div className="loading-message">
            <h2>Loading libraries...</h2>
            <p>Please wait while we fetch the latest library information.</p>
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
            <h1>Error Loading Libraries</h1>
            <p>{error}</p>
            <button onClick={fetchLibrariesData} className="retry-button">
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Header */}
      {/* <Header></Header> */}

      {/* Main Content */}
      <main className="main-content">
        <div className="page-header">
          <h1 className="page-title">Explore Study Libraries</h1>
          <p className="page-subtitle">{getSortedLibraries().length} libraries found.</p>
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
          {getSortedLibraries().length > 0 ? (
            getSortedLibraries().map(library => 
              viewMode === 'grid' ? 
                <LibraryCard key={library.id} library={library} /> : 
                <LibraryListItem key={library.id} library={library} />
            )
          ) : (
            <div className="no-libraries">
              <p>No libraries found.</p>
            </div>
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
                      <div className="amenity-with-icon">
                        {renderAmenityIcon(amenity.icon)}
                        <span className="checkbox-text">{amenity.label}</span>
                      </div>
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