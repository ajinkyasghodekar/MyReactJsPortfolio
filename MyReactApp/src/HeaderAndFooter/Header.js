
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDownload } from 'react-icons/fa';
import '../PortfolioStyle/Header.css';

const RESUME_URL =
    'https://drive.google.com/uc?export=download&id=1rRbl3N-1MerVIADxGpUbHVEfwViKze9Q';

const PORTFOLIO_URL = 'https://ajinkya-ghodekar-portfolio.vercel.app/';

const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'work-experience' },
    { label: 'Contact', id: 'contact' }
];

function Header() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    const closeMenu = () => setIsExpanded(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;

            window.requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 20);

                const activationLine = 120;
                let currentSection = 'home';

                navItems.forEach(({ id }) => {
                    const section = document.getElementById(id);

                    if (
                        section &&
                        section.getBoundingClientRect().top <= activationLine
                    ) {
                        currentSection = id;
                    }
                });

                const nearBottom =
                    window.innerHeight + window.scrollY >=
                    document.documentElement.scrollHeight - 5;

                if (nearBottom) {
                    currentSection = 'contact';
                }

                setActiveSection(currentSection);
                ticking = false;
            });
        };

        window.addEventListener('scroll', handleScroll, {
            passive: true
        });

        window.addEventListener('resize', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const navigateToSection = (event, id) => {
        event.preventDefault();
        closeMenu();

        const section = document.getElementById(id);

        if (!section) return;

        const navbar = document.querySelector('.glass-nav-neo');
        const navbarHeight =
            navbar?.getBoundingClientRect().height ?? 0;

        const targetTop =
            section.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });

        setActiveSection(id);
        window.history.replaceState(null, '', `#${id}`);
    };

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-dark sticky-top glass-nav-neo ${isScrolled ? 'scrolled' : ''
                }`}
            aria-label="Main navigation"
        >
            <div className="container-fluid px-4">
                <a
                    className="navbar-brand fw-bold brand-neo"
                    href={PORTFOLIO_URL}
                    onClick={(event) => navigateToSection(event, 'home')}
                    aria-label="Ajinkya Ghodekar - Home"
                >
                    Ajinkya<span>.dev</span>
                </a>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={() =>
                        setIsExpanded((previous) => !previous)
                    }
                    aria-controls="portfolioNavbar"
                    aria-expanded={isExpanded}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div
                    id="portfolioNavbar"
                    className={`collapse navbar-collapse ${isExpanded ? 'show' : ''
                        }`}
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
                        {navItems.map(({ label, id }) => (
                            <li className="nav-item nav-neo" key={id}>
                                <a
                                    className={`nav-link ${activeSection === id ? 'active' : ''
                                        }`}
                                    href={`#${id}`}
                                    onClick={(event) =>
                                        navigateToSection(event, id)
                                    }
                                    aria-current={
                                        activeSection === id
                                            ? 'location'
                                            : undefined
                                    }
                                >
                                    {label}
                                    <span
                                        className="underline"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                        ))}

                        {/* Resume download button */}
                        <li className="nav-item nav-neo">
                            <a
                                className="nav-link resume-btn"
                                href={RESUME_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Download my resume PDF"
                                onClick={closeMenu}
                            >
                                <FaDownload aria-hidden="true" />
                                <span>Resume</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
