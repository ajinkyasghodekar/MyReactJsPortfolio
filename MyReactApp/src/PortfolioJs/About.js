import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../PortfolioStyle/About.css';

function About() {
    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <h4 className="text-center mb-4">About Me</h4>

                <p className="text-center text-muted">
                    I am a C# .NET Developer with over 4.5+ years of experience in building scalable, maintainable solutions using C#, .NET, and front-end technologies like React.js, HTML, CSS, and JavaScript. I specialize in developing RESTful web applications, implementing security best practices, and collaborating effectively with cross-functional teams to deliver high-quality software.
                </p>

                <div className="text-center mt-4">
                    <img
                        src="/images/default.jpg"
                        alt="Profile"
                        className="profile-img"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
