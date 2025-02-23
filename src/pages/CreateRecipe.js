import React from "react";
import CreateRecipe from "../components/CreateRecipePage/CreateRecipe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateRecipePage = () => {
  return (
    <div className="create-recipe-page">
      <Navbar />
      <main className="create-recipe-content">
        <CreateRecipe />
      </main>
      <Footer />
    </div>
  );
};

export default CreateRecipePage;
