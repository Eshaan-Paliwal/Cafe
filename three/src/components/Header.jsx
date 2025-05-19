import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CartButton from './CartButton';
import SparklyText from './SparklyText';
import BouncingText from './BouncingText';
import { useAuth } from '../context/AuthContext';
import { FaHome, FaUtensils, FaCalendarAlt, FaInfoCircle, FaEnvelope, FaCamera, FaUser, FaSignOutAlt, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowDropdown(false);
    setIsMobileMenuOpen(false);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setShowDropdown(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="cafe-header">
      <div className="cafe-logo">
        <h1><SparklyText text="Cozy Corner Café" /></h1>
        <p className="tagline">
          <BouncingText text="Where every sip tells a story" />
        </p>
      </div>
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`cafe-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} ref={mobileMenuRef}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
              <span className="nav-icon"><FaHome /></span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
              <span className="nav-icon"><FaUtensils /></span>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservation" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
              <span className="nav-icon"><FaCalendarAlt /></span>
              Reserve
            </NavLink>
          </li>
          <li>
            <NavLink to="/incorrect-delivery" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
              <span className="nav-icon"><FaCamera /></span>
              Report Issue
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
              <span className="nav-icon"><FaInfoCircle /></span>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
              <span className="nav-icon"><FaEnvelope /></span>
              Contact
            </NavLink>
          </li>
          {user ? (
            <li className="profile-menu" ref={dropdownRef}>
              <button 
                className="profile-button"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {user.profileImage ? (
                  <img 
                    src={user.profileImage} 
                    alt="Profile" 
                    className="profile-thumbnail"
                  />
                ) : (
                  <div className="profile-initial">
                    {user.name?.charAt(0)?.toUpperCase() || '?'}
                  </div>
                )}
              </button>
              {showDropdown && (
                <div className="profile-dropdown">
                  <button onClick={handleProfileClick} className="dropdown-item">
                    <FaUser className="dropdown-icon" />
                    Profile
                  </button>
                  <button onClick={handleLogout} className="dropdown-item">
                    <FaSignOutAlt className="dropdown-icon" />
                    Sign Out
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li>
              <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
                <span className="nav-icon"><FaUser /></span>
                Sign In
              </NavLink>
            </li>
          )}
        </ul>
        <CartButton />
      </nav>
    </header>
  );
}

export default Header;