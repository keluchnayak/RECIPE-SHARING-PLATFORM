import React from "react";
import "./IngredientsSteps.css";
import { FaCheckCircle } from "react-icons/fa";

const IngredientsSteps = ({ recipe }) => {
  return (
    <div className="ingredients-steps">
      <div className="ingredients-card">
        <h2>🛒 Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              <FaCheckCircle className="check-icon" /> {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="steps-card">
        <h2>👨‍🍳 Cooking Steps</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>
              <span className="step-number">Step {index + 1}</span> {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default IngredientsSteps;
