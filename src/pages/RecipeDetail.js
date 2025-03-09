import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeById } from "../utils/apiService";

const RecipeDetail = () => {
  const { recipeId } = useParams(); // Get ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    console.log("Fetching Recipe ID:", recipeId); // ✅ Debugging Log

    const fetchRecipeDetails = async () => {
      try {
        const data = await getRecipeById(recipeId);
        console.log("Fetched Recipe Data:", data); // ✅ Debugging Log

        if (data && !data.message) {
          setRecipe(data);
        } else {
          console.error("Recipe Not Found:", data.message);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    if (recipeId) {
      fetchRecipeDetails();
    }
  }, [recipeId]);

  if (!recipe) {
    return <h1>Recipe Not Found</h1>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} style={{ width: "300px" }} />
      <p><b>Cooking Time:</b> {recipe.cookingTime} minutes</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Cooking Steps:</h3>
      <p>{recipe.cookingSteps}</p>
    </div>
  );
};

export default RecipeDetail;
