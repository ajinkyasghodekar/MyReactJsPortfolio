import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../PortfolioStyle/Home.css'
import { motion } from 'framer-motion';

function Home() {
  return (
    <section
      id="home"
      className="Home text-center py-5 text-white position-relative"
      style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        overflow: "hidden",
      }}
    >
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          zIndex: -1,
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 20%, transparent 60%)",
          animation: "move-bg 10s infinite alternate",
        }}
      ></div>

      <div className="container">
        <motion.h4
          className="display-4 animate__animated animate__fadeInDown"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Welcome !!!
        </motion.h4>

        <motion.p
          className="lead mt-3 animate__animated animate__fadeInUp"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hello! I'm <strong>Ajinkya</strong>, a <strong>.NET Developer</strong>.
        </motion.p>

        <motion.div
          className="mt-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a href="#projects" className="btn btn-light btn-sm me-2 shadow">
            Explore My Work
          </a>
          <a href="#contact" className="btn btn-outline-light btn-sm shadow">
            Let's Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
