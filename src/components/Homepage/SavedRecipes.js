import React, { useEffect, useState } from "react";
import { getSavedRecipes } from "../../utils/apiService";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const data = await getSavedRecipes();
        console.log("Fetched Saved Recipes:", data); // Debugging log
        if (Array.isArray(data)) {
          setSavedRecipes(data);
        } else {
          setError("Invalid data format received");
        }
      } catch (err) {
        setError("Failed to fetch saved recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedRecipes();
  }, []);

  return (
    <div>
      <h2>Saved Recipes</h2>
      {loading ? (
        <p>Loading saved recipes...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : savedRecipes.length === 0 ? (
        <p>No saved recipes found.</p>
      ) : (
        <ul>
          {savedRecipes.map((recipe) => (
            <li key={recipe._id}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedRecipes;
