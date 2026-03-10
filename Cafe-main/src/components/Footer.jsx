import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="cafe-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Cozy Corner Café</h3>
          <p>Where every sip tells a story</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <span className="icon"><FaFacebook /></span>
            <span className="icon"><FaInstagram /></span>
            <span className="icon"><FaTwitter /></span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} Cozy Corner Café. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;