import React, { useState, useEffect } from 'react';
import Header from './HeaderAndFooter/Header';
import Footer from './HeaderAndFooter/Footer';
import Home from './PortfolioJs/Home';
import About from './PortfolioJs/About';
import Education from './PortfolioJs/Education';
import Projects from './PortfolioJs/Projects';
import Contact from './PortfolioJs/Contact';
import Skills from './PortfolioJs/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

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

    setTimeout(() => setLoading(false), 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">

      <section id="header" className={`fade-in ${loading ? 'fade-out' : 'fade-in'}`}>
        <Header />
      </section>

      <section id="home" className={`fade-in ${loading ? 'fade-out' : 'fade-in'}`}>
        <Home />
      </section>

      <section id="about" className={`fade-in ${loading ? 'fade-out' : 'fade-in'}`}>
        <About />
      </section>

      <section id="education" className={`fade-in ${loading ? 'fade-out' : 'fade-in'}`}>
        <Education />
      </section>

      <section id="skills" className={`fade-in ${loading ? 'fade-out' : 'fade-in'}`}>
        <Skills />
      </section>

      <section id="projects" className={`fade-in ${loading ? 'fade-out' : 'fade-in'}`}>
        <Projects />
      </section>

      <section id="contact" className={`fade-in ${loading ? 'fade-out' : 'fade-in'}`}>
        <Contact />
      </section>

      <section id="download-resume" className="text-center py-5" style={{ background: '#f4f4f4' }}>
        <h4>Download My Resume</h4>
        <p>Click the button below to download my latest resume.</p>
        <Button
          variant="primary"
          href="https://drive.google.com/uc?export=download&id=1KaYSBs069Ulv_xNnFyAAygMXsuRztds3"
          target="_blank"
          style={{
            background: '#007bff',
            borderColor: '#007bff',
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '30px',
            boxShadow: '0 5px 15px rgba(0, 123, 255, 0.4)',
          }}
        >
          Download Resume
        </Button>
      </section>

      <section id="footer" className={`fade-in ${loading ? 'fade-out' : 'fade-in'}`} style={{ background: '#333', color: '#fff', padding: '40px 0' }}>
        <Footer />
      </section>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary position-fixed bottom-0 end-0 m-3"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            fontSize: '24px',
            backgroundColor: '#28a745',
            border: 'none',
            boxShadow: '0 5px 15px rgba(40, 167, 69, 0.3)',
            transition: 'all 0.3s ease-in-out',
          }}
          aria-label="Go to top"
        >
          ↑
        </button>
      )}

      <div
        className="progress-bar"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          height: '5px',
          width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
          backgroundColor: '#28a745',
          transition: 'width 0.2s ease',
        }}
      ></div>

      {loading && (
        <div className="loading-spinner">
          <Spinner animation="border" variant="light" />
          <p style={{ color: '#fff', fontSize: '20px' }}>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default App;
