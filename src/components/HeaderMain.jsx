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
            imageAlt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjafce8IMVXQE6_jfpCTTRYAqH8Xzg-eabQ&s"
            imageTittle="Central Library Study Desk"
            name="Central Library Study Desk"
            location="Delhi University, India"
            rating={4.9}
            reviews={320}
            description="Quiet and focused study spaces with High-speed WiFi abd academic resources."
            amenities={["Free WiFi", "AC Rooms", "Group Study", "Reading Room"]}
            price="₹99"
            priceType="per hour"
          />
          <Endpart
            tag="Best Seller"
            imageAlt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrxlGZlivrqoPXBntciBt9TJRT38gVYrGRH619EHu768v1hap6lw5EmHE8wVNvjBniGq8&usqp=CAU"
            imageTittle="South Campus"
            name="South Campus Library"
            location="South Campus, DU, India"
            rating={4.8}
            reviews={124}
            description="A luxurious resort with sea view rooms and top-class service."
            amenities={["Free WiFi", "AC Rooms", "Group Study", "Silent Zone"]}
            price="₹79"
            priceType="per hour"
          />
          <Endpart
            tag="Best Seller"
            imageTittle="North Campus Reading Room"
            imageAlt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_oRhn_faaM0SR1qFvPFPHAaoaz_vU2KWTjLQJ5VICeXhUN2dahswiNlC2HYv0vgKoqU&usqp=CAU"
            name="North Campus Reading Room"
            location="North Campus, DU"
            rating={4.7}
            reviews={124}
            description="Spacious study cuicles,silent zone, and group discussion rooms with wifi access."
            amenities={["Free WiFi", "AC", "Silent Zone", "Group Rooms"]}
            price="₹80"
            priceType="per hour"
          />
        </div>
        <Smapt />
      </div>
    </>
  );
}

export default HeaderMain;
