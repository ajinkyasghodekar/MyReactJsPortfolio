
import React, { useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { FaArrowUp, FaDownload, FaFileAlt } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import Header from './HeaderAndFooter/Header';
import Footer from './HeaderAndFooter/Footer';

import Home from './PortfolioJs/Home';
import About from './PortfolioJs/About';
import Education from './PortfolioJs/Education';
import Skills from './PortfolioJs/Skills';
import Projects from './PortfolioJs/Projects';
import WorkExperience from './PortfolioJs/WorkExperience';
import Contact from './PortfolioJs/Contact';

const RESUME_URL =
    'https://drive.google.com/uc?export=download&id=1rRbl3N-1MerVIADxGpUbHVEfwViKze9Q';

function App() {
    const [showButton, setShowButton] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let ticking = false;

        const updateScrollState = () => {
            const scrollTop =
                window.scrollY ||
                document.documentElement.scrollTop;

            const scrollableHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const progress =
                scrollableHeight > 0
                    ? Math.min(
                        100,
                        Math.max(0, (scrollTop / scrollableHeight) * 100)
                    )
                    : 0;

            setScrollProgress(progress);
            setShowButton(scrollTop > 350);
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollState);
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        updateScrollState();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                ? 'auto'
                : 'smooth'
        });
    };

    return (
        <div className="App">
            {/* Scroll progress indicator */}
            <div
                className="app-scroll-progress"
                style={{ width: `${scrollProgress}%` }}
                role="progressbar"
                aria-label="Page scroll progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(scrollProgress)}
            />

            {/* Main navigation */}
            <Header />

            {/* Portfolio sections
                Each component owns its section ID to avoid duplicate IDs. */}
            <main>
                <Home />
                <About />
                <Education />
                <Skills />
                <Projects />
                <WorkExperience />
                <Contact />

                {/* Resume section */}
                <section
                    id="download-resume"
                    className="resume-section"
                    aria-labelledby="resume-heading"
                >
                    <div className="resume-background" aria-hidden="true">
                        <span className="resume-glow resume-glow-left"></span>
                        <span className="resume-glow resume-glow-right"></span>
                    </div>

                    <div className="container resume-content">
                        <div className="resume-icon">
                            <FaFileAlt aria-hidden="true" />
                        </div>

                        <span className="resume-eyebrow">
                            LET'S WORK TOGETHER
                        </span>

                        <h2 id="resume-heading">
                            Interested in my <span>profile?</span>
                        </h2>

                        <p className="resume-description">
                            Explore my experience, technical skills, and
                            professional background in my resume.
                        </p>

                        <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-download-btn"
                        >
                            <FaDownload aria-hidden="true" />
                            Download My Resume
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />

            {/* Back to top */}
            {showButton && (
                <button
                    type="button"
                    className="go-to-top"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    title="Back to top"
                >
                    <FaArrowUp aria-hidden="true" />
                </button>
            )}

            {/* Vercel performance monitoring */}
            <SpeedInsights />
        </div>
    );
}

export default App;
