import React from 'react';
import ContactForm from '../components/ContactForm';
import CopyEmailButton from '../components/CopyEmailButton';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Let's Work Together</h1>
          <p className="hero-subtitle">Have a project in mind? Let's bring your ideas to life.</p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>I'm always interested in hearing about new projects and opportunities.</p>
            
            <div className="contact-methods">
              <div className="method-card">
                <div className="method-icon">✉️</div>
                <h3>Email</h3>
                <p>eshaanpal08@gmail.com</p>
                <CopyEmailButton />
              </div>

              <div className="method-card">
                <div className="method-icon">📱</div>
                <h3>Phone</h3>
                <p>+91 6387932214</p>
                <a href="tel:+916387932214" className="call-btn">Call Now</a>
              </div>

              <div className="method-card">
                <div className="method-icon">📍</div>
                <h3>Location</h3>
                <p>Bhopal, India</p>
              </div>
            </div>

            <div className="social-contacts">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://github.com/Eshaan-Paliwal" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/EshaanPaliwal" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
