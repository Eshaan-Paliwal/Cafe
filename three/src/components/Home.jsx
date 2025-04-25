import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoffee, FaLeaf, FaCrown, FaQuoteLeft, FaStar } from 'react-icons/fa';

function Home() {
  // State for order confirmation alert
  const [showOrderAlert, setShowOrderAlert] = useState(false);

  // Function to handle order confirmation
  const handleOrderNow = () => {
    setShowOrderAlert(true);
    setTimeout(() => {
      setShowOrderAlert(false);
    }, 8000); // Hide after 8 seconds
  };

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

  // Daily specials data
  const specialsData = [
    {
      title: "Caramel Macchiato",
      description: "Espresso with vanilla-flavored syrup, topped with caramel",
      icon: <FaCoffee />,
      price: "$4.50",
      color: "#e6b980"
    },
    {
      title: "Matcha Latte",
      description: "Premium ceremonial matcha with steamed milk",
      icon: <FaLeaf />,
      price: "$5.25",
      color: "#a8e6cf"
    },
    {
      title: "Royal Breakfast",
      description: "Eggs Benedict with smoked salmon and avocado",
      icon: <FaCrown />,
      price: "$12.99",
      color: "#ffaaa5"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The atmosphere here is magical! I come for the coffee but stay for the ambiance.",
      author: "Emma Thompson",
      stars: 5
    },
    {
      quote: "Best cappuccino in town! The latte art alone is worth the visit.",
      author: "Michael Rodriguez",
      stars: 5
    },
    {
      quote: "A perfect spot for remote work. Great WiFi, delicious treats, and friendly staff.",
      author: "Sarah Johnson",
      stars: 4
    }
  ];

  // State for animated counter
  const [counters, setCounters] = useState({
    beans: 0,
    customers: 0,
    recipes: 0
  });

  // Animation when component mounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounters({
        beans: 15,
        customers: 500,
        recipes: 32
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  // Parallax effect on scroll
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-section">
      {/* Order Confirmation Alert */}
      <AnimatePresence>
        {showOrderAlert && (
          <motion.div 
            className="order-alert"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="alert-content">
              <FaCoffee className="alert-icon" />
              <span>Your order has been confirmed! Thank you for choosing Cozy Corner Café.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Slider slides={sliderData} />
      
      {/* Daily Specials Section */}
      <section className="daily-specials">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Today's Specials
        </motion.h2>
        
        <div className="specials-container">
          {specialsData.map((special, index) => (
            <motion.div 
              key={index}
              className="special-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="special-icon" style={{ backgroundColor: special.color }}>
                {special.icon}
              </div>
              <h3>{special.title}</h3>
              <p>{special.description}</p>
              <div className="special-price">{special.price}</div>
              <button className="order-now-btn" onClick={handleOrderNow}>Order Now</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Counter Section with Animation */}
      <section className="cafe-stats">
        <div className="stats-container">
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="stat-icon">
              <FaCoffee />
            </div>
            <div className="stat-number">
              {counters.beans}+
            </div>
            <div className="stat-label">Coffee Bean Varieties</div>
          </motion.div>
          
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <div className="stat-number">
              {counters.customers}+
            </div>
            <div className="stat-label">Satisfied Customers</div>
          </motion.div>
          
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z" />
              </svg>
            </div>
            <div className="stat-number">
              {counters.recipes}+
            </div>
            <div className="stat-label">Unique Recipes</div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Effect Banner */}
      <section 
        className="parallax-banner"
        style={{ 
          backgroundPositionY: `${offsetY * 0.5}px`
        }}
      >
        <div className="parallax-content">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Experience Our Cafe Atmosphere
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Relax, connect, and enjoy life one cup at a time
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/reservation" className="cafe-button">Reserve Your Spot</Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          What Our Customers Say
        </motion.h2>
        
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 8px 25px rgba(187, 134, 252, 0.3)'
              }}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-text">{testimonial.quote}</p>
              <div className="testimonial-author">- {testimonial.author}</div>
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.stars ? "star-filled" : "star-empty"} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    
      <div className="featured-items">
        <h3>Featured Items</h3>
        <div className="items-grid">
          <motion.div 
            className="item-card"
            whileHover={{ 
              y: -10,
              boxShadow: '0 10px 25px rgba(187, 134, 252, 0.2)'
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="item-image placeholder"><FaCoffee /></div>
            <h4>Signature Latte</h4>
            <p>Our house specialty with a hint of vanilla and cinnamon</p>
          </motion.div>
          <motion.div 
            className="item-card"
            whileHover={{ 
              y: -10,
              boxShadow: '0 10px 25px rgba(187, 134, 252, 0.2)'
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="item-image placeholder"><svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z" />
            </svg></div>
            <h4>Artisan Pastries</h4>
            <p>Freshly baked daily with local ingredients</p>
          </motion.div>
          <motion.div 
            className="item-card"
            whileHover={{ 
              y: -10,
              boxShadow: '0 10px 25px rgba(187, 134, 252, 0.2)'
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="item-image placeholder"><svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z" />
            </svg></div>
            <h4>Breakfast Special</h4>
            <p>A hearty start to your day, available until 11am</p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to Visit Us?</h2>
        <p>Experience the Cozy Corner Café atmosphere today</p>
        <div className="cta-buttons">
          <Link to="/menu" className="cafe-button">View Menu</Link>
          <Link to="/reservation" className="cafe-button secondary">Make Reservation</Link>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;