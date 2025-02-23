import React, { useState } from "react";
import "./CreateRecipe.css";
import ImageUpload from "./ImageUpload";
import IngredientFields from "./DynamicIngredientFields";
import LivePreview from "./LivePreview";
import EditDeleteRecipe from "./EditDeleteRecipe";

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    author: "",
    timeToCook: "",
    ingredients: [],
    image: "",
  });
  

  const handleInputChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (ingredients) => {
    setRecipe({ ...recipe, ingredients });
  };

  const handleImageUpload = (imageUrl) => {
    setRecipe({ ...recipe, image: imageUrl });
  };

  const handleUpdateRecipe = (updatedRecipe) => {
    setRecipe(updatedRecipe);
  };

  const handleDeleteRecipe = () => {
    setRecipe({
      name: "",
      author: "",
      timeToCook: "",
      ingredients: [],
      image: "",
    });
  };

  return (
    <div className="create-recipe-container">
      <h2>Create a New Recipe</h2>
      <div className="recipe-form">
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={recipe.author}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="timeToCook"
          placeholder="Cooking Time (mins)"
          value={recipe.timeToCook}
          onChange={handleInputChange}
          className="input-field"
        />
        <IngredientFields onIngredientChange={handleIngredientChange} />
        <ImageUpload onUpload={handleImageUpload} />
      </div>
      
      <LivePreview recipe={recipe} />
      
      <EditDeleteRecipe
        recipe={recipe}
        onUpdate={handleUpdateRecipe}
        onDelete={handleDeleteRecipe}
      />
    </div>
  );
};

export default CreateRecipe;
