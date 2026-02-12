import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">🛍️ ShopMart</h1>
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/cart"
            className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}
          >
            Cart <span className="cart-badge">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
