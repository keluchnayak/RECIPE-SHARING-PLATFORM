import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaSearch, FaUser, FaPlus } from "react-icons/fa";
import "./Navbar.css";

const GlassmorphicNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Navbar expand="lg" className="glass-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          🍽️ SwadShare
        </Navbar.Brand>
        <Form className="search-bar">
          <Form.Control type="text" placeholder="Search Recipes..." />
          <Button variant="outline-light" className="search-btn">
            <FaSearch />
          </Button>
        </Form>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/create-recipe" className="nav-link">
              <FaPlus /> Create Recipe
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className="nav-link">
              <FaUser /> Profile
            </Nav.Link>

            <Button variant="outline-light" onClick={toggleDarkMode} className="dark-mode-btn">
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
            <Button as={Link} to="/login" className="login-btn">Login</Button>
            <Button as={Link} to="/signup" className="signup-btn">Signup</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlassmorphicNavbar;
