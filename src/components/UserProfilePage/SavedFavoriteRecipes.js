import React, { useState } from "react";
import "./SavedFavoriteRecipes.css";
import { FaTrashAlt, FaEye } from "react-icons/fa";

const SavedFavoriteRecipes = ({ savedRecipes, favoriteRecipes }) => {
  const [activeTab, setActiveTab] = useState("saved");

  const recipesToShow = activeTab === "saved" ? savedRecipes : favoriteRecipes;

  return (
    <div className="saved-favorite-section">
      <div className="tabs">
        <button
          className={activeTab === "saved" ? "active" : ""}
          onClick={() => setActiveTab("saved")}
        >
          Saved Recipes
        </button>
        <button
          className={activeTab === "favorites" ? "active" : ""}
          onClick={() => setActiveTab("favorites")}
        >
          Favorite Recipes
        </button>
      </div>

      <div className="recipes-grid">
        {recipesToShow.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-info">
              <h3 className="recipe-title">{recipe.title}</h3>
              <div className="recipe-actions">
                <button className="view-btn"><FaEye /> View</button>
                <button className="remove-btn"><FaTrashAlt /> Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedFavoriteRecipes;
