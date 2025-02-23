import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateRecipePage from "./pages/CreateRecipe";
import UserProfilePage from "./pages/UserProfile";
import LoginPage from "./components/Auth/LoginForm";
import SignupPage from "./components/Auth/SignupForm"; 
import RecipeDetailPage from "./pages/RecipeDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
        <Route path="/create-recipe" element={<CreateRecipePage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
