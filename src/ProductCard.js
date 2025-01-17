import React from 'react';

const ProductCard = ({ product }) => {
  const { title, price, thumbnail, description } = product; 

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      width: '200px',
      textAlign: 'center',
    }}>
      <img
        src={thumbnail}
        alt={title}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>${price}</strong></p>
      {price > 100 ? <p>Premium Product</p> : <p>Budget Product</p>} {}
    </div>
  );
};

export default ProductCard;
