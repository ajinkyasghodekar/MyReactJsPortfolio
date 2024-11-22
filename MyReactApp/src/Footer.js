import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MyReactJsPortfolio. All rights reserved.</p>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/ajinkya-ghodekar" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a> |
            <a href="https://github.com/ajinkyasghodekar" target="_blank" rel="noopener noreferrer">
                GitHub
            </a> |
            <a href="https://www.hackerrank.com/profile/ajinkyasghodekar" target="_blank" rel="noopener noreferrer">
                HakerRank
            </a> |
            <a href="mailto:ajinkyasghodekar@gmail.com">
                Email
            </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
