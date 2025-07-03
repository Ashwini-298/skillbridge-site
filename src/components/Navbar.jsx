import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo or Brand Name */}
      <div style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>
        SkillBridge
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/about" style={navLinkStyle}>
          About
        </Link>
        <Link to="/courses" style={navLinkStyle}>
          Courses
        </Link>
        <Link to="/contact" style={navLinkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  fontSize: "16px",
};

export default Navbar;
