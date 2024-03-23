import React, {useState} from "react";
import { useGetProductsQuery } from "../redux/api";
import { Link } from "react-router-dom";
import "../Products.css";
//import SearchBar from '../components/SearchBar';

const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading Store Please Wait...</p>;

  if (error) return <p>Error Fetching Products: {error.message}</p>;
  

  return (
    <section>
    <h2>Travel Store</h2>
    <div className="products">
      {/* <SearchBar/> */}
      {data.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="product-link">
          <div className="product">
            <h3 className="product-name">{product.name}</h3>
            <img src={product.image} alt={product.title} width="200" height="200" />
            <p className="product-price">Price: ${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
    </section>
  );
};

export default Products;

