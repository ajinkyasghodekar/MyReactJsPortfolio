
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FaLinkedinIn,
    FaGithub,
    FaHackerrank,
    FaEnvelope,
    FaInstagram,
    FaFacebookF,
    FaHeart
} from 'react-icons/fa';
import '../PortfolioStyle/Footer.css';

const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ajinkya-ghodekar',
        icon: FaLinkedinIn
    },
    {
        name: 'GitHub',
        url: 'https://github.com/ajinkyasghodekar',
        icon: FaGithub
    },
    {
        name: 'HackerRank',
        url: 'https://www.hackerrank.com/profile/ajinkyasghodekar',
        icon: FaHackerrank
    },
    {
        name: 'Email',
        url: 'mailto:ajinkyasghodekar@gmail.com',
        icon: FaEnvelope
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/ajinkya.ghodekar/',
        icon: FaInstagram
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/people/Ajinkya-Ghodekar/pfbid0eWcC4UVgqN2mCJnumMhMTwAnCweLdRoGGDjhmhr8jvMkerHdQCxYBq14peKn9bEHl/',
        icon: FaFacebookF
    }
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="portfolio-footer">
            <div className="footer-background" aria-hidden="true">
                <div className="footer-glow footer-glow-left"></div>
                <div className="footer-glow footer-glow-right"></div>
            </div>

            <div className="container footer-content">
                <a href="#home" className="footer-brand">
                    <span className="footer-brand-mark">AG</span>
                    <span>
                        Ajinkya <strong>Ghodekar</strong>
                    </span>
                </a>

                <p className="footer-tagline">
                    Building reliable applications with .NET, React, Azure,
                    and a passion for solving problems.
                </p>

                <nav className="footer-socials" aria-label="Social media links">
                    {socialLinks.map(({ name, url, icon: Icon }) => (
                        <a
                            key={name}
                            href={url}
                            className="footer-social-link"
                            aria-label={name}
                            title={name}
                            target={url.startsWith('mailto:') ? undefined : '_blank'}
                            rel={
                                url.startsWith('mailto:')
                                    ? undefined
                                    : 'noopener noreferrer'
                            }
                        >
                            <Icon aria-hidden="true" />
                        </a>
                    ))}
                </nav>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; {currentYear} Ajinkya Ghodekar.
                        All rights reserved.
                    </p>

                    <p className="footer-made-with">
                        Designed with <FaHeart aria-hidden="true" /> and built
                        with <span>React</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
