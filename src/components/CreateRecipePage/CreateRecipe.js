import React, { useState } from "react";
import "./CreateRecipe.css";
import IngredientFields from "./DynamicIngredientFields";
import { createRecipe } from "../../utils/apiService";

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    author: "",
    timeToCook: "",
    ingredients: [],
    imageUrl: "", // Changed from "image" to "imageUrl"
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleInputChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Handle Ingredient Change
  const handleIngredientChange = (ingredients) => {
    setRecipe({ ...recipe, ingredients });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (!recipe.name.trim()) newErrors.name = "Recipe name is required";
    if (!recipe.author.trim()) newErrors.author = "Author name is required";
    if (!recipe.timeToCook.trim()) {
      newErrors.timeToCook = "Cooking time is required";
    } else if (isNaN(recipe.timeToCook) || Number(recipe.timeToCook) <= 0) {
      newErrors.timeToCook = "Enter a valid cooking time (in minutes)";
    }
    if (recipe.ingredients.length === 0 || recipe.ingredients.some(ing => !ing.trim())) {
      newErrors.ingredients = "At least one valid ingredient is required";
    }
    if (!recipe.imageUrl.trim()) newErrors.imageUrl = "Recipe image URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        const response = await createRecipe(recipe);
        alert("Recipe Submitted Successfully!");
        console.log("Recipe Saved:", response);

        setRecipe({ name: "", author: "", timeToCook: "", ingredients: [], imageUrl: "" });
        setErrors({});
      } catch (error) {
        alert("Error submitting recipe. Please try again.");
        console.error("Submission Error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="create-recipe-container">
      <h2>Create a New Recipe</h2>
      <form className="recipe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={handleInputChange}
          className="input-field"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={recipe.author}
          onChange={handleInputChange}
          className="input-field"
        />
        {errors.author && <p className="error">{errors.author}</p>}

        <input
          type="text"
          name="timeToCook"
          placeholder="Cooking Time (mins)"
          value={recipe.timeToCook}
          onChange={handleInputChange}
          className="input-field"
        />
        {errors.timeToCook && <p className="error">{errors.timeToCook}</p>}

        {/* Ingredient Fields */}
        <IngredientFields onIngredientChange={handleIngredientChange} />
        {errors.ingredients && <p className="error">{errors.ingredients}</p>}

        {/* Image URL Input Field */}
        <input
          type="text"
          name="imageUrl"
          placeholder="Paste Recipe Image URL"
          value={recipe.imageUrl}
          onChange={handleInputChange}
          className="input-field"
        />
        {errors.imageUrl && <p className="error">{errors.imageUrl}</p>}

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit Recipe"}
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
