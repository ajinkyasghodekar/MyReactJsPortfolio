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
import { Button } from 'react-bootstrap'; 
import './App.css';  

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);  
      } else {
        setShowButton(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

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
        <section id="header">
          <Header />
        </section>

        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>

        <section id="download-resume" className="text-center py-5 bg-light">
          <h4>Download My Resume</h4>
          <p>Click the button below to download my latest resume.</p>
          <Button 
            variant="primary" 
            href="https://drive.google.com/uc?export=download&id=1KaYSBs069Ulv_xNnFyAAygMXsuRztds3" 
            target="_blank"
          >
            Download Resume
          </Button>
        </section>

        <section id="footer">
          <Footer />
        </section>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary position-fixed bottom-0 end-0 m-3"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            fontSize: '24px',
          }}
          aria-label="Go to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
