import React, { useEffect, useState } from "react";
import GlassmorphicNavbar from "../components/Navbar";
import HeroSection from "../components/Homepage/HeroSection";
import CategorySection from "../components/Homepage/CategorySection";
import TrendingRecipes from "../components/Homepage/TrendingRecipes";
import Footer from "../components/Footer";
import { getAllRecipes } from "../utils/apiService";
import SavedRecipes from "../components/Homepage/SavedRecipes";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await getAllRecipes();
        setRecipes(data);
      } catch (err) {
        setError("Failed to load recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  return (
    <>
      <GlassmorphicNavbar />
      <HeroSection />
      <CategorySection />

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>Loading recipes...</p>
      ) : error ? (
        <p style={{ textAlign: "center", color: "red", fontSize: "18px" }}>{error}</p>
      ) : (
        <div>
          <TrendingRecipes recipes={recipes} />
         <SavedRecipes/>
        </div>
      )}

      <Footer />
    </>
  );
};

export default HomePage;
