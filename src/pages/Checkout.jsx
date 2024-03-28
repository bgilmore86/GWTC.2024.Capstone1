import React, { useState } from 'react';
import peace from '../assets/peace.jpg';

function Checkout() {
  const [hoverText, setHoverText] = useState('Goodbye');

  const handleMouseEnter = () => {
    setHoverText('Arrivederci');
  };
  
  const handleMouseLeave = () => {
    setHoverText('Goodbye');
  };

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
