import React from 'react';

const ProductCard = ({ product }) => {
  const { title, price, thumbnail, description } = product;

  return (
    <div className="product-card">
      <img
        src={thumbnail}
        alt={title}
        className="product-image"
      />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      {price > 100 ? <p className="premium">Premium Product</p> : <p className="budget">Budget Product</p>}
    </div>
  );
};

export default ProductCard;
