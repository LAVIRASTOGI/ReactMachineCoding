import React from "react";
import DarkComponent from "./DarkComponent";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navContainer">
      <nav className="navBarData">
        <ul>
          <li>
            <a href="#home" className="active">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
      <DarkComponent></DarkComponent>
    </div>
  );
}

export default Navbar;
