import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

            {/* Styles */}
            <style>{`
                /* GLASS NAV (same sticky behavior) */
                .glass-nav-neo {
                    backdrop-filter: blur(12px);
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                    box-shadow: 0 6px 25px rgba(0,0,0,0.35);
                }

                /* BRAND */
                .brand-neo {
                    letter-spacing: 1px;
                    font-size: 1.4rem;
                }

                .brand-neo span {
                    color: #0d6efd;
                }

                .brand-neo:hover {
                    text-shadow: 0 0 12px rgba(13,110,253,0.8);
                }

                /* NAV LINKS */
                .nav-neo .nav-link {
                    position: relative;
                    font-weight: 600;
                    text-transform: uppercase;
                    padding-bottom: 6px;
                    transition: color 0.3s ease;
                }

                .nav-neo .nav-link:hover {
                    color: #0d6efd !important;
                    text-shadow: 0 0 10px rgba(13,110,253,0.6);
                }

                /* ANIMATED UNDERLINE (replaces dot, same space) */
                .nav-neo .underline {
                    position: absolute;
                    left: 50%;
                    bottom: -2px;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #0d6efd, #5ea3ff);
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                    border-radius: 4px;
                }

                .nav-neo .nav-link:hover .underline {
                    width: 70%;
                }

                /* MOBILE SAFE */
                @media (max-width: 991px) {
                    .nav-neo .underline {
                        display: none;
                    }
                }
            `}</style>
        </nav>
    );
}

export default Header;
