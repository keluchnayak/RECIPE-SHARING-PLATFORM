import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Discover & Share Amazing Recipes</h1>
        <p className="hero-subtitle">
          Explore thousands of Indian recipes, save your favorites, and share with friends!
        </p>
        <div className="hero-buttons">
          <button className="hero-btn primary">Explore Recipes</button>
          <button className="hero-btn">Join Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
