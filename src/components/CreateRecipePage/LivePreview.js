import React from "react";
import "./LivePreview.css";
import { FaClock, FaUser } from "react-icons/fa";

const LivePreview = ({ recipe = {} }) => {
  return (
    <div className="live-preview-container">
      <h3 className="preview-title">Recipe Preview</h3>
      <div className="preview-card">
        {recipe.image ? (
          <img src={recipe.image} alt="Recipe Preview" className="preview-image" />
        ) : (
          <div className="placeholder">Image Preview</div>
        )}

        <div className="preview-content">
          <h2 className="recipe-name">{recipe.name || "Recipe Name"}</h2>
          <p className="author">
            <FaUser className="icon" /> {recipe.author || "Author Name"}
          </p>
          <p className="cook-time">
            <FaClock className="icon" /> {recipe.timeToCook || "Cooking Time"} mins
          </p>
          <div className="ingredients-preview">
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients && recipe.ingredients.length > 0 ? (
                recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>No ingredients added</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
