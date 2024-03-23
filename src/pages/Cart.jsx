import React from "react";
import PropTypes from "prop-types";
import CartItems from "../components/CartItems";

const ShoppingCart = ({ cartItems, onIncreaseQuantity, onDecreaseQuantity }) => {
  let content;

  try {
    content = (
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map(item => (
            <CartItems
              key={item.id}
              {...item}
              onIncrease={() => onIncreaseQuantity(item.id)}
              onDecrease={() => onDecreaseQuantity(item.id)}
            />
          ))}
        </ul>
        <div>
          <span>Total: ${getTotalPrice().toFixed(2)}</span>
        </div>
      </div>
    );
  } catch (error) {
    content = <div>Oops, something went wrong!</div>;
  }

  return content;

  function getTotalPrice() {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
};

// Use PropTypes --validation
ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  )
};

export default ShoppingCart;


