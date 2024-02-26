import React from 'react';

import PropTypes from 'prop-types';


    const Cart= ({cartItems}) => {
        return (
            <div className="cart-items">
                <h1>Cart Component</h1>
                {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
                <img src={item.image} />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
            </div>
        ))}
        <p>Total: ${calculateTotal(cartItems)}</p>
        <button>Checkout Now</button>

    </div>
        );
                };

        //fn calculate total
        const calculateTotal = (cartItems) => {
            return cartItems.reduce((total, item) => 
            total + item.price, 0);
        };
Cart.propTypes ={
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Cart;