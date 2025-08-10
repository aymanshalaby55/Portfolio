import React from 'react';

const Hero = ({ name, title, tagline, links }) => {
  return (
    <div className="hero">
      <div className="hero-photo-wrap">
        <img src="/me.jpg" alt={name} className="hero-photo" />
      </div>
      <div className="hero-content">
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-title">{title}</h2>
        {tagline && (
          <p className="hero-tagline centered-quote">
            <strong className="quote-strong">{tagline.split(',')[0]}</strong>,{` `}
            <span className="quote-rest">{tagline.split(',').slice(1).join(',').trim()}</span>
          </p>
        )}

        <div className="hero-social-icons">
          <a
            className="icon-btn"
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z" />
            </svg>
          </a>
          <a
            className="icon-btn"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.11h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V24h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.66V24h-3.8V8.5z" />
            </svg>
          </a>
          <a
            className="icon-btn"
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 3.5A10.5 10.5 0 0 0 3.84 18.81L3 22l3.28-.86A10.5 10.5 0 1 0 20 3.5zm-8.28 3h.02c.33 0 .68.01 1 .07.29.05.68.22.78.54.2.6.61 2.06.66 2.21.11.25.02.56-.19.73-.3.24-.59.51-.85.82-.28.33-.06.6.11.86.4.6.87 1.15 1.44 1.61.56.45 1.26.88 1.98 1.07.2.05.46.04.62-.12.31-.32.66-.69.98-1.02.17-.18.4-.25.64-.17.34.11 2.11.98 2.15 1 .33.15.55.24.64.38.07.12.07.68-.16 1.33-.19.53-.91 1.02-1.49 1.06-.4.03-.8.03-1.2-.03-2.45-.36-4.51-1.56-6.08-3.53-1.19-1.46-2.05-3.17-2.33-5.03-.08-.53-.13-1.08-.06-1.62.09-.72.53-1.32 1.23-1.43.24-.04.49-.07.74-.06z"/>
            </svg>
          </a>
        </div>

        <a href="#intro" className="hero-down" aria-label="Scroll to intro">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero; 