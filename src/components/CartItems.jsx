import React from "react";
import PropTypes from "prop-types";

function CartItems({ item, addToCart, removeFromCart, className }) {
  const { id, name, price, quantity } = item;

  return (
    <div className={className}>
      <p>
        {name} - ${price}
      </p>
      <p>Quantity: {quantity}</p>

      {quantity > 0 && <button onClick={() => addToCart(id)}>Add</button>}
      {quantity > 1 && <button onClick={() => removeFromCart(id)}>Remove</button>}
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
  className: PropTypes.string,
};

export default CartItems;