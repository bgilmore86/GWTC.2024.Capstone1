import React from 'react'; 
import { useDispatch } from 'react-redux';
import { addToCart } from './MyCartContext';

import PropTypes from 'prop-types';

function AddToCart({ item }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item.id));
  };

  return <button onClick={handleAddToCart}>+ Cart</button>;
}

AddToCart.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    
}).isRequired,
};

export default AddToCart;
