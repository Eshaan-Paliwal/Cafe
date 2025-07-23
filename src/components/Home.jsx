import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoffee, FaLeaf, FaCrown, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

function Home() {
  const { addToCart } = useCart();
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
      image: '/duskfall-crew-wLfGhTKrbf4-unsplash.jpg',
      title: 'Welcome to Cozy Corner Café',
      description: 'Experience the perfect blend of comfort and taste',
      button: {
        text: 'View Our Menu',
        url: '/menu'
      }
    },
    {
      image: '/yosuke-ota-GUcabuY3q80-unsplash.jpg',
      title: 'Artisan Coffee & Pastries',
      description: 'Freshly brewed coffee and baked goods made with love',
      button: {
        text: 'Our Story',
        url: '/about'
      }
    },
    {
      image: '/evgeniya-pron-yRbkVqAHu0Q-unsplash.jpg',
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

  // Quiz section
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizResponses, setQuizResponses] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([
    {
      question: "What are you in the mood for?",
      options: [
        { text: "Coffee", value: "coffee" },
        { text: "Something Sweet", value: "sweet" },
        { text: "Something Savory", value: "savory" },
        { text: "I'm not sure", value: "anything" }
      ]
    },
    {
      question: "How hungry are you?",
      options: [
        { text: "Just a small snack", value: "snack" },
        { text: "Moderately hungry", value: "moderate" },
        { text: "Very hungry", value: "meal" },
        { text: "Just a drink", value: "drink" }
      ]
    },
    {
      question: "Do you prefer hot or cold items?",
      options: [
        { text: "Hot", value: "hot" },
        { text: "Cold", value: "cold" },
        { text: "Room temperature", value: "room_temp" },
        { text: "No preference", value: "any_temp" }
      ]
    }
  ]);
  const [recommendedMeal, setRecommendedMeal] = useState(null);

  // Product database for recommendations
  const products = [
    {
      id: 1,
      name: "House Blend",
      description: "Our signature medium roast coffee with notes of chocolate and caramel",
      price: "₹250",
      image: "/hanvin-cheong-XaaT7S3oYd4-unsplash.jpg",
      details: "Sourced from small farms in Ethiopia and Colombia, our House Blend is carefully roasted to bring out the natural sweetness and complexity of the beans.",
      tags: ["coffee", "drink", "hot", "anything", "any_temp"]
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Espresso with steamed milk and a thick layer of creamy foam",
      price: "₹320",
      image: "/j-torres-Huq29oTUOmI-unsplash.jpg",
      details: "Our cappuccino features a double shot of our signature espresso topped with velvety steamed milk and a thick layer of microfoam.",
      tags: ["coffee", "drink", "hot", "anything", "any_temp"]
    },
    {
      id: 3,
      name: "Mocha",
      description: "Espresso with rich chocolate and steamed milk, topped with whipped cream",
      price: "₹350",
      image: "/mustafa-fatemi-Iy63wBayBhQ-unsplash.jpg",
      details: "Indulge in our luxurious mocha, combining our bold espresso with premium dark chocolate, steamed milk, and topped with fresh whipped cream.",
      tags: ["coffee", "sweet", "drink", "hot", "anything", "any_temp"]
    },
    {
      id: 4,
      name: "Cold Brew",
      description: "Smooth, low-acidity coffee brewed with cold water for 12+ hours",
      price: "₹330",
      image: "/takafumi-yamashita-TvceFePJuaE-unsplash.jpg",
      details: "Our cold brew is steeped for a minimum of 12 hours in cold, filtered water for a refreshing finish.",
      tags: ["coffee", "drink", "cold", "anything", "any_temp"]
    },
    {
      id: 5,
      name: "Croissant",
      description: "Buttery, flaky pastry with a light, airy texture",
      price: "₹180",
      image: "/croissant.jpg",
      details: "Our croissants are made fresh daily using traditional French techniques and premium butter.",
      tags: ["sweet", "snack", "room_temp", "anything", "any_temp"]
    },
    {
      id: 6,
      name: "Chocolate Cake",
      description: "Rich, moist chocolate cake with smooth ganache frosting",
      price: "₹260",
      image: "/sam-moghadam-yxZSAjyToP4-unsplash.jpg",
      details: "Our chocolate cake is made with premium cocoa and topped with a silky smooth chocolate ganache.",
      tags: ["sweet", "moderate", "snack", "room_temp", "anything", "any_temp"]
    },
    {
      id: 7,
      name: "Hamburger",
      description: "Juicy beef patty with fresh vegetables and special sauce",
      price: "₹580",
      image: "/lia-den-z4sge-mh2gM-unsplash.jpg",
      details: "Our signature hamburger features a juicy beef patty, fresh lettuce, tomato, onion, and our special sauce.",
      tags: ["savory", "meal", "hot", "moderate", "anything", "any_temp"]
    },
    {
      id: 8,
      name: "Chocolate Cupcake",
      description: "Decadent chocolate cupcake with marshmallow frosting",
      price: "₹220",
      image: "/goodeats-yqr-MGskjWZDdhg-unsplash.jpg",
      details: "Our chocolate cupcakes are topped with fluffy marshmallow frosting and chocolate drizzle.",
      tags: ["sweet", "snack", "room_temp", "anything", "any_temp"]
    }
  ];

  const handleQuizAnswer = (value) => {
    // Save the response
    const newResponses = [...quizResponses, value];
    setQuizResponses(newResponses);
    
    // Move to next question or show result
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Find best match based on the responses
      setTimeout(() => {
        const bestMatch = findBestMatch(newResponses);
        setRecommendedMeal(bestMatch);
      }, 1000); // Add a slight delay to show loading effect
    }
  };

  const findBestMatch = (responses) => {
    // Simple scoring algorithm: products with more matching tags get higher scores
    let bestProduct = products[0];
    let highestScore = 0;
    
    console.log("Quiz responses:", responses);
    
    products.forEach(product => {
      let score = 0;
      responses.forEach(response => {
        if (product.tags.includes(response)) {
          score += 1;
        }
      });
      
      console.log(`Product: ${product.name}, Score: ${score}, Tags: ${product.tags.join(', ')}`);
      
      if (score > highestScore) {
        highestScore = score;
        bestProduct = product;
      }
    });
    
    console.log("Best match:", bestProduct.name, "with score:", highestScore);
    
    // Fallback if no good match (score 0)
    if (highestScore === 0) {
      // Default to a popular item
      bestProduct = products.find(p => p.id === 3) || products[0]; // Mocha or first product
      console.log("No good match found, defaulting to:", bestProduct.name);
    }
    
    return bestProduct;
  };

  const handleAddRecommended = (product) => {
    // Format the product to match the required format for addToCart
    const cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: 1
    };
    
    addToCart(cartProduct);
    setShowOrderAlert(true);
    setTimeout(() => {
      setShowOrderAlert(false);
    }, 8000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizResponses([]);
    setRecommendedMeal(null);
  };

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
            <div className="item-image">
              <img src="/j-torres-Huq29oTUOmI-unsplash.jpg" alt="Signature Latte" />
            </div>
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
            <div className="item-image">
              <img src="/carissa-gan-LdfLThHJB7c-unsplash.jpg" alt="Artisan Pastries" />
            </div>
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
            <div className="item-image">
              <img src="/shawn-rain-w2OR6nomP-E-unsplash.jpg" alt="Breakfast Special" />
            </div>
            <h4>Breakfast Special</h4>
            <p>A hearty start to your day, available until 11am</p>
          </motion.div>
        </div>
      </div>

      {/* Quiz Section */}
      <section className="quiz-section">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Find Your Perfect Meal
        </motion.h2>
        
        <div className="quiz-container">
          {!recommendedMeal ? (
            <motion.div 
              className="quiz-question-container"
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="question-text">{quizQuestions[currentQuestion].question}</h3>
              <div className="quiz-options">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    className="quiz-option-btn"
                    whileHover={{ scale: 1.03, boxShadow: '0 5px 15px rgba(187, 134, 252, 0.3)' }}
                    onClick={() => handleQuizAnswer(option.value)}
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="quiz-result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="recommendation-section">
                <h3>Your Perfect Match</h3>
                
                <div className="recommendation-card">
                  <div className="recommendation-image">
                    <img src={recommendedMeal.image} alt={recommendedMeal.name} />
                  </div>
                  <div className="recommendation-details">
                    <h4>{recommendedMeal.name}</h4>
                    <p>{recommendedMeal.description}</p>
                    <p className="recommendation-price">{recommendedMeal.price}</p>
                    <button 
                      className="add-recommended-btn"
                      onClick={() => handleAddRecommended(recommendedMeal)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              
              <button 
                className="restart-quiz-btn"
                onClick={resetQuiz}
              >
                Take Quiz Again
              </button>
            </motion.div>
          )}
        </div>
      </section>

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