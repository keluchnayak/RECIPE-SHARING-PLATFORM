import React, { useState } from "react";
import "./ImageUpload.css";
import { FaUpload, FaTimes } from "react-icons/fa";

const ImageUpload = ({ image, setImage }) => {
  const [preview, setPreview] = useState(image || "");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setPreview("");
    setImage("");
  };

  return (
    <div className="image-upload-container">
      <h3>Upload Recipe Image</h3>
      <div className="upload-box">
        {preview ? (
          <div className="image-preview">
            <img src={preview} alt="Recipe Preview" />
            <button className="remove-btn" onClick={removeImage}>
              <FaTimes /> Remove
            </button>
          </div>
        ) : (
          <label className="upload-label">
            <FaUpload className="upload-icon" />
            <p>Click to Upload or Drag & Drop</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
