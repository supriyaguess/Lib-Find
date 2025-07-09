import './HeaderMain.css';
import Header from './Header';
import Home from './Home';
import School from './School';
import Endpart from './Endpart';
import Smapt from './Smapt';

function HeaderMain({ user, onLogout }) {
  return (
    <>
      <div>
        <Header user={user} onLogout={onLogout} />
        <Home />
        <School />
        <div className='endpart-container'>
          {/* You can refactor these repeated Endpart entries later */}
          <Endpart
            tag="Best Seller"
            imageAlt="https://www.haverford.edu/sites/default/files/Office/Library/Carrels2.jpg"
            imageTittle="Luxury Hotel"
            name="Sunset Resort"
            location="Goa, India"
            rating={4.8}
            reviews={124}
            description="A luxurious resort with sea view rooms and top-class service."
            amenities={["Free WiFi", "Pool", "Gym", "Spa"]}
            price="₹5,499"
            priceType="per day"
          />
          <Endpart
            tag="Best Seller"
            imageAlt="https://www.haverford.edu/sites/default/files/Office/Library/Carrels2.jpg"
            imageTittle="Luxury Hotel"
            name="Sunset Resort"
            location="Goa, India"
            rating={4.8}
            reviews={124}
            description="A luxurious resort with sea view rooms and top-class service."
            amenities={["Free WiFi", "Pool", "Gym", "Spa"]}
            price="₹5,499"
            priceType="per day"
          />
          <Endpart
            tag="Best Seller"
            imageAlt="https://www.haverford.edu/sites/default/files/Office/Library/Carrels2.jpg"
            imageTittle="Luxury Hotel"
            name="Sunset Resort"
            location="Goa, India"
            rating={4.8}
            reviews={124}
            description="A luxurious resort with sea view rooms and top-class service."
            amenities={["Free WiFi", "Pool", "Gym", "Spa"]}
            price="₹5,499"
            priceType="per day"
          />
        </div>
        <Smapt />
      </div>
    </>
  );
}

export default HeaderMain;
