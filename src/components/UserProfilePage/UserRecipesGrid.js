import React from "react";
import "./UserRecipesGrid.css";
import { FaHeart, FaComment } from "react-icons/fa";

const UserRecipesGrid = ({ recipes }) => {
  return (
    <div className="recipes-grid">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <div className="recipe-info">
            <h3 className="recipe-title">{recipe.title}</h3>
            <div className="recipe-stats">
              <span><FaHeart /> {recipe.likes}</span>
              <span><FaComment /> {recipe.comments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserRecipesGrid;
