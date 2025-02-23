import React, { useState, useEffect } from "react";
import "./AdminDashboardPage.css";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";
import AdminQuickStats from "../../components/AdminDashboard/AdminQuickStats";
import ManageRecipes from "../../components/AdminDashboard/ManageRecipes";
import ManageUsers from "../../components/AdminDashboard/ManageUsers";
import { Container, Row, Col } from "react-bootstrap";

const AdminDashboardPage = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRecipes: 0,
    totalReports: 0,
    totalComments: 0,
    reportedIssues: 0,
  });

  useEffect(() => {
    setStats({
      totalUsers: 500,
      totalRecipes: 1200,
      totalReports: 45,
      totalComments: 3000,
      reportedIssues: 30,
    });
  }, []);

  return (
    <div className="admin-dashboard-page">
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <AdminDashboard stats={stats} />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <AdminQuickStats stats={stats} />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6}>
            <ManageRecipes />
          </Col>
          <Col md={6}>
            <ManageUsers />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboardPage;
