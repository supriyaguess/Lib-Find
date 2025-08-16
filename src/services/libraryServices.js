// libraryService.js
import librariesData from '../data/libraries-data.json';
import reviewsData from '../data/reviews-data.json';

class LibraryService {
  // Get all libraries
  static getAllLibraries() {
    try {
      return librariesData.libraries || [];
    } catch (error) {
      console.error('Error loading libraries data:', error);
      return [];
    }
  }

  // Get library by ID
  static getLibraryById(id) {
    try {
      const libraries = librariesData.libraries || [];
      return libraries.find(library => library.id === parseInt(id));
    } catch (error) {
      console.error('Error loading library data:', error);
      return null;
    }
  }

  // Get reviews for a library
  static getLibraryReviews(libraryId) {
    try {
      return reviewsData.reviews[libraryId.toString()] || [];
    } catch (error) {
      console.error('Error loading reviews data:', error);
      return [];
    }
  }

  // Get filtered libraries based on criteria
  static getFilteredLibraries(filters = {}) {
    try {
      // Use provided libraries or get all libraries
      let libraries = filters.libraries || this.getAllLibraries();

      // Filter by price range
      if (filters.priceRange) {
        const [minPrice, maxPrice] = filters.priceRange;
        libraries = libraries.filter(library => {
          // Convert monthly prices for comparison
          let libraryPrice = library.price;
          if (library.priceType === 'hourly') {
            libraryPrice = library.price * 24 * 30; // Rough monthly estimate
          }
          return libraryPrice >= minPrice && libraryPrice <= maxPrice;
        });
      }

      // Filter by amenities
      if (filters.amenities && filters.amenities.length > 0) {
        libraries = libraries.filter(library => {
          return filters.amenities.every(amenity => 
            library.amenities.some(libraryAmenity => 
              libraryAmenity.toLowerCase().includes(amenity.toLowerCase())
            )
          );
        });
      }

      // Filter by rating
      if (filters.minRating) {
        libraries = libraries.filter(library => library.rating >= filters.minRating);
      }

      // Filter by tags
      if (filters.tags && filters.tags.length > 0) {
        libraries = libraries.filter(library => {
          return filters.tags.some(tag => 
            library.tags.some(libraryTag => 
              libraryTag.toLowerCase().includes(tag.toLowerCase())
            )
          );
        });
      }

      return libraries;
    } catch (error) {
      console.error('Error filtering libraries:', error);
      return [];
    }
  }

  // Sort libraries
  static sortLibraries(libraries, sortBy) {
    try {
      const sortedLibraries = [...libraries];
      
      switch (sortBy) {
        case 'Price: Low to High':
          return sortedLibraries.sort((a, b) => {
            let priceA = a.price;
            let priceB = b.price;
            
            // Normalize hourly to monthly for comparison
            if (a.priceType === 'hourly') priceA = priceA * 24 * 30;
            if (b.priceType === 'hourly') priceB = priceB * 24 * 30;
            
            return priceA - priceB;
          });
          
        case 'Price: High to Low':
          return sortedLibraries.sort((a, b) => {
            let priceA = a.price;
            let priceB = b.price;
            
            // Normalize hourly to monthly for comparison
            if (a.priceType === 'hourly') priceA = priceA * 24 * 30;
            if (b.priceType === 'hourly') priceB = priceB * 24 * 30;
            
            return priceB - priceA;
          });
          
        case 'Sort by Rating':
        default:
          return sortedLibraries.sort((a, b) => b.rating - a.rating);
      }
    } catch (error) {
      console.error('Error sorting libraries:', error);
      return libraries;
    }
  }

  // Search libraries
  static searchLibraries(query) {
    try {
      const libraries = this.getAllLibraries();
      const lowercaseQuery = query.toLowerCase();
      
      return libraries.filter(library => 
        library.name.toLowerCase().includes(lowercaseQuery) ||
        library.location.toLowerCase().includes(lowercaseQuery) ||
        library.description.toLowerCase().includes(lowercaseQuery) ||
        library.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      );
    } catch (error) {
      console.error('Error searching libraries:', error);
      return [];
    }
  }
}

export default LibraryService;