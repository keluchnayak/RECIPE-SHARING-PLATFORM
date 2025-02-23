import React from "react";
import "./RelatedRecipes.css";
import { useNavigate } from "react-router-dom";

const RelatedRecipes = ({ related = [] }) => { 
  
  const navigate = useNavigate();
  function handleRecipeClick(id) {
    navigate(`/recipe/${id}`);
  }

  return (
    <div className="related-recipes">
      <h2>Related Recipes</h2>
      <div className="recipes-grid">
        {related?.map((recipe) => ( 
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => handleRecipeClick(recipe.id)}
          >
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.name} />
            </div>
            <div className="recipe-info">
              <h3>{recipe.name}</h3>
              <button className="view-btn">View Recipe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedRecipes;
