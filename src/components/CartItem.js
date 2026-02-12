import React from 'react';
import { useCart } from '../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-image">{item.image}</div>
      <div className="cart-item-info">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">${item.price.toFixed(2)} each</div>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button
            className="quantity-btn"
            onClick={() => updateQuantity(item.id, -1)}
          >
            −
          </button>
          <span className="quantity-display">{item.quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => updateQuantity(item.id, 1)}
          >
            +
          </button>
        </div>
        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
