import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/recipes"; // Ensure this matches your backend

// ✅ Fetch All Recipes
export const getAllRecipes = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    console.log("Fetched Recipes:", response.data); // ✅ Debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

// ✅ Create a New Recipe
export const createRecipe = async (recipeData) => {
  try {
    const response = await axios.post(API_BASE_URL, recipeData);
    return response.data;
  } catch (error) {
    console.error("Error creating recipe:", error);
    throw error;
  }
};

// ✅ Fetch a single recipe by ID
export const getRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${recipeId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error.response?.data || error.message);
    return null;
  }
};

// ✅ Update a recipe
export const updateRecipe = async (recipeId, updatedData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${recipeId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating recipe:", error.response?.data || error.message);
    return null;
  }
};

// ✅ Delete a recipe
export const deleteRecipe = async (recipeId) => {
  try {
    await axios.delete(`${API_BASE_URL}/${recipeId}`);
    return true;
  } catch (error) {
    console.error("Error deleting recipe:", error.response?.data || error.message);
    return false;
  }
};

// ✅ Fetch saved recipes (New function added)
export const getSavedRecipes = async () => {
  try {
    const token = localStorage.getItem("token"); // Get user token for authentication
    const response = await axios.get(`${API_BASE_URL}/saved`, {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in headers
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching saved recipes:", error.response?.data || error.message);
    return [];
  }
};
