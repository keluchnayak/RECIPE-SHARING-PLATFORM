import React from "react";
import "./CategorySection.css";
import { FaUtensils, FaLeaf, FaFish, FaBirthdayCake, FaFire } from "react-icons/fa"; 

const categories = [
  { name: "North Indian", icon: <FaUtensils />, type: "regional" },
  { name: "South Indian", icon: <FaUtensils />, type: "regional" },
  { name: "Gujarati", icon: <FaLeaf />, type: "regional" },
  { name: "Bengali", icon: <FaFish />, type: "regional" },
  { name: "Appetizers", icon: <FaUtensils />, type: "course" },
  { name: "Main Course", icon: <FaUtensils />, type: "course" },
  { name: "Desserts", icon: <FaBirthdayCake />, type: "course" },
  { name: "Vegetarian", icon: <FaLeaf />, type: "ingredient" },
  { name: "Non-Vegetarian", icon: <FaFish />, type: "ingredient" },
  { name: "Diwali Specials", icon: <FaFire />, type: "festival" },
  { name: "Holi Treats", icon: <FaUtensils />, type: "festival" },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2 className="category-title">Explore Categories</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className={`category-card ${category.type}`}>
            <div className="category-icon">{category.icon}</div>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
