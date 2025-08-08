import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const { phone, email } = contact;
  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2>Let's Connect!</h2>
        <p className="contact-subtitle">Ready to build something amazing together? Drop me a line!</p>
      </div>
      
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <div className="contact-content">
            <h3>Give me a call</h3>
            <p className="contact-message">Let's discuss your next project over a quick chat</p>
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-link">{phone}</a>
          </div>
        </div>
        
        <div className="contact-card">
          <div className="contact-icon">✉️</div>
          <div className="contact-content">
            <h3>Send me an email</h3>
            <p className="contact-message">I'll get back to you within 24 hours, promise!</p>
            <a href={`mailto:${email}`} className="contact-link">{email}</a>
          </div>
        </div>
      </div>
      
      <div className="contact-footer">
        <p>🚀 Always excited to work on innovative projects and solve complex challenges!</p>
      </div>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact; 