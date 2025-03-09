import React, { useState } from "react";
import axios from "axios";
import "./CreateRecipe.css"; // Glassmorphism Styles

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [cookingTime, setCookingTime] = useState("");
  const [cookingSteps, setCookingSteps] = useState(""); // New field
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Add or Remove Ingredient Fields
  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredientField = (index) => {
    if (ingredients.length > 1) {
      const updatedIngredients = ingredients.filter((_, i) => i !== index);
      setIngredients(updatedIngredients);
    }
  };

  // ✅ Submit Recipe
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !imageUrl || !cookingTime || !cookingSteps || ingredients.some((i) => i.trim() === "")) {
      setError("All fields are required.");
      return;
    }
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/recipes", {
        title,
        imageUrl,
        ingredients,
        cookingTime,
        cookingSteps,
      });

      if (response.status === 201) {
        setSuccess("Recipe added successfully!");
        setTitle("");
        setImageUrl("");
        setIngredients([""]);
        setCookingTime("");
        setCookingSteps("");
      }
    } catch (err) {
      setError("Failed to add recipe.");
    }
  };

  return (
    <div className="create-recipe-container">
      <h1>Create a New Recipe</h1>
      {error && <p className="error-msg">{error}</p>}
      {success && <p className="success-msg">{success}</p>}
      <form onSubmit={handleSubmit} className="recipe-form">
        <label>Recipe Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter recipe title" />

        <label>Image URL:</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Paste image URL" />

        <label>Ingredients:</label>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-field">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              placeholder={`Ingredient ${index + 1}`}
            />
            <button type="button" onClick={() => removeIngredientField(index)} className="remove-btn">✖</button>
          </div>
        ))}
        <button type="button" onClick={addIngredientField} className="add-btn">+ Add Ingredient</button>

        <label>Cooking Time (minutes):</label>
        <input type="number" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} placeholder="Enter time" />

        <label>Cooking Steps:</label>
        <textarea
          value={cookingSteps}
          onChange={(e) => setCookingSteps(e.target.value)}
          placeholder="Write step-by-step instructions..."
          rows="5"
        />

        <button type="submit" className="submit-btn">Submit Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
