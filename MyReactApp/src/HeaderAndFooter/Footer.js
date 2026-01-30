import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../PortfolioStyle/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            {/* Animated Background */}
            <div className="animated-bg"></div>

            {/* Floating Blobs */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>

            {/* Content */}
            <div className="footer-content container">

                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/ajinkya-ghodekar" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/ajinkyasghodekar" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-github"></i>
                    </a>

                    <a href="https://www.hackerrank.com/profile/ajinkyasghodekar" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-hackerrank"></i>
                    </a>

                    <a href="mailto:ajinkyasghodekar@gmail.com" className="social-icon">
                        <i className="fas fa-envelope"></i>
                    </a>

                    <a href="https://www.instagram.com/ajinkya.ghodekar/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a href="https://www.facebook.com/people/Ajinkya-Ghodekar/pfbid0eWcC4UVgqN2mCJnumMhMTwAnCweLdRoGGDjhmhr8jvMkerHdQCxYBq14peKn9bEHl/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>

                <p className="footer-text">
                    &copy; 2026 MyReactJsPortfolio. All rights reserved.
                </p>

            </div>
        </footer>
    );
}

export default Footer;
