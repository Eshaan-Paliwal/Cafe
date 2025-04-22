import React from 'react';
import { NavLink } from 'react-router-dom';
import CartButton from './CartButton';
import SparklyText from './SparklyText';
import BouncingText from './BouncingText';
import { FaHome, FaUtensils, FaCalendarAlt, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header className="cafe-header">
      <div className="cafe-logo">
        <h1><SparklyText text="Cozy Corner Café" /></h1>
        <p className="tagline">
          <BouncingText text="Where every sip tells a story" />
        </p>
      </div>
      <nav className="cafe-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="nav-icon"><FaHome /></span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="nav-icon"><FaUtensils /></span>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservation" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="nav-icon"><FaCalendarAlt /></span>
              Reserve
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="nav-icon"><FaInfoCircle /></span>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="nav-icon"><FaEnvelope /></span>
              Contact
            </NavLink>
          </li>
        </ul>
        <CartButton />
      </nav>
    </header>
  );
}

export default Header;