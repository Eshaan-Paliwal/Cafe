import React from 'react';

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Visit Us</h3>
          <p>123 Coffee Lane</p>
          <p>Brewville, CA 90210</p>
          <h3>Hours</h3>
          <p>Monday - Friday: 7am - 7pm</p>
          <p>Saturday - Sunday: 8am - 6pm</p>
          <h3>Get in Touch</h3>
          <p>Phone: (555) 123-4567</p>
          <p>Email: hello@cozycornercafe.com</p>
        </div>
        <form className="contact-form">
          <h3>Send Us a Message</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" rows="5"></textarea>
          </div>
          <button type="submit" className="cafe-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;