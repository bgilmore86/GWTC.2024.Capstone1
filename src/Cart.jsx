import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shirt from './assets/shirt.jpg';

const Cart = () => {
  const [cartData, setCartData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set initial state to true.?/

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/carts/3');
        const data = await response.json();
        setCartData(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!cartData || !isLoggedIn) {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <p>Please log in to view your cart.</p>
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <img src={shirt} style={{ width: '300px', height: '400px' }} alt="Plain Black T-Shirt" />
        <p>Plain Black T-Shirt</p>
        <p>$10.00</p>
        <p>Total Price: $10.00</p>
        <Link
          to={{
            pathname: '/checkout',
            state: {
              cartData: cartData,
            },
          }}
        >
          <button>Checkout</button>
        </Link>
      </div>
      <div>
        <h3>Products</h3>
        {cartData.products.map((product) => (
          <div key={product.productId}>
            <p>Product ID: {product.productId}</p>
            <p>Quantity: {product.quantity}</p>
            {console.log('where API CART will render')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
