import React from 'react';
import Button from '../../ui/Button/Button';
import './ProductCard.css';

const ProductCard = ({ image, title, price, description, badge }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {badge && <span className="product-badge">{badge}</span>}
        <img src={image} alt={title} className="product-image" />
      </div>
      
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-title">{title}</h3>
          <span className="product-price">${price.toFixed(2)}</span>
        </div>
        
        <p className="product-description">{description}</p>
        
        <Button variant="outline" className="add-to-cart-btn">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
