import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FaLinkedinIn,
    FaGithub,
    FaHackerrank,
    FaEnvelope,
    FaInstagram,
    FaFacebookF
} from 'react-icons/fa';
import '../PortfolioStyle/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-glow"></div>

            <div className="container position-relative">
                {/* Social Icons */}
                <div className="footer-socials">
                    <a
                        href="https://www.linkedin.com/in/ajinkya-ghodekar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>

                    <a
                        href="https://github.com/ajinkyasghodekar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.hackerrank.com/profile/ajinkyasghodekar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="HackerRank"
                    >
                        <FaHackerrank />
                    </a>

                    <a
                        href="mailto:ajinkyasghodekar@gmail.com"
                        className="social-icon"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>

                    <a
                        href="https://www.instagram.com/ajinkya.ghodekar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.facebook.com/people/Ajinkya-Ghodekar/pfbid0eWcC4UVgqN2mCJnumMhMTwAnCweLdRoGGDjhmhr8jvMkerHdQCxYBq14peKn9bEHl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                </div>

                {/* Copyright */}
                <p className="footer-text">
                    &copy; 2026 Ajinkya Ghodekar. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
