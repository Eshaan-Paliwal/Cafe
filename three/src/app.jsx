import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import LoadingAnimation from './components/LoadingAnimation';
import PageTransition from './components/PageTransition';
import IncorrectDelivery from './components/IncorrectDelivery';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

// Import context
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

// AnimatePresence needs to be used outside of Routes for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/menu" element={
          <PageTransition>
            <Menu />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
        <Route path="/reservation" element={
          <PageTransition>
            <Reservation />
          </PageTransition>
        } />
        <Route path="/incorrect-delivery" element={
          <PageTransition>
            <ProtectedRoute>
              <IncorrectDelivery />
            </ProtectedRoute>
          </PageTransition>
        } />
        <Route path="/login" element={
          <PageTransition>
            <Login />
          </PageTransition>
        } />
        <Route path="/register" element={
          <PageTransition>
            <Register />
          </PageTransition>
        } />
        <Route path="/profile" element={
          <PageTransition>
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          </PageTransition>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading for 3 seconds for demo purposes
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation onLoadComplete={() => setIsLoading(false)} />
      ) : (
        <AuthProvider>
          <CartProvider>
            <Router>
              <div className="app-content visible">
                <div className="cafe-container">
                  <Header />
                  
                  <main className="cafe-main">
                    <AnimatedRoutes />
                  </main>
                  
                  <Cart />
                  <Footer />
                </div>
              </div>
            </Router>
          </CartProvider>
        </AuthProvider>
      )}
    </>
  );
}

export default App;