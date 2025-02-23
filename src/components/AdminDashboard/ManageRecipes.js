import React, { useState, useEffect } from "react";
import "./ManageRecipes.css";
import { FaCheckCircle, FaTimesCircle, FaTrash, FaSearch } from "react-icons/fa";

const ManageRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setRecipes([
      { id: 1, title: "Butter Chicken", author: "Chef Sanjeev", status: "Pending" },
      { id: 2, title: "Paneer Tikka", author: "Chef Vikas", status: "Approved" },
      { id: 3, title: "Gulab Jamun", author: "Chef Ranveer", status: "Rejected" },
    ]);
  }, []);

  const handleApprove = (id) => {
    setRecipes(recipes.map((recipe) => (recipe.id === id ? { ...recipe, status: "Approved" } : recipe)));
  };

  const handleReject = (id) => {
    setRecipes(recipes.map((recipe) => (recipe.id === id ? { ...recipe, status: "Rejected" } : recipe)));
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="manage-recipes-container">
      <h1>Manage Recipes</h1>
      <div className="search-bar">
        <FaSearch />
        <input
          type="text"
          placeholder="Search recipes by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>Author: {recipe.author}</p>
            <p>Status: <span className={`status ${recipe.status.toLowerCase()}`}>{recipe.status}</span></p>
            <div className="action-buttons">
              <button onClick={() => handleApprove(recipe.id)} className="approve-btn">
                <FaCheckCircle /> Approve
              </button>
              <button onClick={() => handleReject(recipe.id)} className="reject-btn">
                <FaTimesCircle /> Reject
              </button>
              <button onClick={() => handleDelete(recipe.id)} className="delete-btn">
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRecipes;
