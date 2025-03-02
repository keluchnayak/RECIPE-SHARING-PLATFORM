import React from "react";
import "./IngredientsSteps.css";
import { FaCheckCircle } from "react-icons/fa";

const IngredientsSteps = ({ recipe }) => {
  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <div className="ingredients-steps">
      <div className="ingredients-card">
        <h2>🛒 Ingredients</h2>
        {recipe.ingredients?.length > 0 ? (
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <FaCheckCircle className="check-icon" /> {ingredient}
              </li>
            ))}
          </ul>
        ) : (
          <p>No ingredients listed.</p>
        )}
      </div>

      <div className="steps-card">
        <h2>👨‍🍳 Cooking Steps</h2>
        {recipe.steps?.length > 0 ? (
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>
                <span className="step-number">Step {index + 1}</span> {step}
              </li>
            ))}
          </ol>
        ) : (
          <p>No steps available.</p>
        )}
      </div>
    </div>
  );
};

export default IngredientsSteps;
