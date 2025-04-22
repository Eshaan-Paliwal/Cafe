import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-section">
      <div className="hero-banner">
        <h2>Welcome to Cozy Corner Café</h2>
        <p>Experience the perfect blend of comfort and taste</p>
        <Link to="/menu" className="cafe-button">View Our Menu</Link>
      </div>
      
      <div className="featured-items">
        <h3>Featured Items</h3>
        <div className="items-grid">
          <div className="item-card">
            <div className="item-image placeholder"></div>
            <h4>Signature Latte</h4>
            <p>Our house specialty with a hint of vanilla and cinnamon</p>
          </div>
          <div className="item-card">
            <div className="item-image placeholder"></div>
            <h4>Artisan Pastries</h4>
            <p>Freshly baked daily with local ingredients</p>
          </div>
          <div className="item-card">
            <div className="item-image placeholder"></div>
            <h4>Breakfast Special</h4>
            <p>A hearty start to your day, available until 11am</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;