import React, { useState, useEffect } from 'react';
import Header from './PortfolioJs/Header';
import Home from './PortfolioJs/Home';
import About from './PortfolioJs/About';
import Education from './PortfolioJs/Education';
import Projects from './PortfolioJs/Projects';
import Contact from './PortfolioJs/ContactMe';
import Skills from './PortfolioJs/Skills';
import Footer from './Footer';
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
      <h3> Coming Soon !!! </h3>
        <div className="App">
          <Header />
          <Home />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>

      {showButton && (
        <button onClick={scrollToTop} className="go-to-top">
          ↑ 
        </button>
      )}
    </div>
  );
}

export default App;
