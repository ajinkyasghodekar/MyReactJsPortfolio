import React, { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Button } from 'react-bootstrap';
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

function App() {
    const [showButton, setShowButton] = useState(false);
    const [loading, setLoading] = useState(true);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrollY(scrollPosition);
            setShowButton(scrollPosition > 300);
        };

        window.addEventListener('scroll', handleScroll);

        const timer = setTimeout(() => setLoading(false), 1500);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight || 1;

    return (
        <div className="App">

            <section id="header" className={loading ? 'fade-out' : 'fade-in'}>
                <Header />
            </section>

            <section id="home" className={loading ? 'fade-out' : 'fade-in'}>
                <Home />
            </section>

            <section id="about" className={loading ? 'fade-out' : 'fade-in'}>
                <About />
            </section>

            <section id="education" className={loading ? 'fade-out' : 'fade-in'}>
                <Education />
            </section>

            <section id="skills" className={loading ? 'fade-out' : 'fade-in'}>
                <Skills />
            </section>

            <section id="projects" className={loading ? 'fade-out' : 'fade-in'}>
                <Projects />
            </section>

            <section id="workExperience" className={loading ? 'fade-out' : 'fade-in'}>
                <WorkExperience />
            </section>

            <section id="contact" className={loading ? 'fade-out' : 'fade-in'}>
                <Contact />
            </section>

            {/* Resume Download */}
            <section id="download-resume" className="container position-relative">
                <div className="download-bg"></div>

                <div className="download-content">
                    <h4>Download My Resume</h4>
                    <p>Click the button below to download my latest resume.</p>

                    <Button
                        as="a"
                        href="https://drive.google.com/uc?export=download&id=1EEGgpuAYsdsae42pfUUO4UdnF449uuFy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn"
                    >
                        Download Resume
                    </Button>

                </div>
            </section>

            <section
                id="footer"
                className={`fade-in ${loading ? 'fade-out' : 'fade-in'}`}
            >
                <Footer />
            </section>

            {/* Scroll To Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="btn position-fixed bottom-0 end-0 m-3"
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        fontSize: '24px',
                        backgroundColor: '#28a745',
                        border: 'none',
                        boxShadow: '0 5px 15px rgba(40,167,69,0.3)',
                    }}
                    aria-label="Go to top"
                >
                    ↑
                </button>
            )}

            {/* Scroll Progress Bar */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '5px',
                    width: `${(scrollY / totalHeight) * 100}%`,
                    backgroundColor: '#28a745',
                    zIndex: 9999,
                    transition: 'width 0.2s ease',
                }}
            />

            {/* Vercel Speed Insights */}
            <SpeedInsights />
        </div>
    );
}

export default App;
