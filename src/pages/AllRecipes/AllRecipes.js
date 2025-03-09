import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllRecipes.css";
import { getAllRecipes } from "../../utils/apiService";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes();
        console.log("Fetched Recipes:", data); // ✅ Debugging Log

        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          console.error("Invalid data format:", data);
          setRecipes([]);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="all-recipes-container">
      <h1 className="title">🍽️ Explore Delicious Recipes</h1>

      {loading ? (
        <div className="loader">Loading Recipes...</div>
      ) : recipes.length === 0 ? (
        <p className="no-recipes">No recipes found.</p>
      ) : (
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="recipe-card"
              onClick={() => navigate(`/recipe/${recipe._id}`)}
            >
              <img src={recipe.imageUrl} alt={recipe.title || recipe.name} className="recipe-img" />
              <div className="recipe-info">
                <h2>{recipe.title || recipe.name}</h2>  {/* ✅ Fix Here */}
                <p><b>⏳ Time:</b> {recipe.cookingTime} mins</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecipes;
