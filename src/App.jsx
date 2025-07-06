import './App.css'
import Header from './components/Header'
import Home from './components/Home';
import School from './components/School';
import Endpart from './components/Endpart';
import Smapt from './components/Smapt';
import Focus from './components/Focus';
import Gallary from './components/Gallary';

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <School />
        <div className='endpart-container'>
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
        {/* <Focus /> */}
        {/* <Gallary /> */}
        </div>
    </>
  )
};

export default App;
