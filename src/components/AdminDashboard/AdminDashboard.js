import React from "react";
import "./AdminDashboard.css";
import { FaUsers, FaUtensils, FaFlag } from "react-icons/fa";

const AdminDashboard = ({ stats }) => {
  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h2>Total Users</h2>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="stat-card">
          <FaUtensils className="stat-icon" />
          <h2>Total Recipes</h2>
          <p>{stats.totalRecipes}</p>
        </div>
        <div className="stat-card">
          <FaFlag className="stat-icon" />
          <h2>Total Reports</h2>
          <p>{stats.totalReports}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
