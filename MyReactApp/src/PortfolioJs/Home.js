
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../PortfolioStyle/Home.css';
import { motion, useReducedMotion } from 'framer-motion';

const RESUME_URL =
    'https://drive.google.com/uc?export=download&id=1rRbl3N-1MerVIADxGpUbHVEfwViKze9Q';

const technologies = [
    'C# / .NET',
    'ASP.NET Core',
    'ReactJS',
    'Microsoft Azure',
    'Azure DevOps',
    'SQL Server'
];

function Home() {
    const shouldReduceMotion = useReducedMotion();

    const reveal = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: shouldReduceMotion ? 0 : 0.65,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section
            id="home"
            className="Home hero-section d-flex align-items-center text-white position-relative"
            aria-labelledby="hero-title"
        >
            {/* Animated background */}
            <div className="animated-bg" aria-hidden="true" />

            {/* Floating decorative elements */}
            <div className="blob blob-1" aria-hidden="true" />
            <div className="blob blob-2" aria-hidden="true" />
            <div className="blob blob-3" aria-hidden="true" />

            <div className="container hero-container position-relative">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10 text-center">

                        <motion.p
                            className="hero-eyebrow"
                            variants={reveal}
                            initial="hidden"
                            animate="visible"
                        >
                            <span className="status-dot" />
                            SENIOR SOFTWARE ENGINEER
                        </motion.p>

                        <motion.h1
                            id="hero-title"
                            className="hero-title fw-bold"
                            variants={reveal}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: shouldReduceMotion ? 0 : 0.1 }}
                        >
                            Hi, I'm
                            <span className="gradient-text hero-name">
                                {' '}Ajinkya Ghodekar
                            </span>
                        </motion.h1>

                        <motion.h2
                            className="hero-role"
                            variants={reveal}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
                        >
                            Senior .NET Full Stack Developer
                        </motion.h2>

                        <motion.p
                            className="hero-desc mx-auto"
                            variants={reveal}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
                        >
                            Building scalable enterprise applications with
                            C#, ASP.NET Core, ReactJS, and Microsoft Azure.
                            Experienced in CI/CD automation, cloud
                            integrations, and AI/NLP evaluation workflows.
                        </motion.p>

                        <motion.div
                            className="hero-tech-stack d-flex justify-content-center flex-wrap"
                            variants={reveal}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
                            aria-label="Core technologies"
                        >
                            {technologies.map((technology) => (
                                <span className="tech-chip" key={technology}>
                                    {technology}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="hero-actions d-flex justify-content-center align-items-center flex-wrap"
                            variants={reveal}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: shouldReduceMotion ? 0 : 0.5 }}
                        >
                            <a
                                href="#projects"
                                className="btn ai-btn-primary btn-lg"
                            >
                                View Projects
                                <i
                                    className="bi bi-arrow-up-right ms-2"
                                    aria-hidden="true"
                                />
                            </a>

                            <a
                                href={RESUME_URL}
                                className="btn ai-btn-outline btn-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i
                                    className="bi bi-file-earmark-pdf me-2"
                                    aria-hidden="true"
                                />
                                Download Resume
                            </a>

                            <a
                                href="#contact"
                                className="btn hero-contact-link"
                            >
                                Let's Connect
                                <i
                                    className="bi bi-arrow-right ms-2"
                                    aria-hidden="true"
                                />
                            </a>
                        </motion.div>

                        <motion.div
                            className="hero-footer-note"
                            variants={reveal}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: shouldReduceMotion ? 0 : 0.6 }}
                        >
                            <span>Full-Stack Development</span>
                            <span className="hero-separator">·</span>
                            <span>Cloud & DevOps</span>
                            <span className="hero-separator">·</span>
                            <span>AI-Enabled Workflows</span>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
