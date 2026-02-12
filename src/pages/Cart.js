import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, getTotal } = useCart();
  const total = getTotal();

  if (cart.length === 0) {
    return (
      <main className="container">
        <h2 className="page-title">Your Cart</h2>
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <div className="empty-cart-message">Your cart is empty.</div>
          <Link to="/" className="shop-now-btn">
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <h2 className="page-title">Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <div className="total-label">Total Amount:</div>
        <div className="total-amount">${total.toFixed(2)}</div>
      </div>
    </main>
  );
};

export default Cart;
