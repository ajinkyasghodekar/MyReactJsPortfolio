import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../PortfolioStyle/About.css';

function About() {
    return (
        <section id="about" className="about-section py-5 position-relative">
            {/* AI Background Glow */}
            <div className="about-bg"></div>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <h2 className="text-center fw-bold mb-4 gradient-heading">
                    About Me
                </h2>

                <p className="text-center mx-auto about-text ai-text">
                    Hello, I'm <strong>Ajinkya</strong> - a <strong>Full Stack .NET Developer</strong> with
                    <strong> 4.5+ years</strong> of experience crafting scalable,
                    secure, and high-performance applications.
                    <br />
                </p>

                <span className="ai-sub">
                    I design systems that think ahead, scale effortlessly,
                    and perform reliably - just like good AI.
                </span>
                <div className="d-flex justify-content-center mt-5">
                    <div className="profile-wrapper">
                        <img
                            src="/images/default.jpg"
                            alt="Ajinkya"
                            className="profile-img-innovative"
                        />
                        <span className="ring ring-1"></span>
                        <span className="ring ring-2"></span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
