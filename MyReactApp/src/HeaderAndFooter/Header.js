import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const [isExpanded, setIsExpanded] = useState(false); // Manage navbar expanded state

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded); // Toggle the state
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="/">
                    MyPortfolio
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={isExpanded ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-uppercase fw-bold" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase fw-bold" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase fw-bold" href="#education">
                                Education
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase fw-bold" href="#skills">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase fw-bold" href="#projects">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase fw-bold" href="#workExperience">
                                Work Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase fw-bold" href="#contact">
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
