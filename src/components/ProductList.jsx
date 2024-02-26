
import React from 'react';

//import proptypes
import PropTypes from 'prop-types';


import stonehenge from "../assets/stonehenge.jpg";

const ProductList = ({ products }) => {
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img className="stonehenge" src= {stonehenge} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button>Add to Bag</button>
                        <button>Remove from Bag</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

//props validation
ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })
    ).isRequired,
};

export default ProductList;