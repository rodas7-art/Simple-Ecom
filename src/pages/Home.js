import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  return (
    <main className="container">
      <h2 className="page-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
