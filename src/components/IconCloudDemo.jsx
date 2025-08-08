import React from 'react';
import PropTypes from 'prop-types';
import { Cloud } from 'react-icon-cloud';

const IconCloudDemo = ({ slugs }) => {
  const color = 'f2f2f2';
  const size = 28;

  return (
    <div className="icon-cloud-wrap">
      <Cloud
        options={{
          imageScale: 2,
          pinchZoom: true,
          dragControl: true,
          tooltip: 'native',
          maxSpeed: 0.08,
          minSpeed: 0.02,
          freezeActive: false,
          wheelZoom: false,
          // Make icons cluster closer and flow smoothly
          radiusX: 0.5,
          radiusY: 0.5,
          radiusZ: 0.5,
          zoom: 1.1,
          // Enhanced mouse interaction for flowing effect
          mouseInteraction: true,
          mouseSpeed: 0.1,
          mouseRadius: 150,
          mouseForce: 1.2,
          // Continuous rotation for flowing effect
          autoRotate: true,
          autoRotateSpeed: 0.5,
        }}
      >
        {slugs.map((slug) => (
          <a
            key={slug}
            href={`https://simpleicons.org/?q=${slug}`}
            target="_blank"
            rel="noreferrer"
            title={slug}
            style={{ 
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.4) rotateY(15deg)';
              e.currentTarget.style.zIndex = '10';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
              e.currentTarget.style.zIndex = '1';
            }}
          >
            <img
              height={size}
              width={size}
              alt={slug}
              src={`https://cdn.simpleicons.org/${slug}/${color}`}
              style={{
                filter: 'brightness(1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: '4px',
              }}
              onMouseEnter={(e) => {
                e.target.style.filter = 'brightness(1.4) drop-shadow(0 0 12px rgba(242, 242, 242, 0.8)) saturate(1.2)';
                e.target.style.transform = 'rotateX(10deg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.filter = 'brightness(1)';
                e.target.style.transform = 'rotateX(0deg)';
              }}
            />
          </a>
        ))}
      </Cloud>
    </div>
  );
};

IconCloudDemo.propTypes = {
  slugs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IconCloudDemo;
