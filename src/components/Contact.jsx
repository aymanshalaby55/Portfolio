import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const { phone, email } = contact;

  const phoneDigits = (phone || '').match(/\d+/g)?.join('') || '';
  const whatsappUrl = phone && phone.includes('wa.me') ? phone : `https://wa.me/${phoneDigits}`;

  return (
    <div className="contact-grid">
      {/* WhatsApp */}
      <div className="contact-item">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="btn-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3.5A10.5 10.5 0 0 0 3.84 18.81L3 22l3.28-.86A10.5 10.5 0 1 0 20 3.5zm-8.28 3h.02c.33 0 .68.01 1 .07.29.05.68.22.78.54.2.6.61 2.06.66 2.21.11.25.02.56-.19.73-.3.24-.59.51-.85.82-.28.33-.06.6.11.86.4.6.87 1.15 1.44 1.61.56.45 1.26.88 1.98 1.07.2.05.46.04.62-.12.31-.32.66-.69.98-1.02.17-.18.4-.25.64-.17.34.11 2.11.98 2.15 1 .33.15.55.24.64.38.07.12.07.68-.16 1.33-.19.53-.91 1.02-1.49 1.06-.4.03-.8.03-1.2-.03-2.45-.36-4.51-1.56-6.08-3.53-1.19-1.46-2.05-3.17-2.33-5.03-.08-.53-.13-1.08-.06-1.62.09-.72.53-1.32 1.23-1.43.24-.04.49-.07.74-.06z"/></svg>
          </span>
          <div>
            <h3 style={{ margin: 0 }}>WhatsApp me</h3>
            <div className="muted" style={{ marginTop: 4 }}>{phoneDigits}</div>
          </div>
        </div>
        <div className="project-links">
          <a className="btn-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            <span className="btn-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3.5A10.5 10.5 0 0 0 3.84 18.81L3 22l3.28-.86A10.5 10.5 0 1 0 20 3.5zm-8.28 3h.02c.33 0 .68.01 1 .07.29.05.68.22.78.54.2.6.61 2.06.66 2.21.11.25.02.56-.19.73-.3.24-.59.51-.85.82-.28.33-.06.6.11.86.4.6.87 1.15 1.44 1.61.56.45 1.26.88 1.98 1.07.2.05.46.04.62-.12.31-.32.66-.69.98-1.02.17-.18.4-.25.64-.17.34.11 2.11.98 2.15 1 .33.15.55.24.64.38.07.12.07.68-.16 1.33-.19.53-.91 1.02-1.49 1.06-.4.03-.8.03-1.2-.03-2.45-.36-4.51-1.56-6.08-3.53-1.19-1.46-2.05-3.17-2.33-5.03-.08-.53-.13-1.08-.06-1.62.09-.72.53-1.32 1.23-1.43.24-.04.49-.07.74-.06z"/></svg>
            </span>
            Open WhatsApp
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="contact-item">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="btn-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </span>
          <div>
            <h3 style={{ margin: 0 }}>Email me</h3>
            <div className="muted" style={{ marginTop: 4 }}>{email.replace('mailto:', '')}</div>
          </div>
        </div>
        <div className="project-links">
          <a className="btn-link" href={`mailto:${email.replace('mailto:', '')}`}>
            <span className="btn-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2zM2 8.3V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.3l-9.45 5.9a2 2 0 0 1-2.1 0L2 8.3z"/></svg>
            </span>
            Write an email
          </a>
        </div>
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