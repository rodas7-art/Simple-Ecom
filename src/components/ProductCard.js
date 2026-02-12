import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button
          className={`add-to-cart-btn ${isAdding ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          {isAdding ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
