import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <section id="home" className="Home text-center py-5 bg-primary text-white">
      <div className="container">
        <h4 className="display-4">Welcome to My Portfolio</h4>
        <p className="lead mt-3">
          Hello! I'm <strong>Ajinkya</strong>, a passionate <strong>.NET Developer</strong>.
        </p>
        <div className="mt-4">
          <a 
            href="#projects" 
            className="btn btn-light btn-lg me-2"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="btn btn-outline-light btn-lg"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
