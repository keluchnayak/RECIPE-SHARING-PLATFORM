import React from "react";
import "./ProfileHeader.css";
import { FaUserFriends, FaUserPlus } from "react-icons/fa";

const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-header">
      <div className="profile-card">
        <img src={user.profilePicture} alt="Profile" className="profile-image" />
        <h2 className="user-name">{user.name}</h2>
        <p className="user-bio">{user.bio}</p>
        <div className="follow-stats">
          <div className="followers">
            <FaUserFriends /> {user.followers} Followers
          </div>
          <div className="following">
            <FaUserPlus /> {user.following} Following
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
