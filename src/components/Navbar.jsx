import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#111",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link style={linkStyle} to="/">
        Home
      </Link> 
      

      <Link style={linkStyle} to="/login">
        Login
      </Link>

      <Link style={linkStyle} to="/profile">
        Profile
      </Link>

      <Link style={linkStyle} to="/about">
        About
      </Link>

      <Link style={linkStyle} to="/contact">
        Contact
      </Link>

      <Link style={linkStyle} to="/orders">
        Orders
      </Link>

      <Link style={linkStyle} to="/products">
        Products
      </Link>

      <Link style={linkStyle} to="/logout">
        Logout
      </Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Navbar;