import React from "react";
import "../css/Navbar.css";

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/reg" className="navbar-link">
              HOD
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              FACULTY
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
