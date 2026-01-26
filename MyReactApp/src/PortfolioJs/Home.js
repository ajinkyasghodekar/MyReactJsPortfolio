import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../PortfolioStyle/Home.css';
import { motion } from 'framer-motion';

function Home() {
    const text = "Hi, I'm ";
    const name = "Ajinkya Ghodekar";

    return (
        <section
            id="home"
            className="Home d-flex align-items-center text-center text-white position-relative"
            style={{ minHeight: '100vh', overflow: 'hidden' }}
        >
            {/* Animated gradient background */}
            <div className="animated-bg"></div>

            {/* Floating blobs */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                {/* Typewriter effect */}
                <h1 className="fw-bold mb-3 hero-title">
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <span className="gradient-text">
                        {name.split("").map((char, index) => (
                            <motion.span
                                key={index + text.length}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: (index + text.length) * 0.05 }}
                            >
                                {char}

                            </motion.span>
                        ))}
                    </span>
                </h1>

                <motion.h4
                    className="mb-4 hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    C# .NET Developer • Full‑Stack Engineer • Problem Solver
                </motion.h4>

                <motion.div
                    className="mt-4 d-flex justify-content-center gap-3 flex-wrap"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <a href="#projects" className="btn ai-btn-primary btn-lg px-4">
                        View Projects
                    </a>
                    <a href="#contact" className="btn ai-btn-outline btn-lg px-4">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
