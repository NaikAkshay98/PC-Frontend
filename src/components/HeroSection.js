import React from 'react';
import "../assets/Guest.css"; 

const HeroSection = ({ slides }) => {
  return (
    <div className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === 0 ? 'slide active' : 'slide'}
        >
          <img src={slide.imageUrl} alt={slide.title} />
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
