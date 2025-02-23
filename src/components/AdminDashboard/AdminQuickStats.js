import React from "react";
import "./AdminQuickStats.css";
import { FaUser, FaUtensils, FaComments, FaFlag } from "react-icons/fa";

const AdminQuickStats = ({ stats }) => {
  return (
    <div className="admin-quick-stats container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="stats-card">
            <FaUser className="stats-icon" />
            <h3>{stats.totalUsers}</h3>
            <p>Total Users</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stats-card">
            <FaUtensils className="stats-icon" />
            <h3>{stats.totalRecipes}</h3>
            <p>Total Recipes</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stats-card">
            <FaComments className="stats-icon" />
            <h3>{stats.totalComments}</h3>
            <p>Comments</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stats-card">
            <FaFlag className="stats-icon" />
            <h3>{stats.reportedIssues}</h3>
            <p>Reported Issues</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminQuickStats;
