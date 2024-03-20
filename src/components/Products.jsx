import React, { useState } from 'react';
import { useGetProductsQuery } from '../redux/api';

// Component to display the products
const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // Add the product to the cart
    setCart((prevCart) => [...prevCart, product]);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="200" height="200" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>{product.category}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <div>
        <h4>Shopping Cart</h4>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
