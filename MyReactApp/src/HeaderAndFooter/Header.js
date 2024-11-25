import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [isExpanded, setIsExpanded] = useState(false); // Manage navbar expanded state

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            MyPortfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar} // Toggle on click
            aria-controls="navbarNav"
            aria-expanded={isExpanded ? 'true' : 'false'} // Dynamically set aria-expanded
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Here, we always keep `collapse` class, and conditionally add `show` class */}
          <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Header;
