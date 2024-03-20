import React from "react";
import photosData from "../data/data";
import { useParams } from "react-router-dom";




const ProductDetails = () => {

  const { productId } = useParams();
  const thisProduct = photosData.find((product) => product.id === productId);
  return (
    <div>
    <h1>{thisProduct.name}</h1>
    <h1>{thisProduct.price}</h1>
    <h1>{thisProduct.description}</h1>
    <h1>{thisProduct.category}</h1>
    <h1>{thisProduct.image}</h1>
      <button onClick={()=>{window
      .location.href = "/cart"}}>Add to Cart</button>
    </div>
    );
}
export default ProductDetails;