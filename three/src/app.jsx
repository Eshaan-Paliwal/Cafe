import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './app.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Reservation from './components/Reservation';

// Import context
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="cafe-container">
          <Header />
          
          <main className="cafe-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          
          <Cart />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;