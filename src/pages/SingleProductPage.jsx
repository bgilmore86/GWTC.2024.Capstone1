import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../redux/store';
import { useGetCartQuery } from '../redux/api';
import '../SingleProduct.css';
import { Link } from 'react-router-dom';
//import {removeFromCartMutation} from '../redux/api';





export default function SingleProductPage() {

  const { productId } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { data: apiCartData, isLoading: cartLoading } = useGetCartQuery();
  console.log(apiCartData); // im adding this line to log apiCartData to t/s cart

  const apiCart = apiCartData?.items || [];

  useEffect(() => {

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } finally {
        setLoading(false);
      }
    };
    //fetch product
    fetchProduct();
},[productId]);

  const addToCart = () => {
    dispatch(cartSlice.actions.addToCart(product));
  }
//addtocart mutation api implementation
  //const removeFromCartMutation = async () => {
    //await removeFromCartMutation({id: product.id}).unwrap();
  //}

//display while loading single product page view
  if (loading || cartLoading) return <p>Loading...</p>;

  if (product) {
    const { 
        id, 
        title, 
        price, 
        category, 
        description, 
        image 
    } = product;

    const isInCart = apiCart.some(item => item.id === id);

    return (
    <section>
      <div className="products">
        <div>

          <h3>{title}</h3>
          <p>{description}</p>
            <img src={image} alt={product.title} width="333" height="333"/>
            <p>Price: ${price}</p>

            <p>Category: {category}</p>
        </div>
        </div>

    
        <button onClick={addToCart}>
          {isInCart ? 'In Cart' : 'Add to Cart'} 
        </button>

        {/* <button onClick={removeFromCartHandler}> Remove from Cart</button> */}

      <div>
        <Link to="/cart/1">
          <button>Cart</button> 
        </Link>
        </div>

        </section>
    )

  }

  return null;
}
