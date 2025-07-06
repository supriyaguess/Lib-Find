import React from 'react';  
import './Center.css'; // Assuming you have a CSS file for styling

function Center(){
  return (
    <div className="container">
        <div className='Focus'>
            <h1 className='heading'>FocusHub Central</h1>
            <p className='location'>
                123 Knowledge park, Silicon  Alley,
                 Central District, Tech City
            </p>
            <p className='time'> Open: 08:00 AM - 10:00 PM</p>
        <div className='quality'>
            <div className='box'>Quite Zone</div>
            <div className='box'>Student Friendly</div>
            <div className='box'>Professional Welcome</div>
        </div>
        </div>
        <div className='about'>
            <h1>About FocusHub Central</h1>
            <p>FocusHub Central offers a premium study environment with various seating options and topnotch
                amenities to boost your productivity. Located in the heart of Tech City.
            </p>
        </div>
        <div className='options'>
            <button className='option-button'>Seating & Pricing</button>
            <button className='option-button'>Amenities</button>     
            <button className='option-button'>Reviews</button>
            <button className='option-button'>Locatio</button>
        </div>
        <div className='seating'>
            <h1>Seating & Pricing</h1>
            <div>
                <h1>Cabin</h1>
            </div>
            <div>
                <h1>Cubicle</h1>
            </div>
            <div>
                <h1>Open desk</h1>
            </div>
        </div>
        
      
    </div>
  );
}

export default Center;