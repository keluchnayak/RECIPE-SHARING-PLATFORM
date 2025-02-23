import React from "react";
import { FaFire, FaSmile, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./TrendingRecipes.css";

const trendingRecipes = [
  {
    id: 1,
    title: "Paneer Butter Masala",
    image: "https://th.bing.com/th/id/OIP.XlUApAhMY1fc273pa_N5wwHaE7?w=272&h=181&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    reactions: { fire: 15, smile: 20, heart: 25 },
  },
  {
    id: 2,
    title: "Chicken Biryani",
    image: "https://th.bing.com/th?id=OSK.HEROEQrm4RW5u0TtnMe40xRmv86cQ0rDKuOWdy6vhXywvTU&w=384&h=228&c=13&rs=2&o=6&dpr=1.4&pid=SANGAM",
    reactions: { fire: 30, smile: 22, heart: 18 },
  },
  {
    id: 3,
    title: "Gulab Jamun",
    image: "https://www.bing.com/th?id=OIP.jHVOWwSFJmKm4WYjoOIS0QHaFk&w=146&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    reactions: { fire: 10, smile: 25, heart: 30 },
  },
  {
    id: 4,
    title: "Masala Dosa",
    image: "https://www.bing.com/th?id=OIP.bepcXnRrP_W5dTQEaCl00AHaE8&w=146&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    reactions: { fire: 22, smile: 18, heart: 28 },
  },
];

const TrendingRecipes = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <section className="trending-recipes">
      <h2>🔥 Trending Recipes</h2>
      <div className="recipe-grid">
        {trendingRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => handleCardClick(recipe.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={recipe.image} alt={recipe.title} className="recipe-img" />
            <div className="recipe-info">
              <h3>{recipe.title}</h3>
              <div className="reactions">
                <span>
                  <FaFire className="fire" /> {recipe.reactions.fire}
                </span>
                <span>
                  <FaSmile className="smile" /> {recipe.reactions.smile}
                </span>
                <span>
                  <FaHeart className="heart" /> {recipe.reactions.heart}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingRecipes;
