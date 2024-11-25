import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <div className="row justify-content-center gap-3 mb-3">
            {/* Social media links section */}
            <div className="col-12 col-md-auto">
              <a
                href="https://www.linkedin.com/in/ajinkya-ghodekar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fab fa-linkedin fa-lg"></i> LinkedIn
              </a>
            </div>
            <div className="col-12 col-md-auto">
              <span className="text-white"></span>
            </div>
            <div className="col-12 col-md-auto">
              <a
                href="https://github.com/ajinkyasghodekar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fab fa-github fa-lg"></i> GitHub
              </a>
            </div>
            <div className="col-12 col-md-auto">
              <span className="text-white"></span>
            </div>
            <div className="col-12 col-md-auto">
              <a
                href="https://www.hackerrank.com/profile/ajinkyasghodekar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fab fa-hackerrank fa-lg"></i> HackerRank
              </a>
            </div>
            <div className="col-12 col-md-auto">
              <span className="text-white"></span>
            </div>
            <div className="col-12 col-md-auto">
              <a
                href="mailto:ajinkyasghodekar@gmail.com"
                className="text-white text-decoration-none"
              >
                <i className="fas fa-envelope fa-lg"></i> Email
              </a>
            </div>
            <div className="col-12 col-md-auto">
              <span className="text-white"></span>
            </div>
            <div className="col-12 col-md-auto">
              <a
                href="https://www.facebook.com/yourfacebookprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fab fa-facebook fa-lg"></i> Facebook
              </a>
            </div>
            <div className="col-12 col-md-auto">
              <span className="text-white"></span>
            </div>
            <div className="col-12 col-md-auto">
              <a
                href="https://www.instagram.com/yourinstaprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="fab fa-instagram fa-lg"></i> Instagram
              </a>
            </div>
          </div>

          {/* Copyright section */}
          <section>
            <p className="mb-2">&copy; 2024 MyReactJsPortfolio. All rights reserved.</p>
          </section>
        </div>
      </footer>
  );
}

export default Footer;
