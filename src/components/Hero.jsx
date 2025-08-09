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