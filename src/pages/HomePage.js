import React from "react";
import GlassmorphicNavbar from "../components/Navbar";
import HeroSection from "../components/Homepage/HeroSection";
import CategorySection from "../components/Homepage/CategorySection";
import TrendingRecipes from "../components/Homepage/TrendingRecipes";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <>
      <GlassmorphicNavbar />
      <HeroSection />
      <CategorySection />
      <TrendingRecipes />
      <Footer />
    </>
  );
};

export default HomePage;
