import React, { useState } from "react";
import "./DynamicIngredientFields.css";
import { FaPlus, FaTrash } from "react-icons/fa";

const DynamicIngredientFields = ({ onIngredientChange }) => {
  const [ingredients, setIngredients] = useState([""]);

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
    onIngredientChange(updatedIngredients);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredientField = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
    onIngredientChange(updatedIngredients);
  };

  return (
    <div className="dynamic-ingredient-fields">
      <h3>Ingredients</h3>
      {ingredients.map((ingredient, index) => (
        <div key={index} className="ingredient-row">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
            placeholder="Enter ingredient"
            className="input-field"
          />
          <button className="remove-btn" onClick={() => removeIngredientField(index)}>
            <FaTrash />
          </button>
        </div>
      ))}
      <button className="add-btn" onClick={addIngredientField}>
        <FaPlus /> Add Ingredient
      </button>
    </div>
  );
};

export default DynamicIngredientFields;
