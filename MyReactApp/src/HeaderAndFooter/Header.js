import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../PortfolioStyle/Header.css';

function Header() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top glass-nav-neo">
            <div className="container-fluid px-4">

                {/* Brand */}
                <a className="navbar-brand fw-bold brand-neo" href="/">
                    Ajinkya<span>.dev</span>
                </a>

                {/* Toggler */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto gap-lg-4">
                        {[
                            'home',
                            'about',
                            'education',
                            'skills',
                            'projects',
                            'workExperience',
                            'contact'
                        ].map(item => (
                            <li className="nav-item nav-neo" key={item}>
                                <a
                                    className="nav-link"
                                    href={`#${item}`}
                                    onClick={() => setIsExpanded(false)}
                                >
                                    {item.replace(/([A-Z])/g, ' $1')}
                                    <span className="underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
