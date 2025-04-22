import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';

function Home() {
  // Slide data for the slider
  const sliderData = [
    {
      image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Welcome to Cozy Corner Café',
      description: 'Experience the perfect blend of comfort and taste',
      button: {
        text: 'View Our Menu',
        url: '/menu'
      }
    },
    {
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Artisan Coffee & Pastries',
      description: 'Freshly brewed coffee and baked goods made with love',
      button: {
        text: 'Our Story',
        url: '/about'
      }
    },
    {
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Reserve Your Table',
      description: 'Plan your perfect café experience with us',
      button: {
        text: 'Make Reservation',
        url: '/reservation'
      }
    }
  ];
  
  return (
    <div className="home-section">
      <Slider slides={sliderData} />
      
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