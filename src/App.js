import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
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
        {/* ✅ First Page: Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* ✅ Login & Signup (No restrictions) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* ✅ Other Pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
        <Route path="/create-recipe" element={<CreateRecipePage />} />
        <Route path="/profile" element={<UserProfilePage />} />



        {/* ✅ 404 Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
