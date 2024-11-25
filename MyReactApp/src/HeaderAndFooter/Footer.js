import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a
            href="https://www.linkedin.com/in/ajinkya-ghodekar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            <i className="fab fa-linkedin fa-lg"></i> LinkedIn
          </a>
          <span>|</span>
          <a
            href="https://github.com/ajinkyasghodekar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            <i className="fab fa-github fa-lg"></i> GitHub
          </a>
          <span>|</span>
          <a
            href="https://www.hackerrank.com/profile/ajinkyasghodekar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            <i className="fab fa-hackerrank fa-lg"></i> HackerRank
          </a>
          <span>|</span>
          <a
            href="mailto:ajinkyasghodekar@gmail.com"
            className="text-white text-decoration-none"
          >
            <i className="fas fa-envelope fa-lg"></i> Email
          </a>
        </div>
         <section>
         <p className="mb-2">&copy; 2024 MyReactJsPortfolio. All rights reserved.</p>
         </section>
      </div>
    </footer>
  );
}

export default Footer;
