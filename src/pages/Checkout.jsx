import React, { useState } from 'react';
import peace from '../assets/peace.jpg';
import { useLocation } from 'react-router-dom';


function Checkout() {
  const [hoverText, setHoverText] = useState('Goodbye');

  const handleMouseEnter = () => {
    setHoverText('Arrivederci');
  };
  
  const handleMouseLeave = () => {
    setHoverText('Goodbye');
  };
  
  const location = useLocation();
  const data = location.state;
  
  console.log('Data received from Cart Routed page:', data);
  
  return (
    <section>
      <h1>
        <span
          onMouseEnter={handleMouseEnter}  
          onMouseLeave={handleMouseLeave}
        >
          {hoverText}
        </span>
      </h1>
      
      <div>
        <img
          className="peace"
          src={peace}
          style={{ float: "center", marginRight: "20px" }} 
        />
      </div>
    </section>
  );
}

export default Checkout;
