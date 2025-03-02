import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeHero from "../components/RecipeDetailPage/RecipeHero";
import IngredientsSteps from "../components/RecipeDetailPage/IngredientsSteps";
import RatingsReviews from "../components/RecipeDetailPage/RatingsReviews";
import RelatedRecipes from "../components/RecipeDetailPage/RelatedRecipes";

const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/recipes/${recipeId}`);
        if (response.data) {
          setRecipe(response.data);
        } else {
          console.error("Recipe data is missing.");
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  if (loading) return <div>Loading...</div>;
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="recipe-detail-page">
      <RecipeHero recipe={recipe} />
      <IngredientsSteps recipe={recipe} />
      <RatingsReviews recipeId={recipeId} />
      <RelatedRecipes related={recipe.relatedRecipes || []} />
    </div>
  );
};

export default RecipeDetailPage;
