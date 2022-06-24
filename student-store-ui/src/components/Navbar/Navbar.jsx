import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nv-content">
        <Logo />
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About Us
        </a>
        <a href="#contact-us" className="nav-link">
          Contact Us
        </a>
        <a href="#buy-now" className="nav-link">
          Buy Now
        </a>
      </div>
    </nav>
  );
}
