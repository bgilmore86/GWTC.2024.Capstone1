// src/components/ProductCard.jsx
import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from './prop-types';

const ProductCard = ({ product }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
