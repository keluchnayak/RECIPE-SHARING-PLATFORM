import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Ensure this matches your backend

// ✅ Fetch all recipes
export const getAllRecipes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error.response?.data || error.message);
    return [];
  }
};

// ✅ Fetch a single recipe by ID
export const getRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes/${recipeId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error.response?.data || error.message);
    return null;
  }
};

// ✅ Create a new recipe
export const createRecipe = async (recipeData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/recipes`, recipeData);
    return response.data;
  } catch (error) {
    console.error("Error creating recipe:", error.response?.data || error.message);
    return null;
  }
};

// ✅ Edit an existing recipe
export const updateRecipe = async (recipeId, updatedData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/recipes/${recipeId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating recipe:", error.response?.data || error.message);
    return null;
  }
};

// ✅ Delete a recipe
export const deleteRecipe = async (recipeId) => {
  try {
    await axios.delete(`${API_BASE_URL}/recipes/${recipeId}`);
    return true;
  } catch (error) {
    console.error("Error deleting recipe:", error.response?.data || error.message);
    return false;
  }
};

// ✅ Fetch saved recipes
export const getSavedRecipes = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/recipes/saved-recipes");
    if (!response.ok) throw new Error("Failed to fetch saved recipes");
    const data = await response.json();
    console.log("Saved Recipes API Response:", data); // Debugging log
    return data;
  } catch (error) {
    console.error("Error fetching saved recipes:", error);
    return [];
  }
};


// ✅ Save a recipe (Mark as saved)
export const saveRecipe = async (recipeId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/save-recipe/${recipeId}`); // Fixed endpoint
    return response.data;
  } catch (error) {
    console.error("Error saving recipe:", error.response?.data || error.message);
    return null;
  }
};

// ✅ Fetch trending recipes
export const getTrendingRecipes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes/trending`);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending recipes:", error.response?.data || error.message);
    return [];
  }
};
