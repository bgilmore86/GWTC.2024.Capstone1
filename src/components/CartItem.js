// CartItem.js
import React from "react";
import PropTypes from "prop-types";


function CartItems({ item, addToCart, removeFromCart }) {
  const { id, name, price, quantity } = item;

  return (
    <div>
      <p>
        {name} - ${price}
      </p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => addToCart(id)}>Add</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
}

CartItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItems;
