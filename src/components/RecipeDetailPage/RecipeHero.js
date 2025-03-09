import React from "react";
import "./RecipeHero.css";
import { FaClock, FaHeart } from "react-icons/fa";

const RecipeHero = ({ recipe }) => {
  if (!recipe) return <div>Loading recipe...</div>;

  return (
    <div className="recipe-hero">
      <div className="hero-overlay"></div>
      <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
      <div className="recipe-info">
        <h1>{recipe.title}</h1>
        <p className="author">By {recipe.author || "Unknown"}</p>
        <div className="recipe-meta">
          <span className="time">
            <FaClock /> {recipe.cookingTime} mins
          </span>
          <button className="save-btn">
            <FaHeart /> Save to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeHero;
