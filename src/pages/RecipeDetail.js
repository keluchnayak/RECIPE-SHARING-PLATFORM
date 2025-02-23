import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeHero from "../components/RecipeDetailPage/RecipeHero";
import IngredientsSteps from "../components/RecipeDetailPage/IngredientsSteps";
import RatingsReviews from "../components/RecipeDetailPage/RatingsReviews";
import RelatedRecipes from "../components/RecipeDetailPage/RelatedRecipes";

const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [relatedRecipes, setRelatedRecipes] = useState([]);

  useEffect(() => {
    const fetchedRecipe = {
      id: recipeId,
      name: "Paneer butter masala",
      author: "Chef Anjali",
      timeToCook: 45,
      image: "https://i.pinimg.com/474x/09/e4/ac/09e4acfe3778136b196f0202b45f49d5.jpg",
      ingredients: ["2 cups chicken", "1 onion", "2 tomatoes", "Spices", "Salt"],
      steps: [
        "Chop all vegetables.",
        "Heat oil and add spices.",
        "Add chicken and cook thoroughly.",
        "Simmer with tomatoes and onions.",
        "Serve hot with rice.",
      ],
    };
    setRecipe(fetchedRecipe);

    const fetchedRelated = [
      {
        id: "2",
        name: "Chicken Biriyani",
        image: "https://i.pinimg.com/474x/74/95/a1/7495a1993373b08d693fd3f7ade76517.jpg",
      },
      {
        id: "3",
        name: "Paneer Tikka",
        image: "https://i.pinimg.com/474x/82/a1/ac/82a1ac28a498d56a9bea74191f659bab.jpg",
      },
      {
        id: "4",
        name: "Vegetable Biryani",
        image: "https://i.pinimg.com/474x/b6/0c/a5/b60ca58bc5c72d11a9679898d9deb006.jpg",
      },
    ];
    setRelatedRecipes(fetchedRelated);
  }, [recipeId]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-detail-page">
      <RecipeHero recipe={recipe} />
      <IngredientsSteps recipe={recipe} />
      <RatingsReviews />
      <RelatedRecipes related={relatedRecipes} />
    </div>
  );
};

export default RecipeDetailPage;
