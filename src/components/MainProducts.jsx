import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

function MainProducts({ products, onAdd }) {

  return (
    <div>
      <h2>Products</h2>
      <div className="row">
        {products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );

}

MainProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  onAdd: PropTypes.func.isRequired
};

export default MainProducts;