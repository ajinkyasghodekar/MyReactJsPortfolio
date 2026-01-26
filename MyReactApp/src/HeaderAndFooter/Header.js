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
                /* GLASS NAV (sticky, modern & attractive) */
                .glass-nav-neo {
                    background: rgba(255, 255, 255, 0.05); /* very subtle frosted glass */
                    backdrop-filter: blur(20px) saturate(200%); /* blur + vibrant look */
                    -webkit-backdrop-filter: blur(20px) saturate(200%);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
                    background-clip: padding-box;
                    transition: all 0.4s ease;
                }

                /* Glass nav hover / scrolled effect */
                .glass-nav-neo.scrolled {
                    background: rgba(255, 255, 255, 0.15);
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                    border-bottom-color: rgba(255, 255, 255, 0.25);
                }

                /* BRAND */
                .brand-neo {
                    letter-spacing: 1.5px;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #ffffff;
                    transition: all 0.3s ease;
                }

                .brand-neo span {
                    color: #0d6efd;
                    text-shadow: 0 0 10px rgba(13,110,253,0.7);
                }

                .brand-neo:hover {
                    text-shadow: 0 0 20px rgba(13,110,253,0.9), 0 0 30px rgba(94,163,255,0.6);
                }

                /* NAV LINKS */
                .nav-neo .nav-link {
                    position: relative;
                    font-weight: 600;
                    text-transform: uppercase;
                    padding-bottom: 6px;
                    color: #ffffff;
                    transition: color 0.3s ease, text-shadow 0.3s ease;
                }

                .nav-neo .nav-link:hover {
                    color: #0d6efd !important;
                    text-shadow: 0 0 12px rgba(13,110,253,0.7), 0 0 20px rgba(94,163,255,0.5);
                }

                /* ANIMATED UNDERLINE */
                .nav-neo .underline {
                    position: absolute;
                    left: 50%;
                    bottom: -3px;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #0d6efd, #5ea3ff, #0dcaf0);
                    transition: all 0.4s ease;
                    transform: translateX(-50%);
                    border-radius: 4px;
                }

                .nav-neo .nav-link:hover .underline {
                    width: 80%;
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
