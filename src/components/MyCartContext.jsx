import { createContext, useState } from "react";
import PropTypes from "prop-types";

//Create MyCartContext object
export const MyCartContext = createContext();

//Define MyCartProvider component
export const MyCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  // Render the MyCartContext.Provider component /pass context value as prop
  //Wrap App in MyCartProvider in main.jsx too?
  return (
    <MyCartContext.Provider value={contextValue}>
      {children}
    </MyCartContext.Provider>
  );
};

// Add propTypes to MyCartProvider
MyCartProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
