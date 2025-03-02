import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { getAllRecipes } from "../../utils/apiService"; // ✅ Use API function
import "./TrendingRecipes.css";

const TrendingRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingRecipes = async () => {
      try {
        const data = await getAllRecipes(); // ✅ Use API function
        if (Array.isArray(data)) {
          setRecipes(data.slice(0, 6)); // ✅ Show top 6 trending recipes
        } else {
          console.error("Invalid data format:", data);
          setError("Failed to load recipes.");
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError("Error fetching recipes.");
      } finally {
        setLoading(false);
      }
    };

    getTrendingRecipes();
  }, []);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="trending-recipes-container">
      <h2>🔥 Trending Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <Link key={recipe._id} to={`/recipe/${recipe._id}`} className="recipe-card-link"> 
            <div className="recipe-card">
              <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image" /> 
              <h3>{recipe.name}</h3>
              <p>👨‍🍳 {recipe.author}</p>
              <p>⏳ {recipe.timeToCook} mins</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingRecipes;
