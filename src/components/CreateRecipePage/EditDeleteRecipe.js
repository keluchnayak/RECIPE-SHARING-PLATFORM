import React, { useState } from "react";
import "./EditDeleteRecipe.css";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

const EditDeleteRecipe = ({ recipe = {}, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    onUpdate(editedRecipe);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete(recipe?.id);
  };

  const handleChange = (e) => {
    setEditedRecipe({ ...editedRecipe, [e.target.name]: e.target.value });
  };

  if (!recipe || !recipe.name) {
    return <p>Loading recipe data...</p>;
  }

  return (
    <div className="edit-delete-container">
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            name="name"
            value={editedRecipe.name || ""}
            onChange={handleChange}
            placeholder="Recipe Name"
            className="edit-input"
          />
          <input
            type="text"
            name="author"
            value={editedRecipe.author || ""}
            onChange={handleChange}
            placeholder="Author Name"
            className="edit-input"
          />
          <input
            type="text"
            name="timeToCook"
            value={editedRecipe.timeToCook || ""}
            onChange={handleChange}
            placeholder="Cooking Time"
            className="edit-input"
          />
          <button className="save-btn" onClick={handleSaveClick}>
            <FaSave /> Save
          </button>
        </div>
      ) : (
        <div className="recipe-info">
          <h3>{recipe.name}</h3>
          <p>By {recipe.author}</p>
          <p>Cooking Time: {recipe.timeToCook} mins</p>
          <div className="button-group">
            <button className="edit-btn" onClick={handleEditClick}>
              <FaEdit /> Edit
            </button>
            <button className="delete-btn" onClick={handleDeleteClick}>
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditDeleteRecipe;
