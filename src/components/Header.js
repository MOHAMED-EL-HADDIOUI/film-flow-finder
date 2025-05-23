import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import Logo from "../assets/img/logo/logo-catalog.png";

// Styles
import "../styles/Header.css";

const navigationItems = [
  { path: "/", label: "Home" },
  { path: "/catalog", label: "Catalog" },
  { path: "/news", label: "News" },
  { path: "/about", label: "About" },
  { path: "/shop", label: "Shop" },
  { path: "/contact", label: "Contact Us" },
  { path: "/unsplash", label: "Unsplash" },
];

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      className="header-navbar" 
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <img src={Logo} alt="Movie Catalog Logo" className="logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />
      
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          {navigationItems.map(({ path, label }) => (
            <Nav.Link
              key={path}
              as={NavLink}
              to={path}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={handleNavClick}
            >
              {label}
            </Nav.Link>
          ))}
        </Nav>

        <Nav className="auth-buttons">
          <Button 
            variant="danger" 
            as={Link} 
            to="/signin" 
            className="auth-button"
          >
            Sign In
          </Button>
          <Button 
            variant="danger" 
            as={Link} 
            to="/signup" 
            className="auth-button"
          >
            Sign Up
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header; 