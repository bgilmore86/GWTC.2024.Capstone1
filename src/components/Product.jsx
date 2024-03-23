import React, { useState, useEffect } from "react";
import ProductCard from './ProductCard';
import CardDeck from 'react-bootstrap/CardDeck';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(products);

  return (
    <div>
      <h1>Product List</h1>
      <CardDeck>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
        </CardDeck>
    </div>
  );
}

export default ProductList;
