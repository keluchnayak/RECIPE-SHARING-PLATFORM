import React from "react";
import "./RecipeHero.css";
import { FaClock, FaHeart } from "react-icons/fa";

const RecipeHero = ({ recipe }) => {
  return (
    <div className="recipe-hero">
      <div className="hero-overlay"></div>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <div className="recipe-info">
        <h1>{recipe.name}</h1>
        <p className="author">By {recipe.author}</p>
        <div className="recipe-meta">
          <span className="time"><FaClock /> {recipe.timeToCook} mins</span>
          <button className="save-btn"><FaHeart /> Save to Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeHero;
