// ProductDetail.js
import React from "react";
import Cart from './Cart';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  const handleAddToCart = () => {
    
  };

  return (
    <div className="product-card">
      <div className="product-info">
        <h2>{productId.name}</h2>
        <p>{productId.description}</p>
        <p>Price: ${productId.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <div className="floating-card">
        <img src={productId.image} alt={productId.name} />
      </div>
      
      <Cart />
    </div>
  );
};

export default ProductDetail;
