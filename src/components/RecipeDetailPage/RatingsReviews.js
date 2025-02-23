import React, { useState } from "react";
import "./RatingsReviews.css";
import { FaFire, FaSmile, FaThumbsDown, FaUserCircle } from "react-icons/fa";

const RatingsReviews = () => {
  const [reviews, setReviews] = useState([
    { user: "Foodie123", text: "Absolutely delicious! 😍", rating: "🔥" },
    { user: "ChefLover", text: "Tried this at home, amazing! 🤩", rating: "🤩" },
  ]);

  const [newReview, setNewReview] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const handleAddReview = () => {
    if (newReview.trim() && selectedEmoji) {
      setReviews([{ user: "You", text: newReview, rating: selectedEmoji }, ...reviews]);
      setNewReview("");
      setSelectedEmoji("");
    }
  };

  return (
    <div className="ratings-reviews">
      <h2>💬 Ratings & Reviews</h2>
      <div className="emoji-feedback">
        <button className={selectedEmoji === "🔥" ? "active" : ""} onClick={() => setSelectedEmoji("🔥")}>
          <FaFire /> Love it!
        </button>
        <button className={selectedEmoji === "🤩" ? "active" : ""} onClick={() => setSelectedEmoji("🤩")}>
          <FaSmile /> Amazing!
        </button>
        <button className={selectedEmoji === "👎" ? "active" : ""} onClick={() => setSelectedEmoji("👎")}>
          <FaThumbsDown /> Not Good
        </button>
      </div>
      <div className="review-input">
        <input
          type="text"
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={handleAddReview} disabled={!newReview.trim() || !selectedEmoji}>
          Submit
        </button>
      </div>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <FaUserCircle className="user-icon" />
            <div className="review-content">
              <p className="review-user">{review.user}</p>
              <p className="review-text">{review.text}</p>
            </div>
            <span className="emoji">{review.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsReviews;
