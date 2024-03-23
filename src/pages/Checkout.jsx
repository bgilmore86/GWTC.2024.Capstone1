import React from 'react';
import { useState } from 'react';

function Checkout() {
  const [hover, setHover] = useState(false);

  return (
    <section>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h3>Checkout Component</h3>
        <p>...where the customer will checkout</p>
      </div>
      <h1>{hover ? "Arrivederci!" : "GoodBye!"}</h1>
    </section>
  );
}

export default Checkout;