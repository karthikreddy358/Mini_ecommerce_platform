import React from 'react';
import Button from '../../ui/Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <span className="hero-subtitle">ENVIRONMENTALLY CONSCIOUS</span>
            <h1 className="hero-title">
              Shop Smart.<br />
              <span className="text-highlight">Shop Green.</span>
            </h1>
            <p className="hero-description">
              Discover our curated collection of eco-friendly products designed for a sustainable lifestyle. Join the green revolution today and make an impact with every purchase.
            </p>
            <div className="hero-actions">
              <Button variant="primary" className="hero-btn">Shop Collection</Button>
              <Button variant="outline" className="hero-btn">Learn More</Button>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <img 
              src="/bamboo_hero.png" 
              alt="Eco-friendly bathroom products with bamboo toothbrush and wooden cups" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
