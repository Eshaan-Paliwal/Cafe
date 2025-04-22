import React from 'react';
import { NavLink } from 'react-router-dom';
import CartButton from './CartButton';

function Header() {
  return (
    <header className="cafe-header">
      <div className="cafe-logo">
        <h1>Cozy Corner Café</h1>
        <p className="tagline">Where every sip tells a story</p>
      </div>
      <nav className="cafe-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservation" className={({ isActive }) => isActive ? 'active' : ''}>
              Reserve
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
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