import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../PortfolioStyle/Home.css';
import { motion } from 'framer-motion';

function Home() {
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
                <motion.h1
                    className="fw-bold mb-3 hero-title"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Hi, I'm <span className="gradient-text">Ajinkya</span> 👋
                </motion.h1>

                <motion.h4
                    className="mb-4 hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    .NET Developer • Full‑Stack Engineer • Problem Solver
                </motion.h4>

                <motion.p
                    className="lead mx-auto hero-desc"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    I build scalable, secure, and high‑performance applications with
                    modern .NET and web technologies.
                </motion.p>

                <motion.div
                    className="mt-4 d-flex justify-content-center gap-3 flex-wrap"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
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
