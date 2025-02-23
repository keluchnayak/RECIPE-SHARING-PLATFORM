import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileHeader from "../components/UserProfilePage/ProfileHeader";
import UserRecipes from "../components/UserProfilePage/UserRecipesGrid";
import SavedFavorites from "../components/UserProfilePage/SavedFavoriteRecipes";
import Footer from "../components/Footer";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const userData = {
        name: "Anita Mishra",
        bio: "Passionate about Indian recipes and creating mouth-watering recipes!",
        profilePicture: "https://i.pinimg.com/474x/c5/53/a4/c553a4c2b204b0c257cd04aee9d78492.jpg",
        followers: 1500,
        following: 80,
      };

      const saved = [
        { title: "Paneer Butter Masala", image: "//th.bing.com/th/id/OIP.XlUApAhMY1fc273pa_N5wwHaE7?w=272&h=181&c=7&r=0&o=5&dpr=1.4&pid=1.7" },
        { title: "Masala Dosa", image: "https://www.bing.com/th?id=OIP.bepcXnRrP_W5dTQEaCl00AHaE8&w=146&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" },
      ];

      const favorites = [
        { title: "Gulab Jamun", image: "https://www.bing.com/th?id=OIP.jHVOWwSFJmKm4WYjoOIS0QHaFk&w=146&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" },
        { title: "Rasgulla", image: "https://i.pinimg.com/474x/fb/e5/13/fbe5137e571e2a92473a74770d7a84b6.jpg" },
      ];

      const recipes = [
        { title: "Chole Bhature", image: "https://i.pinimg.com/474x/d6/60/25/d660255e0ac13e20bc3c674ee3d11ac4.jpg", likes: 150, comments: 20 },
        { title: "Aloo Paratha", image: "https://i.pinimg.com/474x/dd/3d/2c/dd3d2c88739e53ab83eeb68ecc117b3d.jpg", likes: 230, comments: 35 },
        { title: "Rajma Chawal", image: "https://i.pinimg.com/474x/4e/70/b9/4e70b9a62f5334ed8219d337b8aba65e.jpg", likes: 100, comments: 15 },
      ];

      setUser(userData);
      setSavedRecipes(saved);
      setFavoriteRecipes(favorites);
      setUserRecipes(recipes);
    };

    fetchData();
  }, []);

  if (!user) {
    return <div className="text-center mt-5">Loading profile...</div>;
  }

  return (

    <div className="container mt-5">
      <Navbar />
      <ProfileHeader user={user} />
      <SavedFavorites savedRecipes={savedRecipes} favoriteRecipes={favoriteRecipes} />
      <h2 className="mt-4">My Recipes</h2>
      <UserRecipes recipes={userRecipes} />
      <Footer />
    </div>
  );
};

export default UserProfile;
