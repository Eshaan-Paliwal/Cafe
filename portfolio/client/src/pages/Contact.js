import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <p className="contact-intro">Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
