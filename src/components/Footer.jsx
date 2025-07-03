import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "25px 20px",
        marginTop: "50px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* First Line: Navigation with emojis */}
      <div style={{ marginBottom: "10px", fontSize: "16px" }}>
        <Link
          to="/"
          style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}
        >
          🏠 Home
        </Link>
        <Link
          to="/about"
          style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}
        >
          👤 About
        </Link>
        <Link
          to="/courses"
          style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}
        >
          📚 Courses
        </Link>
        <Link
          to="/contact"
          style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}
        >
          📩 Contact
        </Link>
      </div>

      {/* Second Line: Email + Copyright */}
      <div style={{ fontSize: "14px" }}>
        📧 info@skillbridge.com &nbsp; | &nbsp; © 2025 SkillBridge. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
